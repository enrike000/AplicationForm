import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import DotsMobileStepper from "./components/stepper";

const PersonalInfo = () => {
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
      value: phone,
      label: "+995 5",
      inputRef: phoneRef,
      autoComplete: "name",
      setValue: setPhone,
      type: "number",
    },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "#FE3B1F",
                fontSize: "50px",
                p: "8%",
                mt: 3,
                ml: 4,
                fontFamily: "Rowdies",
              }}
            >
              Hey, Rocketeer, what <br /> are your coordinates?
              {multipleInput.map((item) => {
                return (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete={item.autoComplete}
                      fullWidth
                      value={item.value}
                      onChange={(e) => item.setValue(e.target.value)}
                      label={item.label}
                      InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                      inputRef={item.inputRef}
                      inputProps={item.inputpatern}
                      type={item.type}
                    />
                  </Grid>
                );
              })}
            </Typography>
            <DotsMobileStepper />
          </Grid>
          <Grid sx={{ bgcolor: "red" }} item xs={6}>
            <Typography>xs=4</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default PersonalInfo;
