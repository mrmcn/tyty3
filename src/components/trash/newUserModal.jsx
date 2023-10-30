import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

const defaultInputValues = {
  userId: '',
  email: '',
  phoneNumber: '',
}

const NewUserModal = ({ onClose, open, setOpen, users }) => {
  const [values, setValues] = useState(defaultInputValues)
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required('User ID is required')
      .min(6, 'User ID must be at least 6 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid.'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      userId: '',
      email: '',
      phoneNumber: '',
    },
  })

  useEffect(() => {
    if (open) setValues(defaultInputValues)
  }, [open])
  const getContent = () => {
    const styles = {
      inputFields: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '15px',
        '.MuiInput-root': {
          marginBottom: '20px',
        },
      },
    }
    return (
      <Box
        component='form'
        onSubmit={handleSubmit()}
        sx={styles.inputFields}
      >
        <TextField
          placeholder='User ID'
          name='userId'
          label='User ID'
          required
          {...register('userId')}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
          onChange={(e) => setValues({ ...values, userId: e.target.value })}
        />
        <TextField
          placeholder='Email'
          name='email'
          label='Email'
          required
          {...register('email')}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <TextField
          placeholder='Phone number'
          name='phoneNumber'
          label='Phone number'
          required
          {...register('phoneNumber')}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          value={values.phoneNumber}
          onChange={(e) =>
            setValues({ ...values, phoneNumber: e.target.value })
          }
        />
      </Box>
    )
  }
  const modalStyles = {
    wrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'end',
    },
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={modalStyles.wrapper}>
        <Typography
          variant='h6'
          component='h2'
        >
          {'title'}
        </Typography>
        <Typography sx={{ mt: 2 }}>{'subTitle'}</Typography>
        {getContent}
        <Box sx={modalStyles.buttons}>
          <Button variant='contained'>Submit</Button>
          <Button onClick={onClose}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default NewUserModal
