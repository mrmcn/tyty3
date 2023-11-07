import { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './errorPage'
import Root from './routes'
import Cabinet from './routes/cabinet'
import { BonusAccount } from './routes/cabinet/bonusAccount'
import { Correspondence } from './routes/cabinet/correspondence'
import { ListOrder } from './routes/cabinet/listOrder'
import { ListWish } from './routes/cabinet/listWish'
import HomePage from './routes/homePage'
import { loaderCategories } from './routes/loader'
import Product from './routes/product'
import loaderProduct from './routes/product/loader'
import Products from './routes/products'
import { loaderProducts } from './routes/products/loader'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //   queryFn: async (queryKey) => {
      //     const response = await fetch(`https://fakestoreapi.com/${queryKey}`)
      //     return response.json()
      //   },
      staleTime: 20000,
    },
  },
})

export const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    loader: loaderCategories,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { element: <HomePage />, path: 'home page' },
      { element: <Products />, path: ':category', loader: loaderProducts },
      { element: <Product />, path: ':category/:id', loader: loaderProduct },
      {
        element: <Cabinet />,
        path: 'cabinet',
        children: [
          { index: true, element: <ListOrder /> },
          { element: <BonusAccount />, path: 'bonus account' },
          { element: <Correspondence />, path: 'correspondence' },
          { element: <ListOrder />, path: 'list order' },
          { element: <ListWish />, path: 'list wish' },
        ],
      },
    ],
  },
])
