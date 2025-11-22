import {
  Divider,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LogoutIcon from '@mui/icons-material/Logout'
import { useContext, useState } from 'react'
import { clearUser, getUser, setUser, type User } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeModeContext } from '../context/ThemeModeContext'

interface Props {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
}

function SettingMenu({ anchorEl, open, onClose }: Props) {
  const userData = getUser()
  const user: User = userData ? JSON.parse(userData) : null

  const theme = useTheme()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [modes, setModes] = useState<'light' | 'dark'>(user.theme)
  const [lang, setLang] = useState<'en' | 'fa'>(user.language)

  const themeCtx = useContext(ThemeModeContext)
  if (!themeCtx) throw new Error('ThemeModeContext is missing!')

  const { setMode, setLanguage } = themeCtx

  // Logout
  const handleExit = () => {
    clearUser()
    navigate('/login', { replace: true })
  }

  // Change Theme
  const handleModeChange = (
    _e: React.MouseEvent<HTMLElement>,
    value: 'light' | 'dark' | null,
  ) => {
    if (!value) return
    setModes(value)

    const newUser: User = { ...user, theme: value }
    setUser(newUser)
    setMode(value)
  }

  // Change Language
  const handleLangChange = (
    _e: React.MouseEvent<HTMLElement>,
    value: 'en' | 'fa' | null,
  ) => {
    if (!value) return
    setLang(value)

    const newUser: User = { ...user, language: value }
    setUser(newUser)
    i18n.changeLanguage(value)
    setLanguage(value)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      slotProps={{
        paper: {
          sx: {
            p: { xs: 1, md: 2 },
            width: 260,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        },
      }}
    >
      {/* MODE */}
      <Typography
        sx={{
          mb: 1,
          mx: 2,
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: lang === 'fa' ? 'flex-end' : 'flex-start',
        }}
      >
        {t('dashboardSettingModTitle')}
      </Typography>

      <ToggleButtonGroup
        value={modes}
        exclusive
        fullWidth
        onChange={handleModeChange}
        sx={{ mb: 2 }}
      >
        <ToggleButton
          value="light"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          <LightModeIcon sx={{ mx: 1 }} />
          {t('dashboardSettingLightTitle')}
        </ToggleButton>

        <ToggleButton
          value="dark"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          <DarkModeIcon sx={{ mx: 1 }} />
          {t('dashboardSettingDarkTitle')}
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider />

      {/* LANGUAGE */}
      <Typography
        sx={{
          my: 1.5,
          mx: 2,
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: lang === 'fa' ? 'flex-end' : 'flex-start',
        }}
      >
        {t('dashboardSettingLanguageTitle')}
      </Typography>

      <ToggleButtonGroup
        value={lang}
        exclusive
        fullWidth
        onChange={handleLangChange}
        sx={{ mb: 1 }}
      >
        <ToggleButton
          value="en"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          {t('dashboardSettingEnglishTitle')}
        </ToggleButton>

        <ToggleButton
          value="fa"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          {t('dashboardSettingPersianTitle')}
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider />

      {/* LOGOUT */}
      <MenuItem
        onClick={handleExit}
        sx={{
          mt: 1,
          p: 2,
          borderRadius: 2,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
          display: 'flex',
          justifyContent: lang === 'fa' ? 'flex-end' : 'flex-start',
        }}
      >
        <LogoutIcon sx={{ mx: 2 }} />
        {t('dashboardSettingExitTitle')}
      </MenuItem>
    </Menu>
  )
}

export default SettingMenu
