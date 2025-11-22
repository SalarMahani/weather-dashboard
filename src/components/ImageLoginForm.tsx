import { Box, useTheme } from '@mui/material'

function ImageLoginForm() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        height: { xs: 220, md: '100%' },
        p: 2,
        position: 'relative',
        backgroundColor: theme.palette.info.main,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/ui/login/cloud-2.png"
        alt="cloud-2"
        sx={{
          width: { xs: 120, sm: 180, md: 260 },
          position: 'absolute',
          top: { xs: 15, md: 25 },
          right: { xs: '50%', md: 20 },
          transform: { xs: 'translateX(50%)', md: 'none' },
        }}
      />

      <Box
        component="img"
        src="/ui/login/cloud-3.png"
        alt="cloud-3"
        sx={{
          width: { xs: 120, sm: 180, md: 260 },
          position: 'absolute',
          bottom: { xs: 20, md: 50 },
          left: { xs: '50%', md: -20 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
        }}
      />

      <Box
        component="img"
        src="/ui/login/cloud-1.png"
        alt="cloud-1"
        sx={{
          width: { xs: 120, sm: 180, md: 260 },
          position: 'absolute',
          bottom: { xs: -10, md: -30 },
          right: { xs: '50%', md: 20 },
          transform: { xs: 'translateX(50%)', md: 'none' },
        }}
      />
    </Box>
  )
}

export default ImageLoginForm
