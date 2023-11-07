import ListAltIcon from '@mui/icons-material/ListAlt'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

export const mainNavBarItems = [
  {
    id: 0,
    label: 'Order list',
    icon: <ListAltIcon />,
    route: '/cabinet/list order',
  },
  {
    id: 1,
    label: 'Wish list',
    icon: <FavoriteIcon />,
    route: '/cabinet/list wish',
  },
  {
    id: 2,
    label: 'My bonus account',
    icon: <MonetizationOnIcon />,
    route: '/cabinet/bonus account',
  },
  {
    id: 3,
    label: 'Correspondence with the seller',
    icon: <QuestionAnswerIcon />,
    route: '/cabinet/correspondence',
  },
]
