import SearchInput from './SearchInput.tsx'
import { Box, Stack } from '@mui/material'
import Setting from './Setting.tsx'

interface HeaderProps {
  onSelectLocation: (lat: number, lon: number) => void
}

function HeaderFunctionalitySection({ onSelectLocation }: HeaderProps) {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'row' }}
      spacing={2}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{
        width: { xs: '100%', sm: '100%', md: 'auto' },
      }}
    >
      {/*search input*/}
      <SearchInput onSelectLocation={onSelectLocation} />

      {/* Settings Button + setting section */}
      <Box sx={{ alignSelf: { xs: 'center', sm: 'flex-end' } }}>
        <Setting />
      </Box>
    </Stack>
  )
}

export default HeaderFunctionalitySection
