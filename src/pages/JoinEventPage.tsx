import { Box, TextField, Button, Grid, Card } from "@mui/material";
import Logo from "../resources/logo.svg";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const MySearch = styled(TextField)`
  background-color: white;
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffd468;
  }
  & label.Mui-focused {
    color: #ffd468;
  }
`;

interface EventPaperProps {
  imageUrl?: string;
  name: string;
  time: string;
  location: string;
}

const EventPaper: React.FC<EventPaperProps> = (props) => {
  console.log(props);
  let defaultUrl =
    "https://seda.college/blog/wp-content/uploads/2018/06/party.jpg";
  return (
    <Card style={{ height: "300px" }}>
      <Box height="70%">
        <img src={props.imageUrl || defaultUrl} alt="1" height="100%" />
      </Box>
      <Box
        display="flex"
        height="10%"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        style={{ backgroundColor: "black", color: "white" }}
      >
        {props.name}
      </Box>
      <Box
        display="flex"
        height="8%"
        justifyContent="center"
        alignItems="center"
        style={{ color: "#C72200" }}
        fontSize={10}
      >
        {props.time.slice(0, 25)}
      </Box>
      <Box
        display="flex"
        height="10%"
        justifyContent="center"
        alignItems="center"
      >
        <LocationOnIcon />
        {props.location}
      </Box>
    </Card>
  );
};

const JoinEventPage: React.FC = () => {
  const [search, setSearch] = useState("");

  let mock = [
    "Poom's Party",
    "แบกพระเกี้ยว",
    "ม็อบสนับสนุน 112",
    "ทำความดีถวายพ่อหลวง",
  ];

  for (let i = 0; i < 4; i++) {
    mock.push("Test Name " + i);
  }

  return (
    <Box minHeight="100vh" style={{ backgroundColor: "#FAF3E7" }}>
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
          <Box display="flex" alignItems="center" style={{ cursor: "pointer" }}>
            <AddToPhotosIcon fontSize="large" />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          width="80%"
          justifyContent="space-between"
          marginY={3}
        >
          {/* <TextField label="Search" size="small"  style={{ width: "90%" }} /> */}
          <MySearch
            label="Search"
            size="small"
            style={{ width: "90%" }}
            onChange={(e) => setSearch(e.target.value)}
          ></MySearch>
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            endIcon={<AddToPhotosIcon />}
          >
            Filter
          </Button>
        </Box>
      </Box>
      <Box width="90%" marginLeft="5%">
        <Grid container spacing={2}>
          {mock.map((name) => {
            if (name.slice(0, search.length) === search) {
              return (
                <Grid item xs={3}>
                  <EventPaper
                    name={name}
                    time={Date()}
                    location="Pathumwan 99"
                  />
                </Grid>
              );
            } else {
              return <></>;
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default JoinEventPage;
