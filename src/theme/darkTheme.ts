import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // Backgrounds
    background: {
      default: '#0F172A', // whole page background
      // default: '#151D32',
      // paper: '#1E293B', // cards, menu background
      paper: '#292F45',
    },

    // Primary Colors
    primary: {
      main: '#2E9BFF', // accent blue
      contrastText: '#CFEDFA',
    },

    // Text colors
    text: {
      primary: '#CFEDFA',
      secondary: '#94A3B8',
    },

    // Dividers, borders
    divider: '#3D3B3B',
    //info
    info: {
      main: '#404961',
      dark: '#3F4861',
    },
  },

  components: {
    // IconButton (settings button)
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#3D3B3B',
          borderColor: '#3D3B3B',
          '&:hover': {
            backgroundColor: 'rgba(46,155,255,0.1)',
            color: '#2E9BFF',
            borderColor: '#2E9BFF',
          },
          '&.Mui-focused': {
            color: '#2E9BFF',
            borderColor: '#2E9BFF',
          },
        },
      },
    },

    // Autocomplete popup
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E293B',
          color: '#CFEDFA',
        },
      },
    },

    // Menu items hover
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(46,155,255,0.15)',
          },
        },
      },
    },

    // TextFields (input border + label color)
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3D3B3B',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2E9BFF',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2E9BFF',
          },
        },
        input: {
          color: '#CFEDFA',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#CFEDFA',
          '&.Mui-focused': {
            color: '#CFEDFA',
          },
        },
      },
    },
  },
})

export default darkTheme
