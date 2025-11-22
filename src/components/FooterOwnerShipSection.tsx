import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function FooterOwnerShipSection() {
  const { t } = useTranslation()

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box
        component="img"
        src="/ui/dashboard/footer-logo.png"
        alt="logo"
        sx={{ height: { xs: 20, md: 50 } }}
      />

      <Typography
        color="text.primary"
        sx={{
          fontSize: {
            xs: 6,
            md: 14,
          },
        }}
      >
        {t('dashboardFooterOwnerShipTitle')}
      </Typography>
    </Stack>
  )
}

export default FooterOwnerShipSection
