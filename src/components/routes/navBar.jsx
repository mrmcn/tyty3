import DatasetIcon from '@mui/icons-material/Dataset'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useAsyncValue, useNavigate } from 'react-router-dom'
import {
  helpNavBarItems,
  mainNavBarItems,
  otherNavBarItems,
} from '../../data/root/navBarItems'

function NavBar({ token, state, toggleDrawer, setOpenSingUp, setOpenCart }) {
  const navigate = useNavigate()
  const categories = useAsyncValue()
  const [anchorEl, setAnchorEl] = useState(null)
  const openCategories = Boolean(anchorEl)

  return (
    <Drawer
      anchor='left'
      open={state}
      onClose={toggleDrawer(false)}
    >
      <List
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {token ? (
          <ListItem disablePadding>
            <ListItemButton href='/cabinet'>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Authentication</ListItemText>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenSingUp(true)}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Authentication</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenCart(true)}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Cart</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              setAnchorEl(e.currentTarget)
            }}
          >
            <ListItemIcon>
              <DatasetIcon />
            </ListItemIcon>
            <ListItemText>Catalog</ListItemText>
          </ListItemButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={openCategories}
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <ButtonGroup
              orientation='vertical'
              aria-label='vertical contained button group'
              variant='text'
            >
              {categories.map((category) => (
                <Button
                  key={nanoid()}
                  onClick={() => {
                    setAnchorEl(null)
                  }}
                  href={`/${category}`}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Menu>
        </ListItem>
      </List>
      <Divider />
      <List
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {mainNavBarItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {helpNavBarItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {otherNavBarItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
export default NavBar
