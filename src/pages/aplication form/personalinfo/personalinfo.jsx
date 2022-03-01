import { Box, Grid } from "@mui/material";
import React from "react";
import Left from "./left and right/Left";
import Right from "./left and right/Right";

const PersonalInfo = () => {
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Left />
          </Grid>
          <Grid sx={{ bgcolor: "#100E0E", height: "101vh" }} item xs={6}>
            <Right />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default PersonalInfo;
