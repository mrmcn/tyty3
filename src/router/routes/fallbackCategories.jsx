import Skeleton from '@mui/material/Skeleton'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import IconButton from '@mui/material/IconButton'

const FallbackCategories = () => {
  return (
    <IconButton>
      <Diversity2Icon />
      <Skeleton width={105} />
    </IconButton>
  )
}

export default FallbackCategories
