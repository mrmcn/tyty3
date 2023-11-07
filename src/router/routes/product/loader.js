import { defer } from 'react-router-dom'
import { queryClient } from '../../index.'

const loaderProduct = ({ params }) => {
  return defer({
    product: queryClient.fetchQuery({
      queryKey: [params.id],
      queryFn: async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        )
        return response.json()
      },
      staleTime: 1000 * 20,
    }),
  })
}
export default loaderProduct
