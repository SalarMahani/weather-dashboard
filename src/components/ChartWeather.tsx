import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { LineChart } from '@mui/x-charts'
import { useTranslation } from 'react-i18next'
import { useWeather } from '../context/WeatherContext.tsx'

function ChartWeather() {
  const theme = useTheme()
  const { i18n, t } = useTranslation()
  const { pastMonths } = useWeather()
  const data = i18n.language === 'fa' ? pastMonths.fa : pastMonths.en

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  // Dynamic chart height
  const chartHeight = isMobile ? 220 : isTablet ? 260 : 300

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography
          variant="h6"
          mb={1}
          color="text.primary"
          sx={{ fontSize: { xs: 16, sm: 18 } }}
        >
          {t('dashboardChartWeatherTitle')}
        </Typography>
      </CardContent>
      {data.length < 3 ? null : (
        <Box sx={{ px: { xs: 1, sm: 2 }, height: chartHeight }}>
          <LineChart
            width={undefined} // to make it responsive,why? i don't know yet.
            height={chartHeight}
            series={[
              {
                data: data.map((d) => d.y),
                color: theme.palette.text.primary,
              },
            ]}
            xAxis={[
              {
                data: data.map((d) => d.x),
                scaleType: 'point',
                tickLabelStyle: {
                  fill: theme.palette.text.primary,
                  fontSize: isMobile ? 10 : 12,
                },
              },
            ]}
            sx={{
              '& .MuiLineElement-root': {
                stroke: theme.palette.text.primary,
              },
              '& .MuiMarkElement-root': {
                stroke: theme.palette.text.primary,
              },
              '& .MuiChartsAxis-line': {
                stroke: theme.palette.text.primary,
              },
              '& .MuiChartsAxis-tickLabel': {
                fill: theme.palette.text.primary,
              },
              '& .MuiChartsAxis-tick': {
                stroke: theme.palette.text.primary,
              },
              '& .MuiChartsTooltip-root': {
                color: theme.palette.text.primary,
              },
            }}
          />
        </Box>
      )}
    </Card>
  )
}

export default ChartWeather
