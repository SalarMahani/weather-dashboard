import { Box, Card, Divider, useTheme } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { setUser, type User } from '../utils/auth.ts'
import ImageLoginForm from './ImageLoginForm.tsx'
import FormLogin from './FormLogin.tsx'

//explanation: login form component
function LoginForm() {
  const theme = useTheme()
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const usernameInput = username.trim()
    if (!usernameInput) {
      return alert('Please enter a username')
    }

    //explanation: here we are setting the use data to the local storage.
    const User: User = {
      username: usernameInput,
      language: i18n.language === 'en' ? 'en' : 'fa',
      theme: 'dark',
    }
    setUser(User)
    // redirect to dashboard page
    navigate('/dashboard', { replace: true })
  }

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Card
        sx={{
          width: { xs: '20rem', sm: '30rem', md: '42rem', lg: '52rem' },
          height: '30rem',
          borderRadius: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
          boxShadow: `0px 0px 30px rgba(0,0,0,0.4)`,
        }}
      >
        {/*  form section of login form*/}
        <FormLogin setUsername={setUsername} username={username} />

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            opacity: { xs: 0, md: 0.2 },
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* image section */}
        <ImageLoginForm />
      </Card>
    </Box>
  )
}

export default LoginForm
