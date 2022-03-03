import { Box, Grid } from "@mui/material";
import React from "react";
import CInfoRight from "./left and right side/CInfoRight";
const CovidPg = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <p>1</p>
        </Grid>
        <Grid sx={{ bgcolor: "#100E0E", height: "101vh" }} item xs={6}>
          <CInfoRight />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CovidPg;
