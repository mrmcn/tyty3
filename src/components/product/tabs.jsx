import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useAsyncValue } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          columnSpacing={5}
          sx={{ pl: '70px', pt: '60px' }}
        >
          {children}
        </Grid>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const product = useAsyncValue()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='All about the product'
            {...a11yProps(0)}
          />
          <Tab
            label='Characteristics'
            {...a11yProps(1)}
          />
          <Tab
            label='Comments'
            {...a11yProps(2)}
          />
          <Tab
            label='Questions'
            {...a11yProps(3)}
          />
          <Tab
            label='Photo'
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
      >
        <Grid
          item
          xs={6}
        >
          <CardMedia
            sx={{ height: 440 }}
            image={product.image}
            title={product.title}
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Typography variant='h5'>{product.title}</Typography>
          <Box sx={{ display: 'flex', mt: '20px' }}>
            <Typography
              variant='h4'
              sx={{ display: 'flex', alignItems: 'center', ml: '5px' }}
            >
              {product.price} $
            </Typography>
            <Button
              startIcon={<ShoppingCartIcon />}
              sx={{ ml: '20px' }}
              variant='contained'
            >
              Buy
            </Button>
            <Button
              sx={{ ml: '20px' }}
              variant='contained'
            >
              Buy in credit
            </Button>
          </Box>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
      >
        <Typography
          sx={{ maxWidth: 445, ml: '40px' }}
          variant='h6'
          color='text.secondary'
        >
          {product.description}
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
      >
        List commens
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={3}
      >
        List questions
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={4}
      >
        List foto
      </CustomTabPanel>
    </Box>
  )
}
