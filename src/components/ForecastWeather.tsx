import { Box, Typography, useTheme } from '@mui/material'
import DaySummery from './DaySummery.tsx'
import { useTranslation } from 'react-i18next'

function ForecastWeather() {
  const theme = useTheme()
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        p: { xs: 2, sm: 3 },
        pt: { xs: 2, sm: 3 },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: 18, sm: 20, md: 24 },
          fontWeight: 600,
          mb: 2,
          color: theme.palette.text.primary,
          display: 'flex',
        }}
      >
        {t('dashboardForecastWeatherTile')}
      </Typography>

      {/* Forecast Scroll Section */}
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 1.5, sm: 2 },
          overflowX: 'auto',
          pb: 1,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        {/*here we generate five day components to show the 5 days forecast*/}
        {Array.from({ length: 5 }).map((_, index) => (
          <DaySummery key={index} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default ForecastWeather
