import RefreshIcon from '@mui/icons-material/Refresh'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import SearchBar from '../common/searchBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import styles from './styles'

const SearchPanel = () => {
  const [users, setUsers] = useState([])
  const [searchResults, setSearchResults] = useState(users)
  console.log(setSearchResults)
  const handleSearch = (value) => {
    const lowercasedValue = value.toLowerCase().trim()
    if (lowercasedValue === '') setUsers(searchResults)
    else {
      const filteredData = searchResults.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue),
        )
      })
      setUsers(filteredData)
    }
  }

  return (
    <Box sx={styles.firstBox}>
      <Card>
        <Box>
          <SearchBar
            placeholder='Пиши, Вася'
            onChange={(e) => handleSearch(e.target.value)}
            sizeButton={'large'}
            contentButon={'Add user'}
            sxButton={styles.searchButton}
          />
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
        <CardContent>
          {users.length ? (
            users.map((user) => (
              <Box sx={{ marginBottom: '20px' }}>
                <Typography>User ID: {user.userId}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone Number: {user.phoneNumber}</Typography>
              </Box>
            ))
          ) : (
            <Typography
              align='center'
              sx={{
                margin: '40px 16px',
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '1.3rem',
              }}
            >
              No users for this project yet
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default SearchPanel
