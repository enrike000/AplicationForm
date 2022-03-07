import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const InsightLeft = () => {
  const navigate = useNavigate();

  const [devtalks, setDevtalks] = React.useState("");
  const [aboutDevtalks, setAboutDevtalks] = React.useState("");
  const [something, setSomething] = React.useState("");
  const nextpg = () => {
    if (devtalks === "") {
      alert("airchie yes or no");
    } else if (devtalks === "Yes" && aboutDevtalks === "") {
      alert("chawere devtalk");
    } else if (something === "") {
      alert("chawere something");
    } else {
      navigate("/submit");
    }
  };
  const prevpg = (e) => {
    e.preventDefault();
    navigate("/covidpg");
  };
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
        What about you?
      </Typography>

      <Box
        sx={{
          mt: "120PX",
          ml: "125px",
        }}
      >
        <FormLabel
          sx={{ color: "black", fontSize: "16px", fontFamily: "Montserrat" }}
          id="demo-controlled-radio-buttons-group"
        >
          Would you attend Devtalks and maybe also organize your own?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="ofice"
          value={devtalks}
          onChange={(e) => setDevtalks(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
              >
                Yes
              </Typography>
            }
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label={
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                No
              </Typography>
            }
          />
        </RadioGroup>
      </Box>
      {devtalks === "Yes" ? (
        <Box
          sx={{
            mt: "30PX",
            ml: "125px",
          }}
        >
          <Typography
            sx={{ color: "black", fontSize: "16px", fontFamily: "Montserrat" }}
            id="demo-controlled-radio-buttons-group"
          >
            What would you speak about at Devtalk?
          </Typography>
          <TextField
            sx={{ fontFamily: "Montserrat", width: "400px" }}
            placeholder="I would..."
            multiline
            rows={3}
            value={aboutDevtalks}
            onChange={(e) => setAboutDevtalks(e.target.value)}
          />
        </Box>
      ) : null}

      <Box
        sx={{
          mt: "30PX",
          ml: "125px",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "16px",
            fontFamily: "Montserrat",
            mb: "2px",
          }}
          id="demo-controlled-radio-buttons-group"
        >
          Tell us something special
        </Typography>
        <TextField
          sx={{ fontFamily: "Montserrat", width: "400px" }}
          placeholder="I..."
          multiline
          rows={1}
          value={something}
          onChange={(e) => setSomething(e.target.value)}
        />{" "}
        <br />
        <Button onClick={prevpg}>
          <NavigateBeforeIcon />
        </Button>
        <Button onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default InsightLeft;
