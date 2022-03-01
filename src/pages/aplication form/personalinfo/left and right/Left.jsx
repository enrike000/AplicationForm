import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import DotsMobileStepper from "../../components/stepper";
const Left = () => {
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
      inputpatern: { minLength: 2 },
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
      df: "+995 5",
      value: phone,
      label: "+995 5",
      inputRef: phoneRef,
      autoComplete: "name",
      setValue: setPhone,
      type: "phone",
    },
  ];
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
                defaultValue={item.dv}
                inputProps={item.inputpatern}
                type={item.type}
                required
              />
            </Grid>
          );
        })}
      </Box>
      <Box sx={{ ml: "220px", mt: "70px" }}>
        <DotsMobileStepper />
      </Box>
    </>
  );
};
export default Left;
