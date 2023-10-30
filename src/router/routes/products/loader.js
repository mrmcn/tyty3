import { defer } from 'react-router-dom'
import { queryClient } from '../../index.'

export const loaderProducts = ({ params }) => {
  return defer({
    products: queryClient.fetchQuery({
      queryKey: ['products', 'category'],
      queryFn: async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${params.category}`,
        )
        return response.json()
      },
    }),
  })
}
