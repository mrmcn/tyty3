import { ThemeProvider } from '@emotion/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Suspense, useState } from 'react'
import { Await, Outlet, useLoaderData } from 'react-router-dom'
import ErrorElement from '../../common/errorAwaitElement'
import Cart from './components/cart'
import CategoriesMenu from './components/categoriesMenu'
import NavBar from './components/navBar'
import SingIn from './components/singIn'
import SingUp from './components/singUp'
import FallbackCategories from './fallbackCategories'
import { headerOneStyles } from './styles'
import theme from './theme'

const Root = () => {
  const { categories } = useLoaderData()
  const [token, setToken] = useState(localStorage.getItem('userToken' ?? null))
  const [stateNavBar, setStateNavBar] = useState(false)
  const [openSingUp, setOpenSingUp] = useState(false)
  const [openSingIn, setOpenSingIn] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return
    }
    setStateNavBar(open)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position='static'>
          <Box sx={headerOneStyles.topRow}>
            <Button sx={headerOneStyles.buttonOne}>SAMSUNG'S DAYS</Button>
          </Box>
          <Toolbar>
            <Box sx={headerOneStyles.boxFirst}>
              <IconButton
                color='inherit'
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color='inherit'
                sx={headerOneStyles.diverIcon}
                href='/home page'
              >
                <Diversity2Icon />
                <Typography
                  variant='h4'
                  sx={headerOneStyles.typographyStory}
                >
                  STORY
                </Typography>
              </IconButton>
              <Box sx={headerOneStyles.catalog}>
                <Suspense fallback={<FallbackCategories />}>
                  <Await
                    resolve={categories}
                    errorElement={<ErrorElement />}
                  >
                    <CategoriesMenu />
                    <NavBar
                      token={token}
                      setToken={setToken}
                      state={stateNavBar}
                      toggleDrawer={toggleDrawer}
                      setOpenSingUp={setOpenSingUp}
                      setOpenCart={setOpenCart}
                    />
                  </Await>
                </Suspense>
              </Box>
            </Box>
            <Card>
              <Box color='inherit'>
                <SearchIcon />
                <Input></Input>
                <Button
                  size='small'
                  variant='text'
                >
                  search
                </Button>
              </Box>
            </Card>
            {token ? (
              <Box>
                <IconButton
                  color='inherit'
                  sx={headerOneStyles.accountIcon}
                  href='/cabinet'
                >
                  <AccountCircleIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  onClick={() => setOpenCart(true)}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            ) : (
              <Box>
                <IconButton
                  color='inherit'
                  sx={headerOneStyles.accountIcon}
                  onClick={() => setOpenSingUp(true)}
                >
                  <AccountCircleIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  onClick={() => setOpenCart(true)}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Cart
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
        <SingUp
          openSingUp={openSingUp}
          setOpenSingUp={setOpenSingUp}
          setOpenSingIn={setOpenSingIn}
        />
        <SingIn
          token={token}
          setToken={setToken}
          openSingIn={openSingIn}
          setOpenSingIn={setOpenSingIn}
        />
      </ThemeProvider>
      <Outlet />
    </>
  )
}
export default Root
