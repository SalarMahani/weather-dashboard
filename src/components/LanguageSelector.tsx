import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useThemeMode } from '../context/ThemeModeContext.ts'

//explanation: the component for selecting language in login form page
function LanguageSelector() {
  const theme = useTheme()
  const { setLanguage } = useThemeMode()
  const { t, i18n } = useTranslation()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{ color: theme.palette.text.primary, fontSize: 14, mb: 1 }}
      >
        {t('loginLanguageTitle')}
      </Typography>

      <FormControl>
        <Select
          value={i18n.language === 'fa' ? 'fa' : 'en'}
          onChange={(e) => {
            const lang = e.target.value
            setLanguage(lang) // update global state
            i18n.changeLanguage(lang)
          }}
          sx={{
            width: 170,
            height: 50,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <MenuItem value="en">{t('loginLanguageEnglishValue')}</MenuItem>
          <MenuItem value="fa">{t('loginLanguagePersianValue')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSelector
