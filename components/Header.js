import { Typography } from '@mui/material'

const Header = ({ title }) => {
  return (
    <header>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
    </header>
  )
}

export default Header
