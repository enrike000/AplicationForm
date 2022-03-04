import { Box, FormLabel, Typography } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const InsightLeft = () => {
  const [devtalks, setDevtalks] = React.useState("");
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
          sx={{ color: "black", fontSize: "20px", fontFamily: "Rowdies" }}
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
            value="yes"
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
    </>
  );
};
export default InsightLeft;
