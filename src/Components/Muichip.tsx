import React from 'react'
import { Stack,Chip,Avatar} from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
const Muichip = () => {
  return (
    <Stack direction="row" spacing={1}>
        <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
        <Chip
        label="chip outlined"
        color="secondary"
        size='small'
        variant="outlined"
        avatar={<Avatar>M</Avatar>} />
       
        <Chip  label="Click" color="error" />
    </Stack>
  )
}

export default Muichip
