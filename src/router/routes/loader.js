import { defer } from 'react-router-dom'
import { queryClient } from '../index.'

export const loaderCategories = ({ params }) => {
  return defer({
    categories: queryClient.fetchQuery({
      queryKey: ['categories'],
      queryFn: async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        )
        return response.json()
      },
    }),
  })
}
