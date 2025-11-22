import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

type FormLoginProps = {
  setUsername: (username: string) => void
  username: string
}

//explanation:form material for login page form
function FormLogin({ username, setUsername }: FormLoginProps) {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: theme.palette.text.primary,
          mt: { xs: 0, md: 2 },
          mb: 4,
        }}
      >
        {t('loginTitle')}
      </Typography>

      <TextField
        label={t('loginTextFieldLabel')}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        variant="outlined"
        sx={{
          mb: 3,
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.primary.main,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: theme.palette.primary.main,
            },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: { xs: 2, md: 'auto' },
          mb: { xs: 2, md: 3 },
          height: '45px',
          fontSize: 17,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        {t('loginButton')}
      </Button>
    </Box>
  )
}

export default FormLogin
