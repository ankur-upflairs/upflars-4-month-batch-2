import { Stack } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

function Testj() {
  return (
    <div>
      <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
        hello everyone
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  )
}

export default Testj
