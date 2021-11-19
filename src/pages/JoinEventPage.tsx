import { Box } from "@mui/material";
import Logo from "../resources/logo.svg";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

export default function JoinEventPage() {
  return (
    <Box
      display="flex"
      paddingY="10px"
      justifyContent="center"
      alignItems="center"
      height="8vh"
      style={{ background: "linear-gradient(0,#FFD468 0%,#FFC229 100%)" }}
    >
      <Box
        height="100%"
        width="90%"
        display="flex"
        justifyContent="space-between"
      >
        <img src={Logo} alt="logo" height="100%" />
        <Box display="flex" alignItems="center">
          <h1>Event Feed</h1>
        </Box>
        <Box display="flex" alignItems="center">
          <AddToPhotosIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}
