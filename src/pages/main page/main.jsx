import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

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
              mt: "175px",
              color: "#FE3B1F",
            }}
          >
            Welcome Rocketeer!
          </Typography>
        </Box>
        <Link underline="none" href="personalinfo">
          <Button
            variant="contained"
            sx={{
              ml: "41%",
              mt: "120px",
              bgcolor: "#FE3B1F",
              "&:hover": {
                background: "#FE3B1F",
              },
              borderRadius: 7,
              width: "19%",
            }}
          >
            Start Questionnaire
          </Button>
        </Link>
        <Link href="#" underline="always">
          <Button
            sx={{
              width: "16%",
              ml: "43%",
              mt: "15px",
              fontSize: "15px",
              color: "white",
              bgcolor: "black",
              "&:hover": {
                background: "black",
              },
            }}
            variant="text"
          >
            Submitted Applications
          </Button>
        </Link>
        <img src="./img/rocketman.svg" alt="e" />
      </Stack>
    </Box>
  );
};
export default MainPage;
