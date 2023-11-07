import SearchIcon from '@mui/icons-material/Search'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'

const SearchBar = ({
  placeholder,
  onChange,
  sizeButton,
  addClick,
  contentButon,
  sxButton,
  variantButton,
  boxColor,
}) => {
  return (
    <Box color={boxColor}>
      <SearchIcon />
      <Input
        placeholder={placeholder}
        onChange={onChange}
      ></Input>
      <Button
        variant={variantButton}
        size={sizeButton}
        onClick={addClick}
        sx={sxButton}
      >
        {contentButon}
      </Button>
    </Box>
  )
}

export default SearchBar
