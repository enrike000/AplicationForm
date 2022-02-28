import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const styles = {
  bodyImg: {
    backgroundImage: "./img/stars.png",
  },
};
const MainPage = () => {
  return (
    <Box style={styles.bodyImg} sx={{ bgcolor: "black" }}>
      <Stack direction={{ sm: "column" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              ml: "486px",
              mt: "190px",
              width: 1,
              color: "red",
            }}
          >
            Welcome Rocketeer!
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ ml: "41%", mt: "190px", borderRadius: 7, width: "19%" }}
        >
          Start Questionnaire
        </Button>
        <Button
          sx={{
            width: "16%",
            ml: "43%",
            mt: "15px",
            fontSize: "15px",
            color: "white",
          }}
          variant="text"
        >
          Submitted Applications
        </Button>
        <img src="./img/rocketman.svg" alt="e" />
      </Stack>
    </Box>
  );
};
export default MainPage;
