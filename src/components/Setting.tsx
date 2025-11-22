import { IconButton, useTheme } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import SettingMenu from './SettingMenu'

function Setting() {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      {/* Settings Icon Button */}
      <IconButton
        onClick={handleOpen}
        sx={{
          border: 1,
          borderRadius: '7px',
          transition: '0.2s',
          color: open
            ? theme.palette.common.white
            : theme.palette.text.secondary,
          backgroundColor: open ? theme.palette.primary.main : 'transparent',
          borderColor: open
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <SettingsIcon sx={{ fontSize: { xs: 15, sm: 20, md: 26 } }} />
      </IconButton>

      {/* Menu */}
      <SettingMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
    </>
  )
}

export default Setting
