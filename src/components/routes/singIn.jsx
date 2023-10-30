import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import axios from 'axios'

export default function SingIn({ token, setToken, openSingIn, setOpenSingIn }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {
    setUserName('')
    setPassword('')
    axios({
      method: 'post',
      url: 'https://fakestoreapi.com/auth/login',
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        setToken(res.data.token)
        localStorage.setItem('userToken', res.data.token)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Dialog
      open={openSingIn}
      onClose={() => setOpenSingIn(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Sing in'}</DialogTitle>
      <DialogContent>
        <Box
          component='form'
          noValidate
          // onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                autoComplete='given-name'
                name='username'
                required
                fullWidth
                id='username'
                label='User Name'
                autoFocus
                // value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                  console.log(e.target.value)
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                onChange={(e) => {
                  setPassword(e.target.value)
                  console.log(e.target.value)
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value='allowExtraEmails'
                    color='primary'
                  />
                }
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            setOpenSingIn(false)
            onSubmit()
          }}
          autoFocus
        >
          Sign In
        </Button>
        <Button
          // onClick={() => setOpenSingIn(false)}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
