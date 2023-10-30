import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn'
import EuroIcon from '@mui/icons-material/Euro'
import HandshakeIcon from '@mui/icons-material/Handshake'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import InfoIcon from '@mui/icons-material/Info'
import PaymentIcon from '@mui/icons-material/Payment'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

export const mainNavBarItems = [
  {
    id: 0,
    label: 'Help Center',
    icon: <HelpCenterIcon />,
    route: '',
  },
  {
    id: 1,
    label: 'Chat',
    icon: <WhatsAppIcon />,
    route: '',
  },
]

export const helpNavBarItems = [
  { id: 0, label: 'Shipping and payment', icon: <PaymentIcon />, route: '' },
  { id: 2, label: 'Credit', icon: <EuroIcon />, route: '' },
  { id: 3, label: 'Guarantee', icon: <WorkspacePremiumIcon />, route: '' },
  {
    id: 4,
    label: 'Purchase returns',
    icon: <AssignmentReturnIcon />,
    route: '',
  },
]

export const otherNavBarItems = [
  { id: 0, label: 'About Us', icon: <InfoIcon />, route: '' },
  { id: 1, label: 'For partners', icon: <HandshakeIcon />, route: '' },
]
