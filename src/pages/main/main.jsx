import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
const MainPage = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Stack direction={{ sm: "column" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", color: "white", bgcolor: "red" }}
          >
            Welcome Rocketeer!
          </Typography>
        </Box>
        <Button variant="contained" sx={{ borderRadius: 7 }}>
          Start Questionnaire
        </Button>
        <Button variant="text">Submitted Applications</Button>
        <img src="./img/rocketman.svg" alt="e" />
      </Stack>
    </Box>
  );
};
export default MainPage;
