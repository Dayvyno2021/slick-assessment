import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const progress = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

const Progress = () => {
  return (
    <Box sx={progress}>
      <CircularProgress color='secondary'/>
    </Box>
  )
}

export default Progress