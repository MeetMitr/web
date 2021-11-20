import { Box, Avatar, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

interface EventPageProps {
  name: string;
}

const Divider: React.FC = () => {
  return (
    <Box
      marginY="20px"
      height="2px"
      width="100%"
      style={{ backgroundColor: "gray" }}
    />
  );
};

const EventPage: React.FC<EventPageProps> = (props) => {
  const [imageIdx, setImageIdx] = useState<number>(0);

  const backgroundImages = [
    "https://jandevents.com/wp-content/uploads/jand-party.jpg",
  ];

  return (
    <Box minHeight="100vh" style={{ backgroundColor: "#FAF3E7" }}>
      <Navbar title={"Event Feed"} />
      <Box display="flex">
        <Box
          width="50%"
          minHeight="100vh"
          style={{
            backgroundImage: `url(${"https://jandevents.com/wp-content/uploads/jand-party.jpg"})`,
            //backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})` ,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          width="50%"
          paddingX="5%"
          paddingY="3%"
        >
          <Box display="flex">
            <Box width="50%" textAlign="center">
              <Box fontSize={40} fontWeight="bold">
                วิ่งแบบพี่ตูน
              </Box>
              <Box marginTop="5px" color="#C72200" fontWeight="bold">
                Sat 06 November
              </Box>
            </Box>
            <Box width="50%" marginTop="10px" display="flex">
              <Box marginRight="10px">
                <Avatar
                  alt="Pattarapong Sritong"
                  sx={{ width: "50px", height: "50px" }}
                  src={`https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.18169-9/13178029_831779600288403_4886563183669817073_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGNL3FS3CMbDfjvXNPemMBP8fcrdMF8M_Px9yt0wXwz82BI4Yac3V2zfiYq79gZFqmjawevxrR2Xv_4fnc5KHUs&_nc_ohc=L-OzgPWQz7AAX_NiSnc&_nc_ht=scontent.fbkk12-4.fna&oh=37467c50f2f44e01e6ac7863257e05e8&oe=61BFA9A0`}
                />
              </Box>
              <Box>
                <Box fontSize={20}>Hosted By</Box>
                <Box fontSize={25}>Pattarapong Sritong</Box>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box>Price : {`300`} Coin</Box>
          <Box
            marginTop="2%"
            display="flex"
            width="45%"
            justifyContent="space-between"
          >
            <Button
              size="large"
              variant="contained"
              style={{ backgroundColor: "#FFC229" }}
            >
              <Box marginX="30px" fontWeight="bold">
                Join
              </Box>
            </Button>
            <Button
              size="large"
              variant="contained"
              style={{ backgroundColor: "#FFC229" }}
            >
              <FavoriteIcon />
            </Button>
            <Button
              size="large"
              variant="contained"
              style={{ backgroundColor: "#FFC229" }}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box marginTop="20px">Attendances : </Box>
          <Box
            width="100%"
            height="500px"
            marginTop="10px"
            style={{
              background: "linear-gradient(90,#FFD468 0%,#FFC229 100%)",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventPage;
