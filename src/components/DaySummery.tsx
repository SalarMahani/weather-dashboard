import { Box, Paper, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useWeather } from '../context/WeatherContext.tsx'
import { getForecastDayNames } from '../utils/Weather/dayName.ts'

function DaySummery({ index }: { index: number }) {
  const theme = useTheme()
  const { forecast } = useWeather()
  const { i18n } = useTranslation()
  const { enDayName, faDayName } = getForecastDayNames(forecast[index]?.dt_txt)

  return (
    <Paper
      sx={{
        width: { xs: 120, sm: 150, md: 170 },
        height: { xs: 220, sm: 260, md: 300 },
        p: { xs: 1.5, sm: 2 },
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.text.primary,
        textAlign: 'center',
        flexShrink: 0,
      }}
    >
      {/* Day title */}
      <Typography
        sx={{
          fontSize: { xs: 14, sm: 16 },
          fontWeight: 600,
        }}
      >
        {i18n.language === 'fa' ? faDayName : enDayName}
      </Typography>

      {/* Weather icon */}
      <Box
        component="img"
        src={`https://openweathermap.org/img/wn/${forecast[index]?.weather[0]?.icon}@4x.png`}
        alt={'weather icon'}
        sx={{
          width: { xs: 80, sm: 120, md: 180 },
          my: { xs: 1, sm: 1.5 },
        }}
      />

      {/* Temperature */}
      <Typography
        sx={{
          fontSize: { xs: 16, sm: 18, md: 20 },
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        {Math.floor(forecast[index]?.main?.temp)}°C
      </Typography>
    </Paper>
  )
}

export default DaySummery
