import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function Cart({ openCart, setOpenCart }) {
  return (
    <Dialog
      open={openCart}
      onClose={() => setOpenCart(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Cart'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenCart(false)}>Disagree</Button>
        <Button
          onClick={() => setOpenCart(false)}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
