import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const SubmitPg = () => {
  const navigate = useNavigate();

  const submit = () => {
    alert("mivige");
  };
  const back = (e) => {
    e.preventDefault();
    navigate("/InsigtPg");
  };
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Button
          onClick={submit}
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
            onClick={back}
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
