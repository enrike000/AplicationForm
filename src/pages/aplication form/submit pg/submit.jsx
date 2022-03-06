import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const token = "8cd4cbcd-cfb6-411e-8333-32751c6cd8e4";

const SubmitPg = () => {
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FE3B1F",
            "&:hover": {
              background: "#FE3B1F",
            },
            borderRadius: 7,
            fontFamily: "Montserrat",
            fontSize: "17px",
            mt: "300px",
            ml: "638px",
            width: "15%",
          }}
        >
          Submit
        </Button>{" "}
        <br />
        <Link underline="always">
          <Button
            sx={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              mt: "15px",
              ml: "710px",

              color: "white",
              bgcolor: "black",
              "&:hover": {
                background: "black",
              },
            }}
            variant="text"
          >
            Go back{" "}
          </Button>
        </Link>
      </Box>
    </>
  );
};
export default SubmitPg;
