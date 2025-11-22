export interface CurrentWeather {
  cord: { lon: number; lat: number }
  timezone: number
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  clouds: { all: number }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  name: string
}

export interface DailyForecast {
  dt: number
  dt_txt: string
  main: {
    temp: number
  }
  weather: {
    icon: string
  }[]
}

export interface Dates {
  enGregorian: string
  faJalali: string
  time24: string
  enDayName: string
  faDayName: string
}
export interface ForecastAPIResponse {
  list: {
    dt: number
    dt_txt: string
    main: {
      temp: number
      temp_min: number
      temp_max: number
      humidity: number
    }
    weather: {
      main: string
      description: string
      icon: string
    }[]
  }[]
}
