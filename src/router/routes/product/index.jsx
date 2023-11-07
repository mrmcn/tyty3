import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import ErrorElement from '../../../common/errorAwaitElement'
import BasicBreadcrumbs from './components/braedCrumbs'
import BasicTabs from './components/tabs'
import FallbackProduct from './fallbackProduct'

const Product = () => {
  const { product } = useLoaderData()

  return (
    <Suspense fallback={<FallbackProduct />}>
      <Await
        resolve={product}
        errorElement={<ErrorElement />}
      >
        <BasicBreadcrumbs sx={{ mt: '12px', ml: '25px' }} />
        <BasicTabs />
      </Await>
    </Suspense>
  )
}

export default Product
