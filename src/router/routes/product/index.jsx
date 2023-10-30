import { Await, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import ErrorElement from '../../../components/common/errorAwaitElement'
import FallbackProduct from './fallbackProduct'
import BasicBreadcrumbs from '../../../components/product/braedCrumbs'
import BasicTabs from '../../../components/product/tabs'

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
