import { AppBar, Toolbar, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../resources/logo.svg";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

interface NavbarProps {
  title: string;
  home?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <AppBar
      position="sticky"
      style={{ background: "linear-gradient(0,#FFD468 0%,#FFC229 100%)" }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Link to="/">
            <img src={logo} alt="logo" height="40px" />
          </Link>
          <Box
            display="flex"
            alignItems="center"
            color="black"
            fontSize="30px"
            fontWeight="bold"
          >
            {props.title}
          </Box>
          {props.home ? (
            <Box
              display="flex"
              alignItems="center"
              color="black"
              fontSize="30px"
              fontWeight="bold"
            >
              <AddToPhotosIcon />
            </Box>
          ) : (
            <Avatar />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
