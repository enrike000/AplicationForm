import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const SubmitApp = () => {
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Rowdies",
              color: "white",
              fontSize: "56px",
              ml: "359px",
            }}
          >
            Submitted Applications
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default SubmitApp;
