import DatasetIcon from '@mui/icons-material/Dataset'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useAsyncValue } from 'react-router-dom'
import { headerStyles } from './styles'

const CategoriesMenu = () => {
  const categories = useAsyncValue()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton
        color='inherit'
        onClick={(e) => {
          setAnchorEl(e.currentTarget)
        }}
      >
        <DatasetIcon />
        <Typography
          variant='body'
          sx={headerStyles.typographyProducts}
        >
          Products
        </Typography>
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClick={() => {
          setAnchorEl(null)
        }}
      >
        <ButtonGroup
          orientation='vertical'
          aria-label='vertical contained button group'
          variant='text'
        >
          {categories.map((category) => (
            <Button
              key={nanoid()}
              onClick={() => {
                setAnchorEl(null)
              }}
              href={`/${category}`}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Menu>
    </>
  )
}

export default CategoriesMenu
