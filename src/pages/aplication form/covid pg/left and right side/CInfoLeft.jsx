import { Box, FormLabel, Typography } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const CInfoLeft = () => {
  const [workSpace, setWorkSpace] = React.useState("");
  const [covid, setCovid] = React.useState("");
  const [date, setDate] = React.useState("");
  const [vaccinated, setVaccinated] = React.useState("");

  console.log(date);
  return (
    <>
      <Typography
        sx={{
          color: "#FE3B1F",
          fontSize: "50px",

          mt: "61PX",
          ml: "30%",
          fontFamily: "Rowdies",
        }}
      >
        Covid Stuff
      </Typography>

      <Box
        sx={{
          mt: "60PX",
          ml: "125px",
        }}
      >
        <FormLabel
          sx={{ color: "black", fontSize: "20px", fontFamily: "Rowdies" }}
          id="demo-controlled-radio-buttons-group"
        >
          how would you prefer to work?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="ofice"
          value={workSpace}
          onChange={(e) => setWorkSpace(e.target.value)}
        >
          <FormControlLabel
            value="ofice"
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
              >
                From Sairme Office
              </Typography>
            }
          />
          <FormControlLabel
            value="home"
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                Home
              </Typography>
            }
          />
          <FormControlLabel
            value="hybrid"
            control={<Radio />}
            label={
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                Hybrid
              </Typography>
            }
          />
        </RadioGroup>
      </Box>
      <Box
        sx={{
          mt: "40PX",
          ml: "125px",
        }}
      >
        <FormLabel
          sx={{ color: "#000000", fontSize: "20px", fontFamily: "Rowdies" }}
          id="demo-controlled-radio-buttons-group"
        >
          Did you contact covid 19? :(
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="Yes"
          value={covid}
          onChange={(e) => setCovid(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label={
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                Yes
              </Typography>
            }
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label={
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                No
              </Typography>
            }
          />
        </RadioGroup>
      </Box>
      <Box
        sx={{
          mt: "40PX",
          ml: "125px",
        }}
      >
        <Typography
          sx={{ color: "black", fontSize: "20px", fontFamily: "Rowdies" }}
        >
          When?
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Date"
            openTo="year"
            views={["year", "month", "day"]}
            value={date}
            onChange={(e) => {
              setDate(e);
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "400px" }} />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          mt: "40PX",
          ml: "125px",
        }}
      >
        <FormLabel
          sx={{ color: "#000000", fontSize: "20px", fontFamily: "Rowdies" }}
          id="demo-controlled-radio-buttons-group"
        >
          Have you been vaccinated?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="Yes"
          value={vaccinated}
          onChange={(e) => setVaccinated(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label={
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                Yes
              </Typography>
            }
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label={
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                No
              </Typography>
            }
          />
        </RadioGroup>
      </Box>
    </>
  );
};
export default CInfoLeft;
