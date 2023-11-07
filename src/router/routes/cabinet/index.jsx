import AttributionIcon from '@mui/icons-material/Attribution'
import LogoutIcon from '@mui/icons-material/Logout'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { mainNavBarItems } from '../../../data/cabinet/navBarItems'
import { useNavigate } from 'react-router-dom'

export default function Cabinet({ setToken }) {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            position: 'static',
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttributionIcon />
              </ListItemIcon>
              <ListItemText>Vasko</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
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
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setToken('')
                localStorage.clear()
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Log Out</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
