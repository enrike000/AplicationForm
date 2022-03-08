import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubmitPg = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", {
        token: "7e475dfc-0daa-4108-81c8-d6c62a3df4ca",
        first_name: JSON.parse(localStorage.getItem("PersonalInfo")).first_name,
        last_name: JSON.parse(localStorage.getItem("PersonalInfo")).last_name,
        email: JSON.parse(localStorage.getItem("PersonalInfo")).email,
        phone: JSON.parse(localStorage.getItem("PersonalInfo")).phone,
        skills: JSON.parse(localStorage.getItem("techskill")).skills,
        work_preference: JSON.parse(localStorage.getItem("covid"))
          .work_preference,
        had_covid: JSON.parse(localStorage.getItem("covid")).had_covid,
        had_covid_at: JSON.parse(localStorage.getItem("covid")).had_covid_at,
        vaccinated: JSON.parse(localStorage.getItem("covid")).vaccinated,
        vaccinated_at: JSON.parse(localStorage.getItem("covid")).vaccinated_at,
        will_organize_devtalk: JSON.parse(localStorage.getItem("insight"))
          .will_organize_devtalk,
        devtalk_topic: JSON.parse(localStorage.getItem("insight"))
          .devtalk_topic,
        something_special: JSON.parse(localStorage.getItem("insight"))
          .something_special,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
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
