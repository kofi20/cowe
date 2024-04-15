import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Our Vision',
    description:
      'A society where women, girls, and youths are empowered, self-reliant, and active contributors to sustainable community development.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Our Mission',
    description:
      'To empower women, girls, and youths in Torit by developing their skills, abilities, and capacities through training, income-generating activities, and financial literacy programs, fostering self-reliance and sustainable livelihoods.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Our Core Values',
    description: 'Empowerment, Integrity, Collaboration, Inclusivity, Sustainability',
    icon: <LocalLibraryIcon />,
  },
  // {
  //   title: 'Consultation With Mentor',
  //   description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  //   icon: <ContactSupportIcon />,
  // },
]
