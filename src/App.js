import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { queryClient, router } from './router/index.'
import { theme } from './theme'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
