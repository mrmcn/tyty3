import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export default function SingIn({ setToken, openSingIn, setOpenSingIn }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['token'],
    queryFn: async () =>
      await axios({
        method: 'post',
        url: 'https://fakestoreapi.com/auth/login',
        data: {
          username: userName,
          password: password,
        },
      }),
    enabled: open,
    select: ({ data }) => data.token,
  })
  if (isPending) {
    return <h3>Sing In...</h3>
  }
  if (isError) {
    return <h3>Error {isError}</h3>
  }
  if (isSuccess) {
    setToken(data)
    localStorage.setItem('userToken', data)
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
                onChange={(e) => {
                  setUserName(e.target.value)
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
            setOpen(true)
            setOpenSingIn(false)
          }}
          autoFocus
        >
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  )
}

// async function onSubmit() {
//   setUserName('')
//   setPassword('')
//   try {
//     const response = await fetch('https://fakestoreapi.com/auth/login', {
//       method: 'POST',
//       data: {
//         username: userName,
//         password: password,
//       },
//     })
//     setToken(response.data.token)
//     localStorage.setItem('userToken', response.data.token)
//   } catch (error) {
//     console.log('error = ' + error)
//     return <div>Error {error}</div>
//   }
// }
// const onSubmit = async () => {
//   try {
//     setIsLoading(true)
//     const response = await axios({
//       method: 'post',
//       url: 'https://fakestoreapi.com/auth/login',
//       data: {
//         username: userName,
//         password: password,
//       },
//     })
//     setToken(response.data.token)
//     setIsLoading(false)
//     localStorage.setItem('userToken', response.data.token)
//   } catch (error) {
//     console.log('error = ' + error)
//     setIsError(error)
//     return <div>Error {error}</div>
//   } finally {
//     setUserName('')
//     setPassword('')
//   }
// }

// if (!token) {
//   return <h3>No data</h3>
// }
// const onSubmit = () => {
//   setUserName('')
//   setPassword('')
//   axios({
//     method: 'post',
//     url: 'https://fakestoreapi.com/auth/login',
//     data: {
//       username: userName,
//       password: password,
//     },
//   })
//     .then((res) => {
//       setToken(res.data.token)
//       localStorage.setItem('userToken', res.data.token)
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
// }
