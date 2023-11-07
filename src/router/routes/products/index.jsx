import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import ErrorElement from '../../../common/errorAwaitElement'
import FallbackProducts from './fallbackProducts'

const Products = () => {
  const { products } = useLoaderData()

  return (
    <Suspense fallback={<FallbackProducts />}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{ mt: '1vh' }}
      >
        <Await
          resolve={products}
          errorElement={<ErrorElement />}
        >
          {(products) =>
            products.map((product) => (
              <Grid
                key={nanoid()}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Card sx={{ maxWidth: 345, height: '100%' }}>
                  <Tooltip title='see more'>
                    <CardActionArea href={`/:category/${product.id}`}>
                      <CardMedia
                        component='img'
                        height='140'
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='div'
                        >
                          {product.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Tooltip>
                </Card>
              </Grid>
            ))
          }
        </Await>
      </Grid>
    </Suspense>
  )
}

export default Products
