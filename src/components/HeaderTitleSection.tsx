import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function HeaderTitleSection() {
  const { t } = useTranslation()
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        width: '100%',
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Box
        component="img"
        src="/ui/dashboard/header-logo.png"
        alt="logo"
        sx={{
          width: { xs: 36, sm: 42, md: 50 },
          borderRadius: '50%',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 16, sm: 18, md: 20 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {t('dashboardTitle')}
      </Typography>
    </Stack>
  )
}

export default HeaderTitleSection
