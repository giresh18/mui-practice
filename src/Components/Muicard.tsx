import {Box,Button,Card,CardActions,CardContent,Typography} from '@mui/material'

const Muicard = () => {
  return (
    <Box width="300px" margin='60px 0px 0px 60px'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    React
                </Typography>
                <Typography  variant='body2' color='text.secondary'>
                    React is a javascript library for building user interfaces. react can be used as a base in the webdevelopemnt singlr pagr or mobile applications
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='primary'>
                    share
                </Button>
                <Button color='secondary'>
                    Explore
                </Button>
            </CardActions>
        </Card>
      
    </Box>
  )
}

export default Muicard
