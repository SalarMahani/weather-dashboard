import { Box, Stack, useTheme } from '@mui/material'

import FooterOwnerShipSection from './FooterOwnerShipSection.tsx'
import FooterDateContactSection from './FooterDateContactSection.tsx'
function Footer() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: 1,
        px: 3,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={{ xs: 0, md: 2 }}
        alignItems="center"
      >
        {/* ownership  Section */}
        <FooterOwnerShipSection />

        {/* contact info + data*/}
        <FooterDateContactSection />
      </Stack>
    </Box>
  )
}

export default Footer
