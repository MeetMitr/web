import { Box, Paper, TextField, Select, MenuItem, Button } from "@mui/material";
import logo from "../resources/logo.svg";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const RegisterPage = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  return (
    <Box
      display="flex"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "#FAF3E7" }}
    >
      <Paper style={{ width: "60%" }}>
        <Box padding="20px" alignItems="center">
          <Box display="flex" justifyContent="center" width="100%">
            <img
              alt="logo"
              src={logo}
              width="40px"
              style={{ marginRight: "20px" }}
            />
          </Box>
          <Box marginTop="20px" display="flex">
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                First Name
              </Box>
              <Box marginTop="3px">
                <TextField sx={{ width: "95%" }} size="small" />
              </Box>
            </Box>
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Last Name
              </Box>
              <Box marginTop="3px">
                <TextField sx={{ width: "100%" }} size="small" />
              </Box>
            </Box>
          </Box>
          <Box marginTop="20px" display="flex">
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Password
              </Box>
              <Box marginTop="3px">
                <TextField type="password" sx={{ width: "95%" }} size="small" />
              </Box>
            </Box>
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Confirm Password
              </Box>
              <Box marginTop="3px">
                <TextField
                  type="password"
                  sx={{ width: "100%" }}
                  size="small"
                />
              </Box>
            </Box>
          </Box>
          <Box marginTop="20px" display="flex">
            <Box width="100%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Email Address
              </Box>
              <Box marginTop="3px">
                <TextField sx={{ width: "100%" }} size="small" />
              </Box>
            </Box>
          </Box>
          <Box marginTop="20px" display="flex">
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Birthdate
              </Box>
              <Box marginTop="3px">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={birthdate}
                    onChange={(newValue) => {
                      setBirthdate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        sx={{ width: "95%" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box width="50%">
              <Box
                sx={{ fontSize: "20px", color: "#303B5B", marginLeft: "5px" }}
              >
                Gender
              </Box>
              <Box marginTop="3px">
                <Select
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  value={gender}
                  size="small"
                  style={{ width: "100%" }}
                >
                  <MenuItem value={"male"}>ชาย</MenuItem>
                  <MenuItem value={"female"}>หญิง</MenuItem>
                  <MenuItem value={"etc"}>อื่น ๆ</MenuItem>
                </Select>
              </Box>
            </Box>
          </Box>

          <Box marginTop="20px" width="100%">
            <Button
              variant="contained"
              style={{ width: "100%", backgroundColor: "#FFC229" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
