import { createTheme } from '@mui/material'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props
  return (
    <Link
      ref={ref}
      to={href}
      {...other}
    />
  )
})

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          borderRadius: 8.5,
          textTransform: 'none',
          '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
              backgroundColor: '#006db3',
            },
          },
          '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.7rem',
        },
      },
    },
  },
  // palette: {
  //   white: {
  //     main: '#fff',
  //   },
  // },
  // typography: {
  //   h1: {
  //     fontSize: '1.6rem',
  //     fontWeight: 600,
  //     // color: '#fff',
  //     letterSpacing: '0.5px',
  //     textTransform: 'capitalize',
  //   },
  // },
})
