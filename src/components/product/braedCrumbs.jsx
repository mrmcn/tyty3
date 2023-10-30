import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function BasicBreadcrumbs({ sx, basePage, nowPage }) {
  return (
    <Box
      sx={sx}
      role='presentation'
      onClick={handleClick}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          underline='hover'
          color='inherit'
          href='/'
        >
          {<HomeIcon />}
        </Link>
        <Link
          underline='hover'
          color='inherit'
          href='/material-ui/getting-started/installation/'
        >
          {basePage}
        </Link>
        <Typography color='text.primary'>{nowPage}</Typography>
      </Breadcrumbs>
    </Box>
  )
}
