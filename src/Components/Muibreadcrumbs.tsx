import { Breadcrumbs, Box, Link, Typography } from "@mui/material";
import NavegateNextIcon from "@mui/icons-material/NavigateNext";
const Muibreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavegateNextIcon fontSize="small" />}
        maxItems={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Muibreadcrumbs;
