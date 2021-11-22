import { Box, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TablePage = () => {
  const [data, setData] = useState<any>([{ test: "test" }]);
  const [query, setquery] = useState<string>("");

  useEffect(() => {
    axios
      .post("http://35.213.155.144:4000/query", {
        sql: "SELECT * FROM Event ;",
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  const searchHandler = () => {
    axios
      .post("http://35.213.155.144:4000/query", { sql: query })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      minHeight="100vh"
    >
      <Box width="80%">
        <TextField
          onChange={(e) => setquery(e.target.value)}
          style={{ width: "100%", marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          style={{ width: "100%", marginBottom: "20px" }}
        >
          SEARCH
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {console.log(data)}
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TablePage;