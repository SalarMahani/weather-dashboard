import { AppBar, Toolbar, useTheme } from '@mui/material'
import HeaderTitleSection from './HeaderTitleSection.tsx'
import HeaderFunctionalitySection from './HeaderFunctionalitySection.tsx'

interface HeaderProps {
  onLocationSelect: (lat: number, lon: number) => void
}

//explanation: this is the header of dashboard page
function Header({ onLocationSelect }: HeaderProps) {
  const theme = useTheme()

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        px: { xs: 1, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 2, md: 0 },
          width: '100%',
        }}
      >
        {/*inside it: logo + title */}
        <HeaderTitleSection />
        {/*inside it: Search + Settings */}
        <HeaderFunctionalitySection onSelectLocation={onLocationSelect} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
