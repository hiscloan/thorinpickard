import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Thorin Pickard. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
