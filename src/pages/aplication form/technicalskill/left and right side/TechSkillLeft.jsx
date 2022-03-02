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
        console.log(data);
      });
  }, []);
  const addItem = () => {
    const id = addElement.length;
    setAddElement([...addElement, { chosenSkill, experience, id }]);
    setExperience("");
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
        Tell us about your skills
      </Typography>
      <Box sx={{ mt: "40px", ml: "140px" }}>
        <FormControl sx={{ width: "60%" }}>
          <InputLabel id="demo-simple-select-label">Skill</InputLabel>
          <Select label="skill" value={chosenSkill} onChange={handleChange}>
            {skill.map((e) => {
              return <MenuItem value={e.id}>{e.title}</MenuItem>;
            })}
          </Select>
        </FormControl>{" "}
        <br />
        <TextField
          onChange={(e) => setExperience(e.target.value)}
          sx={{ width: "60%", mt: "30px" }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />{" "}
        <br />
        <Button
          sx={{
            width: "240px",
            fontSize: "7px",
            mt: "30px",
            ml: "120px",
            bgcolor: "#FE3B1F",
            "&:hover": {
              bgcolor: "#FE3B1F",
            },
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
            <p>{e.chosenSkill}</p>
            <p>{e.experience}</p>
          </>
        );
      })}
    </>
  );
};
export default TechSkillLeft;
