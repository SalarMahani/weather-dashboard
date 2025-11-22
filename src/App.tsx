import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedLayout from './components/ProtectedLayout'
import PublicLayout from './components/PublicLayout'
import ThemeConfig from './theme/ThemeConfig'
import { useEffect, useState } from 'react'
import { ThemeModeContext } from './context/ThemeModeContext'
import { getUser, type User } from './utils/auth.ts'
import { useTranslation } from 'react-i18next'

const router = createBrowserRouter([
  // Public (unauthenticated) pages
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },

  // Protected (authenticated) pages
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [{ path: 'dashboard', element: <DashboardPage /> }],
  },
])

export default function App() {
  const { i18n } = useTranslation()
  const userData = getUser()
  let user: User = userData ? JSON.parse(userData) : null
  if (!user) {
    user = {
      language: 'en',
      theme: 'dark',
      username: 'unknownBug',
    }
  }

  const [mode, setMode] = useState<'light' | 'dark'>(user.theme)
  const [language, setLanguage] = useState<'en' | 'fa'>(user.language)
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])
  return (
    <ThemeModeContext.Provider value={{ mode, setMode, language, setLanguage }}>
      <ThemeConfig lang={language} mode={mode}>
        <RouterProvider router={router} />
      </ThemeConfig>
    </ThemeModeContext.Provider>
  )
}
