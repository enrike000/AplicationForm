/* eslint-disable no-useless-concat */
import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const TechSkillLeft = () => {
  const [skill, setSkill] = useState([]);
  const [chosenSkill, setChosenSkill] = useState("");

  const [addElement, setAddElement] = useState([]);
  const [experience, setExperience] = useState("");

  const handleChange = (e) => {
    setChosenSkill(e.target.value);
  };

  const url = "https://bootcamp-2022.devtest.ge/api/skills";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkill(data);
      });
  }, []);

  const addItem = () => {
    const id = addElement.length;
    setSkill((prev) => prev.filter((el) => el.title !== chosenSkill));
    setAddElement([...addElement, { title: chosenSkill, experience, id }]);
  };
  console.log(chosenSkill);
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
        Tell us about your skills
      </Typography>
      <Box sx={{ mt: "30px", ml: "140px" }}>
        <FormControl sx={{ width: "60%" }}>
          <InputLabel
            sx={{ fontFamily: "Montserrat" }}
            id="demo-simple-select-label"
          >
            Skill
          </InputLabel>
          <Select label="skill" value={chosenSkill} onChange={handleChange}>
            {skill
              .filter((el) => !addElement.includes({ title: el.title }))
              .map((e) => {
                return <MenuItem value={e.title}>{e.title}</MenuItem>;
              })}
          </Select>
        </FormControl>{" "}
        <br />
        <TextField
          onChange={(e) => setExperience(e.target.value)}
          sx={{
            width: "60%",
            mt: "30px",
            fontFamily: "Montserrat",
          }}
          id="outlined-basic"
          label="Experience Duration in Years"
          variant="outlined"
        />{" "}
        <br />
        <Button
          sx={{
            width: "200px",
            fontSize: "9.1px",
            mt: "30px",
            ml: "160px",
            bgcolor: "#FE3B1F",
            "&:hover": {
              bgcolor: "#FE3B1F",
            },
            fontFamily: "Montserrat",
          }}
          variant="contained"
          onClick={() => addItem()}
        >
          Add Programming Language
        </Button>
        {}
      </Box>
      {addElement.map((e) => {
        return (
          <>
            <Box sx={{ mt: "10px", ml: "140px" }}>
              <TextField
                sx={{
                  width: "60%",
                  mt: "10px",
                  fontFamily: "Montserrat",
                  fontSize: "11px",
                  color: "black",
                }}
                disabled
                id="outlined-disabled"
                defaultValue={
                  e.title + "      " + "Years of Experience:" + e.experience
                }
              />
            </Box>
          </>
        );
      })}
    </>
  );
};
export default TechSkillLeft;
