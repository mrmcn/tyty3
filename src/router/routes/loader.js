import { defer } from 'react-router-dom'
import { queryClient } from '../index.'

export const loaderCategories = () => {
  return defer({
    categories: queryClient.fetchQuery({
      queryKey: ['categories'],
      queryFn: async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        )
        return response.json()
      },
      // staleTime: 1000 * 20,
    }),
  })
}
