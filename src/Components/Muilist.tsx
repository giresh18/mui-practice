import {Box,List,ListItem, ListItemText,ListItemButton} from "@mui/material"
const Muilist = () => {
  return (
    <Box sx={{width:"300px", bgcolor:"#efefef"}} margin="100px 0px 0px 100px ">
        <List>
            <ListItem>
                <ListItemButton>
            <ListItemText primary=" list item one" secondary="secondary text"/>
            </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                <ListItemText primary="list item two" secondary="secondary text" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                <ListItemText primary="list item three" secondary="secondary text"/>
                </ListItemButton>
            </ListItem>
        </List>
      
    </Box>
  )
}

export default Muilist
