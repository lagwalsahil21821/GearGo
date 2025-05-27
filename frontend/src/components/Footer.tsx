import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        bgcolor: 'grey.100',
        py: 3,
        textAlign: 'center',
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        position: 'fixed',
        bottom: 0,
        zIndex: 1200,
      }}
    >
      <Box sx={{ maxWidth: 1600, mx: 'auto' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} GearGo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
