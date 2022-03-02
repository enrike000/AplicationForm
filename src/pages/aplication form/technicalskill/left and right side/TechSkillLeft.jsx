import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const TechSkillLeft = () => {
  const [skill, setSkill] = useState("Skills");

  const handleChange = (event) => {
    setSkill(event.target.value);
  };
  const url = "https://bootcamp-2022.devtest.ge/api/skills";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
        console.log(res);
      })
      .then((data) => {
        setSkill(data);
        console.log(data);
      });
  }, []);
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={skill}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>e</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default TechSkillLeft;
