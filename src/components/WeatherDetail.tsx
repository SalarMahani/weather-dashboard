import { Box, Card, Typography, useTheme } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { useWeather } from '../context/WeatherContext.tsx'

function WeatherDetail() {
  const theme = useTheme()
  const { t } = useTranslation()
  const { currentWeather, date } = useWeather()

  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: 'grid',
        gap: { xs: 1, sm: 3 },
        p: { xs: 2, sm: 3 },
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },
        gridTemplateRows: {
          xs: 'auto auto auto auto',
          md: '1fr 1fr',
        },
      }}
    >
      {/* Left Top Section */}
      <Box
        sx={{
          gridColumn: 1,
          gridRow: 1,
        }}
      >
        {/* Location Tag */}
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            width: 'fit-content',
            borderRadius: '20px',
            px: 2,
            py: 1,
            mb: { xs: 2, sm: 1 },
            mt: { xs: 3 },
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: 14, sm: 16 },
          }}
        >
          <LocationOnIcon
            sx={{
              mr: 1,
              fontSize: { xs: 18, sm: 20 },
              color: theme.palette.primary.main,
            }}
          />
          {currentWeather?.name}
        </Box>

        {/* Day */}
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 42, md: 60 },
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {i18n.language === 'en' ? date?.enDayName : date?.faDayName}
        </Typography>

        {/* Date */}
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: 13, sm: 15 },
            mt: { xs: 2, sm: 1 },
          }}
        >
          {i18n.language === 'en' ? date?.enGregorian : date?.faJalali}—
          {date?.time24}
        </Typography>
      </Box>

      {/* Left Bottom Section */}
      <Box
        sx={{
          gridColumn: 1,
          gridRow: { xs: 2, md: 2 },
          mt: { xs: 2, sm: 1 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 36, sm: 48, md: 60 },
            fontWeight: 600,
          }}
        >
          {Math.floor(currentWeather?.main.temp ?? 0)}
          °C
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: 13, sm: 15 }, mt: 1 }}
        >
          {t('dashboardWeatherDetailLowTitle')}
          {Math.floor(currentWeather?.main.temp_min ?? 0)}&nbsp;—
          {t('dashboardWeatherDetailHighTitle')}
          {Math.floor(currentWeather?.main.temp_max ?? 0)}
        </Typography>
      </Box>

      {/* Right image */}
      <Box
        sx={{
          gridColumn: { xs: 2, md: 2 },
          gridRow: { xs: 1, md: 1 },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          mt: { xs: 2, md: 0 },
        }}
      >
        <Box
          component="img"
          src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@4x.png`}
          alt={'weather icon'}
          sx={{
            width: { xs: '100%', sm: '150%', md: '130%', lg: '150%' },
            maxWidth: 300,
            position: { xs: 'absolute', sm: 'relative', md: 'absolute' },
            right: { xs: 0, sm: -20, md: 10, lg: -10 },
            top: { xs: -35, sm: -10, md: -20, lg: -70 },
          }}
        />
      </Box>

      {/* Right bottom */}
      <Box
        sx={{
          gridColumn: 2,
          gridRow: 2,
          mt: { xs: 1, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 42, sm: 42, md: 40 },
            textAlign: 'center',
          }}
        >
          {currentWeather?.weather[0]?.description}
        </Typography>
        <Typography
          sx={{
            opacity: 0.7,
            fontSize: { xs: 20, sm: 18, md: 20 },

            textAlign: 'center',
            mt: 1,
          }}
          color="text.secondary"
        >
          {i18n.language === 'fa' ? (
            <>
              {Math.floor(currentWeather?.main.feels_like ?? 0)} °C &nbsp;
              {t('dashboardWeatherDetailFeelTitle')}
            </>
          ) : (
            <>
              {t('dashboardWeatherDetailFeelTitle')}&nbsp;{' '}
              {Math.floor(currentWeather?.main.feels_like ?? 0)} °C
            </>
          )}
        </Typography>
      </Box>
    </Card>
  )
}

export default WeatherDetail
