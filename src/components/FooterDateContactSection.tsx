import { Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { useTranslation } from 'react-i18next'
function FooterDateContactSection() {
  const { t } = useTranslation()

  return (
    <Stack
      direction="row"
      spacing={7}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography
        color="text.primary"
        sx={{
          fontSize: { xs: 6, md: 14 },
          textAlign: { xs: 'center', md: 'right' },
          opacity: 0.8,
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <MailOutlineIcon />
        {t('dashboardFooterContactTile')}
      </Typography>
      <Typography
        color="text.primary"
        sx={{
          fontSize: { xs: 6, md: 14 },
          textAlign: { xs: 'center', md: 'right' },
          opacity: 0.8,
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: 20 }} />
        12:25 Monday 23 December 2023
      </Typography>
    </Stack>
  )
}

export default FooterDateContactSection
