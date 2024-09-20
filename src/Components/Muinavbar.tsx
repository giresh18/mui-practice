import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem
} from "@mui/material";
import { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const Muinavbar = () => {
    const [anchorEL, setAnchorEL] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEL);
    const handleClick =(event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEL(event.currentTarget);
    }
    const handleclose = () => {
        setAnchorEL(null);
    }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit" id="resources-button" onClick={handleClick} aria-controls={open ? 'resources-menu' : undefined}
          aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>Resources</Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu id="menu-appbar" anchorEl={anchorEL} open={open } MenuListProps={{ 'aria-labelledby': 'resources-button' }}
        onClose={handleclose}>
            <MenuItem onClick={handleclose}>Blog</MenuItem>
            <MenuItem onClick={handleclose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Muinavbar;
