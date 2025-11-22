import { Box, Stack } from '@mui/material'
import ForecastWeather from './ForecastWeather.tsx'
import WeatherDetail from './WeatherDetail.tsx'
import ChartWeather from './ChartWeather.tsx'

function MainSection() {
  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '2fr 3fr',
            },
            alignItems: 'stretch',
          }}
        >
          <WeatherDetail />
          <ChartWeather />
        </Box>

        <ForecastWeather />
      </Stack>
    </Box>
  )
}

export default MainSection
