/* eslint-disable no-useless-escape */
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

const PInfoLeft = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();

  const multipleInput = [
    {
      value: firstName,
      label: "First Name",
      inputRef: nameRef,
      autoComplete: "name",
      setValue: setFirstName,
      type: "text",
    },
    {
      value: lastname,
      label: "Last Name",
      inputRef: lastNameRef,
      autoComplete: "lastname",
      setValue: setLastname,
      type: "text",
    },
    {
      value: email,
      label: "E Mail",
      inputRef: emailRef,
      autoComplete: "email",
      setValue: setEmail,
      type: "email",
    },
    {
      value: phone,
      label: "+995 5XX-XX-XX-XX",
      inputRef: phoneRef,
      autoComplete: "name",
      setValue: setPhone,
      type: "phone",
    },
  ];
  const nextpg = (e) => {
    e.preventDefault();
    if (firstName.length < 2) {
      alert("შეიყვანეთ მინიმუმ 2 ასო");
    } else if (lastname.length < 2) {
      alert("შეიყვანეთ მინიმუმ 2 ასო");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("შეიყვანეთ ვალიდური ემაილი");
    } else {
      navigate("/TechSkill");
    }
  };

  return (
    <>
      <Typography
        sx={{
          color: "#FE3B1F",
          fontSize: "50px",
          p: "8%",
          mt: 3,
          ml: 4,
          fontFamily: "Rowdies",
          mb: "20px",
        }}
      >
        Hey, Rocketeer, what <br /> are your coordinates?
      </Typography>
      <Box sx={{ ml: "140px", mb: "30px" }}>
        {multipleInput.map((item) => {
          return (
            <Grid item sm={8}>
              <TextField
                sx={{ mt: "20px" }}
                autoComplete={item.autoComplete}
                fullWidth
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
                label={item.label}
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                inputRef={item.inputRef}
                type={item.type}
              />
            </Grid>
          );
        })}
      </Box>

      <Button disabled>
        <NavigateBeforeIcon />
      </Button>

      <Button onClick={nextpg}>
        <NavigateNextIcon />
      </Button>
      <Box sx={{ ml: "220px", mt: "70px" }}></Box>
    </>
  );
};
export default PInfoLeft;
