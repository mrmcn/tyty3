import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import BasicMenu from './basicMenu'
import { useState } from 'react'

const NotificationBell = ({ iconColor }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const notification = [
    { id: 0, label: 'First notification' },
    { id: 1, label: 'Second notification' },
  ]
  const newNotification = `You have ${notification.length} new notification`
  const notNotification = 'No new notification'

  return (
    <>
      <Tooltip title={notification.length ? newNotification : notNotification}>
        <IconButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          color={iconColor}
          onClick={notification.length ? handleOpen : null}
        >
          <Badge
            badgeContent={notification.length}
            color='error'
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        menuItems={notification}
      />
    </>
  )
}

export default NotificationBell
