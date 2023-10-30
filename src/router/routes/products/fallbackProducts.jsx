import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import { nanoid } from 'nanoid'

const FallbackProducts = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      sx={{ mt: '1vh' }}
    >
      {Array.from(new Array(8)).map((card) => (
        <Grid
          key={nanoid()}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Card sx={{ maxWidth: 345, height: '100%' }}>
            <Skeleton
              variant='rectangular'
              width={210}
              height={118}
            />
            <CardContent>
              <Skeleton />
              <Skeleton width='60%' />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default FallbackProducts
