import { useAsyncError } from 'react-router-dom'

function ErrorElement() {
  const error = useAsyncError()
  return (
    <p>Uh Oh, something went wrong! Собака рылась в Await {error.message}</p>
  )
}
export default ErrorElement
