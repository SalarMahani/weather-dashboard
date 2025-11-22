import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',

    // Backgrounds
    background: {
      default: '#F3FAFE', // very soft blue-tinted white
      paper: '#E1E9EE', // pure white for cards, menus
    },

    // Primary Colors (same hue but darker for light UI)
    primary: {
      main: '#1A73E8', // balanced blue for light mode
      contrastText: '#FFFFFF', // readable on blue
    },

    // Text colors
    text: {
      primary: '#0F172A', // your darkMode page background becomes text color
      secondary: '#475569', // similar to darkMode secondary but inverted
    },

    // Dividers / borders
    divider: '#CDD9E0',

    // Info
    info: {
      main: '#D3E1E7', // soft blue-gray for backgrounds / icons
      dark: '#CDD9E0', // inverted of dark theme
    },
  },

  components: {
    // IconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#94A3B8', // neutral gray
          borderColor: '#94A3B8',
          '&:hover': {
            backgroundColor: 'rgba(26,115,232,0.10)',
            color: '#1A73E8',
            borderColor: '#1A73E8',
          },
          '&.Mui-focused': {
            color: '#1A73E8',
            borderColor: '#1A73E8',
          },
        },
      },
    },

    // Autocomplete popup
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
        },
      },
    },

    // Menu items hover
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(26,115,232,0.10)',
          },
        },
      },
    },

    // TextFields
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D0D5DD',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1A73E8',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1A73E8',
          },
        },
        input: {
          color: '#0F172A',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#475569',
          '&.Mui-focused': {
            color: '#1A73E8',
          },
        },
      },
    },
  },
})

export default lightTheme
