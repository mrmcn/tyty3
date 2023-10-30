import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
    MuiDivider: {
      defaultProps: {
        color: 'white',
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(225, 225, 225, 0.7)',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(225, 225, 225, 0.7)',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        // width: '100%',
        display: 'flex',
        // flexDirection: 'column',
        // backgroundColor: '#009be5',
        // padding: '20px',
      },
    },
  },
})
export default theme
