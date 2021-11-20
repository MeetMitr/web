import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  Modal,
  Slider,
} from "@mui/material";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Logo from "../resources/logo.svg";
import Navbar from "../components/Navbar";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { TimePicker } from "@mui/lab";

const MySearch = styled(TextField)`
  background-color: white;
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffd468;
  }
  & label.Mui-focused {
    color: #ffd468;
  }
`;

const MySlider = styled(Slider)`
  color: #ffcc4d;
`;

interface EventPaperProps {
  imageUrl?: string;
  name: string;
  time: string;
  location: string;
}

interface FilterModalProps {
  open: boolean;
  setShowFilterModal: any;
}

const FilterModal: React.FC<FilterModalProps> = (props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#FAF3E7",
    borderRadius: "10px",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const [valueTime, setValueTime] = useState<Date | null>(new Date());
  return (
    <Modal open={props.open}>
      <Box sx={style}>
        <Box>วันที่</Box>
        <Box marginY={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </Fragment>
              )}
            />
          </LocalizationProvider>
        </Box>
        <hr />
        <Box>เวลา</Box>
        <Box marginY={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Start Time"
              value={valueTime}
              onChange={(newValue) => {
                setValueTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <hr />
        <Box>ระยะทาง</Box>
        <MySlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Box display="flex" justifyContent="space-between">
          <Box>0 KM</Box>
          <Box>100 KM</Box>
        </Box>
        <hr />
        <Box
          marginLeft="55%"
          display="flex"
          width="45%"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            onClick={() => props.setShowFilterModal(false)}
            style={{ backgroundColor: "#B54040" }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => props.setShowFilterModal(false)}
            style={{ backgroundColor: "#356843" }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const EventPaper: React.FC<EventPaperProps> = (props) => {
  let defaultUrl =
    "https://seda.college/blog/wp-content/uploads/2018/06/party.jpg";
  return (
    <Link to="/event/a">
      <Card style={{ height: "300px", cursor: "pointer" }}>
        <Box height="70%">
          <img
            src={props.imageUrl || defaultUrl}
            alt={props.imageUrl || defaultUrl}
            height="100%"
          />
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
    </Link>
  );
};

const JoinEventPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
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
      <FilterModal
        open={showFilterModal}
        setShowFilterModal={setShowFilterModal}
      />
      <Navbar title="Event Feed" home />
      {/* <Box
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
      </Box> */}
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
            onClick={(e) => setShowFilterModal(true)}
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
