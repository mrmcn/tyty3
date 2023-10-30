import Skeleton from '@mui/material/Skeleton'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const FallbackProduct = () => {
  return (
    <>
      <Skeleton
        width={105}
        sx={{ pt: '30px' }}
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={0}>
            <Tab label='All about the product' />
            <Tab label='Characteristics' />
            <Tab label='Comments' />
            <Tab label='Questions' />
            <Tab label='Photo' />
          </Tabs>
        </Box>
        <Grid
          container
          columnSpacing={5}
          sx={{ pl: '70px', pt: '60px' }}
        >
          <Grid
            item
            xs={6}
          >
            <Skeleton
              variant='rectangular'
              height={440}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Skeleton height={30} />
            <Skeleton
              height={30}
              width={200}
            />
            <Box sx={{ display: 'flex', mt: '20px' }}>
              <Skeleton width={80} />
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
        </Grid>
      </Box>
    </>
  )
}

export default FallbackProduct
