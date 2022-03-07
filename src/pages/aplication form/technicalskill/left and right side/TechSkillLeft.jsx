/* eslint-disable no-useless-concat */
import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toast } from "react-toastify";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

const TechSkillLeft = () => {
  const navigate = useNavigate();

  const [skill, setSkill] = useState([]);
  const [chosenSkill, setChosenSkill] = useState("");

  const [addElement, setAddElement] = useState([]);
  const [experience, setExperience] = useState("");

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
    console.log(skill);
    if (chosenSkill === "") {
      alert("airchiet skil");
    } else if (experience === "") {
      toast.error("შეიყვანეთ სახელი");
    } else {
      const id = addElement.length;
      setSkill((prev) => prev.filter((el) => el.title !== chosenSkill));
      setAddElement([...addElement, { title: chosenSkill, experience, id }]);
    }
  };
  const remove = (id) => {
    const tmp = addElement.filter((e) => id !== e.id);
    setAddElement(tmp);
  };
  console.log(addElement);
  const nextpg = () => {
    if (addElement.length === 0) {
      alert("airchiet 1 mainc ro gadaxvide");
    } else {
      navigate("/covidpg");
    }
  };
  const prevpg = () => {
    navigate("/personalinfo");
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
      <Box sx={{ mt: "30px", ml: "140px" }}>
        <FormControl sx={{ width: "60%" }}>
          <InputLabel
            sx={{ fontFamily: "Montserrat" }}
            id="demo-simple-select-label"
          >
            Skill
          </InputLabel>
          <Select
            label="skill"
            value={chosenSkill}
            displayEmpty={true}
            onChange={(e) => setChosenSkill(e.target.value)}
          >
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
          required
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
                defaultValue={"      " + "Years of Experience:" + e.experience}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{e.title}</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{ color: "#EB3535" }}
                        onClick={() => remove(e.id)}
                      >
                        <RemoveCircleOutlineIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </>
        );
      })}

      <Button onClick={prevpg}>
        <NavigateBeforeIcon />
      </Button>

      <Button onClick={nextpg}>
        <NavigateNextIcon />
      </Button>
    </>
  );
};
export default TechSkillLeft;
