import { Box, useTheme } from '@mui/material'
import LanguageSelector from '../components/LanguageSelector.tsx'
import LoginForm from '../components/LoginForm.tsx'

//explanation: login form page
export default function LoginPage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 4,
        p: 2,
      }}
    >
      <LoginForm />
      <LanguageSelector />
    </Box>
  )
}
