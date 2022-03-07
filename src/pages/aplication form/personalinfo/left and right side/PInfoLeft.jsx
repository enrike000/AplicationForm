/* eslint-disable no-useless-escape */
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
const PInfoLeft = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(() => {
    const saved = localStorage.getItem("firstName");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [lastName, setLastName] = useState(() => {
    const saved = localStorage.getItem("lastName");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [phone, setPhone] = useState(() => {
    const saved = localStorage.getItem("phone");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();

  React.useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("email", JSON.stringify(email));
  }, [firstName, lastName, phone, email]);

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
      value: lastName,
      label: "Last Name",
      inputRef: lastNameRef,
      autoComplete: "lastname",
      setValue: setLastName,
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
    } else if (lastName.length < 2) {
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
      <Box sx={{ width: "50%", ml: "160px", mt: "40px" }}>
        <Button disabled sx={{ color: "red" }}>
          <NavigateBeforeIcon />
        </Button>
        <IconButton size="small">
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <Button sx={{ color: "red" }} onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default PInfoLeft;
