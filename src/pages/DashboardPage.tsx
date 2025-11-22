import { Box } from '@mui/material'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import MainSection from '../components/MainSection.tsx'
import { WeatherProvider } from '../context/WeatherContext.tsx'
import { useState } from 'react'

//explanation: dashboard page.
export default function DashboardPage() {
  const [lat, setLat] = useState<number | null>(null)
  const [lon, setLon] = useState<number | null>(null)
  function handleLocationSelect(lat: number, lon: number) {
    setLat(lat)
    setLon(lon)
  }

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Header onLocationSelect={handleLocationSelect} />

      <Box sx={{ flexGrow: 1 }}>
        <WeatherProvider lat={lat} lon={lon}>
          <MainSection />
        </WeatherProvider>
      </Box>

      <Footer />
    </Box>
  )
}
