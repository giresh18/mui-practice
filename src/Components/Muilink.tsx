import { Stack,Link, Typography } from "@mui/material"
const Muilink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}> 
    <Link href="#">Link</Link>  
    <Link href="#" color="secondary" underline="none">Secondary</Link>  
    <Typography variant="h6">
    <Link href="#" color="sucess" underline="none">primary</Link>  
    </Typography>
    </Stack>
  )
}

export default Muilink
