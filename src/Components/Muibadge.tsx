import { Stack ,Badge} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';    
const Muibadge = () => {
  return (
    <Stack spacing={2} direction="row" margin="100px 0px 0px 100px">
    <Badge badgeContent={4} color="primary">
        <MailIcon />
    </Badge >
    <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
    </Badge>
    <Badge badgeContent={100} color="error">
        <MailIcon /> 
    </Badge>
    </Stack>
  )
}

export default Muibadge
