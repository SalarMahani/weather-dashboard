// // NOTE TO FUTURE ME (or anyone reading this):
// // If you're looking at this section, you're probably trying to understand the
// // core logic of the application. Right now, this part of the code is messy and
// // definitely needs refactoring — several pieces of logic should be moved into
// // their own modules.
// //
// // I'm too tired to properly clean this mess up at the moment, so I'll revisit it
// // once I get some rest. Until then, if something here confuses you or you're
// // stuck, feel free to reach out to me, or if you are Me who reading this in the future just
// // create a Time machine and come ask me directly. :)

import { createContext, useContext, useEffect, useState } from 'react'
import type {
  CurrentWeather,
  DailyForecast,
  Dates,
  ForecastAPIResponse,
} from '../types/weatherTypes.ts'
import dayjs from '../utils/date.ts'
import { useThemeMode } from './ThemeModeContext.ts'
import axios from 'axios'

interface WeatherContextType {
  currentWeather: CurrentWeather | null
  forecast: DailyForecast[]
  loading: boolean
  error: string | null
  date: Dates | null
  pastMonths: {
    en: { x: string; y: number }[]
    fa: { x: string; y: number }[]
  }
}

const WeatherContext = createContext<WeatherContextType | null>(null)

export function useWeather() {
  const ctx = useContext(WeatherContext)
  if (!ctx) throw new Error('useWeather must be used inside <WeatherProvider>')
  return ctx
}

interface WeatherProviderProps {
  lat: number | null
  lon: number | null
  children: React.ReactNode
}

export function WeatherProvider({ lat, lon, children }: WeatherProviderProps) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  )
  const [forecast, setForecast] = useState<DailyForecast[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [date, setDate] = useState<Dates | null>(null)

  const [pastMonths, setPastMonths] = useState<{
    en: { x: string; y: number }[]
    fa: { x: string; y: number }[]
  }>({
    en: [],
    fa: [],
  })

  const { language } = useThemeMode()
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

  // ⭐ Default city = Berlin (first-time startup)
  const DEFAULT_LAT = 52.52
  const DEFAULT_LON = 13.405

  // if props are null → use Berlin
  const effectiveLat = lat ?? DEFAULT_LAT
  const effectiveLon = lon ?? DEFAULT_LON

  // -----------------------------
  // Fetch Current + Forecast
  // -----------------------------
  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      setError(null)

      try {
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              lat: effectiveLat,
              lon: effectiveLon,
              units: 'metric',
              lang: language,
              appid: API_KEY,
            },
          }),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
              lat: effectiveLat,
              lon: effectiveLon,
              units: 'metric',
              lang: language,
              appid: API_KEY,
            },
          }),
        ])

        const current = currentRes.data
        const forecastData: ForecastAPIResponse = forecastRes.data
        const daily = extractDailyForecast(forecastData)

        setCurrentWeather(current)
        setForecast(daily)
      } catch (e: any) {
        setError(`Failed to load weather: ${e.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [effectiveLat, effectiveLon, language])

  // -----------------------------
  // Format current date/time
  // -----------------------------
  useEffect(() => {
    if (!currentWeather?.dt) return

    const formatted = formatCityCurrentTime(currentWeather.timezone)
    setDate(formatted)
  }, [currentWeather?.dt])

  // -----------------------------
  // Fetch Past Months
  // -----------------------------
  useEffect(() => {
    async function loadPastMonths() {
      try {
        const stationId = await fetchStationId(effectiveLat, effectiveLon)
        if (!stationId) return console.log('No weather station found.')

        const monthlyTemp = await fetchPast12Months(stationId)
        setPastMonths(monthlyTemp)
      } catch (err) {
        console.error('Failed to load past months', err)
      }
    }

    loadPastMonths()
  }, [effectiveLat, effectiveLon])

  // -----------------------------
  // Provider
  // -----------------------------
  return (
    <WeatherContext.Provider
      value={{ currentWeather, forecast, loading, error, date, pastMonths }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

// ----------------------------------------------------
// Utility Functions
// ----------------------------------------------------

function extractDailyForecast(
  forecastData: ForecastAPIResponse,
): DailyForecast[] {
  const map = new Map<string, ForecastAPIResponse['list'][number]>()

  forecastData.list.forEach((item) => {
    const day = item.dt_txt.split(' ')[0]
    if (!map.has(day)) map.set(day, item)
  })

  return Array.from(map.values()).slice(0, 6)
}

function formatCityCurrentTime(timezoneOffset: number): Dates {
  const nowUtc = dayjs.utc()
  const local = nowUtc.add(timezoneOffset, 'second')

  return {
    enGregorian: local.locale('en').format('DD MMMM YYYY'),
    faJalali: local.calendar('jalali').locale('fa').format('DD MMMM YYYY'),
    time24: local.format('HH:mm'),
    enDayName: local.locale('en').format('dddd'),
    faDayName: local.calendar('jalali').locale('fa').format('dddd'),
  }
}

// -----------------------------
// Fetch station ID
// -----------------------------

async function fetchStationId(lat: number, lon: number) {
  const url = 'https://meteostat.p.rapidapi.com/stations/nearby'

  const res = await axios.get(url, {
    params: { lat, lon },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'meteostat.p.rapidapi.com',
    },
  })

  const data = res.data
  if (!data?.data?.length) return null

  return data.data[0].id
}

// -----------------------------
// Fetch past 12 months
// -----------------------------
async function fetchPast12Months(stationId: string) {
  const today = dayjs().format('YYYY-MM-DD')
  const lastYear = dayjs().subtract(12, 'month').format('YYYY-MM-DD')

  const url = 'https://meteostat.p.rapidapi.com/stations/daily'

  const res = await axios.get(url, {
    params: {
      station: stationId,
      start: lastYear,
      end: today,
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'meteostat.p.rapidapi.com',
    },
  })

  const json = res.data
  const rows = json.data || []

  const monthMap: Record<string, number[]> = {}

  rows.forEach((row: any) => {
    const month = row.date.slice(0, 7)
    if (!monthMap[month]) monthMap[month] = []
    if (row.tavg != null) monthMap[month].push(row.tavg)
  })

  const sortedMonths = Object.keys(monthMap).sort()

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const faMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ]

  const final = sortedMonths.map((monthStr) => {
    const temps = monthMap[monthStr]
    const avg = temps.reduce((a, b) => a + b, 0) / temps.length
    const monthIndex = parseInt(monthStr.slice(5, 7), 10) - 1

    return {
      x: monthNames[monthIndex],
      y: Number(avg.toFixed(1)),
    }
  })

  const finalFa = sortedMonths.map((_, i) => ({
    x: faMonths[i % 12],
    y: final[i].y,
  }))

  return {
    en: final,
    fa: finalFa,
  }
}
