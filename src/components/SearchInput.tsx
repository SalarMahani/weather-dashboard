import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Autocomplete,
  CircularProgress,
  TextField,
  useTheme,
} from '@mui/material'
import axios from 'axios'

interface SearchInputProps {
  onSelectLocation: (lat: number, lon: number) => void
}
export interface CityResult {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

function SearchInput({ onSelectLocation }: SearchInputProps) {
  const theme = useTheme()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<CityResult[]>([])
  const [loading, setLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

  const handleSelect = (city: CityResult | null) => {
    if (city) {
      onSelectLocation(city.lat, city.lon) // <---  we send lat and lon to the weather context
      // so we use it to fetch city weather data from it.
    }
  }

  useEffect(() => {
    if (inputValue.length < 2) return

    const controller = new AbortController()

    const load = async () => {
      setLoading(true)
      try {
        const res = await axios.get<CityResult[]>(
          `https://api.openweathermap.org/geo/1.0/direct`,
          {
            params: {
              q: inputValue,
              limit: 5,
              appid: API_KEY,
            },
            signal: controller.signal, // axios supports AbortController
          },
        )

        setOptions(Array.isArray(res.data) ? res.data : [])
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          // fetch aborted, ignore
        } else {
          console.error('Error loading cities:', err)
        }
      } finally {
        setLoading(false)
      }
    }

    load()

    return () => controller.abort() // <-- we cleanup just in case.!
  }, [inputValue, API_KEY])

  return (
    <Autocomplete
      disablePortal
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => {
        setOpen(false)
        setOptions([])
      }}
      onChange={(_, city) => handleSelect(city)}
      options={options}
      loading={loading}
      size="small"
      getOptionLabel={(o) =>
        `${o.name}${o.state ? `, ${o.state}` : ''}, ${o.country}`
      }
      onInputChange={(_, value) => setInputValue(value)}
      sx={{ width: { xs: '100%', sm: '100%', md: 300 } }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '12px',
            color: theme.palette.text.primary,
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t('dashboardLocationInputLabel')}
          color="primary"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress size={18} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  )
}

export default SearchInput
