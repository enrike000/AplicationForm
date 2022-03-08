import { Box, Button, FormLabel, IconButton, Typography } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CInfoLeft = () => {
  const navigate = useNavigate();

  const [workSpace, setWorkSpace] = React.useState(() => {
    const saved = localStorage.getItem("workSpace");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [covidContact, setCovidContact] = React.useState(() => {
    const saved = localStorage.getItem("covidContact");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [contactDate, setContactDate] = React.useState(() => {
    const saved = localStorage.getItem("contactDate");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [vaccinated, setVaccinated] = React.useState(() => {
    const saved = localStorage.getItem("vaccinated");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [vaccinatedTime, setVaccinatedTime] = React.useState(() => {
    const saved = localStorage.getItem("vaccinatedTime");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const nextpg = (e) => {
    e.preventDefault();

    if (workSpace === "") {
      toast.error("Choose how would you prefer to work!");
    } else if (covidContact === "") {
      toast.error("Choose whether you had a contact Covid19!");
    } else if (vaccinated === "") {
      toast.error("Choose whether you are vaccinated");
    } else if (covidContact === "true" && contactDate === "") {
      toast.error("Enter the contact time!");
    } else if (vaccinated === "true" && vaccinatedTime === "") {
      toast.error("Enter the vaccinated time!");
    } else {
      navigate("/InsigtPg");
    }
  };
  const prevpg = (e) => {
    e.preventDefault();
    navigate("/TechSkill");
  };
  const first = () => {
    navigate("/personalinfo");
  };
  const second = () => {
    navigate("/TechSkill");
  };
  return (
    <>
      <ToastContainer />
      <Typography
        sx={{
          color: "#FE3B1F",
          fontSize: "50px",

          mt: "61PX",
          ml: "30%",
          fontFamily: "Rowdies",
        }}
      >
        Covid Stuff
      </Typography>
      <Box>
        <Box
          sx={{
            mt: "60PX",
            ml: "125px",
          }}
        >
          <FormLabel
            sx={{ color: "black", fontSize: "19px", fontFamily: "Montserrat" }}
            id="demo-controlled-radio-buttons-group"
          >
            how would you prefer to work?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue="ofice"
            value={workSpace}
            onChange={(e) => setWorkSpace(e.target.value)}
          >
            <FormControlLabel
              value="ofice"
              control={<Radio />}
              label={
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                  }}
                >
                  From Sairme Office
                </Typography>
              }
            />
            <FormControlLabel
              value="home"
              control={<Radio />}
              label={
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  Home
                </Typography>
              }
            />
            <FormControlLabel
              value="hybrid"
              control={<Radio />}
              label={
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                  Hybrid
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
        <Box
          sx={{
            mt: "40PX",
            ml: "125px",
          }}
        >
          <FormLabel
            sx={{
              color: "#000000",
              fontSize: "18px",
              fontFamily: "Montserrat",
            }}
            id="demo-controlled-radio-buttons-group"
          >
            Did you contact covid 19? :(
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={covidContact}
            onChange={(e) => setCovidContact(e.target.value)}
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label={
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                  Yes
                </Typography>
              }
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label={
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                  No
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
        {covidContact === "true" ? (
          <>
            <Box
              sx={{
                mt: "40PX",
                ml: "125px",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  mb: "20px",
                }}
              >
                When?
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={contactDate}
                  onChange={(e) => {
                    setContactDate(e);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "400px" }} />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </>
        ) : null}

        <Box
          sx={{
            mt: "40PX",
            ml: "125px",
          }}
        >
          <FormLabel
            sx={{
              color: "#000000",
              fontSize: "18px",
              fontFamily: "Montserrat",
            }}
            id="demo-controlled-radio-buttons-group"
          >
            Have you been vaccinated?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={vaccinated}
            onChange={(e) => setVaccinated(e.target.value)}
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label={
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                  Yes
                </Typography>
              }
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label={
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "14px" }}>
                  No
                </Typography>
              }
            />
          </RadioGroup>
          <Box
            sx={{
              mt: "40PX",
            }}
          >
            {vaccinated === "true" ? (
              <>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    mb: "20px",
                  }}
                >
                  When did you get your last covid vaccine?
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="Date"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={vaccinatedTime}
                    onChange={(e) => {
                      setVaccinatedTime(e);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "400px" }} />
                    )}
                  />
                </LocalizationProvider>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "50%", ml: "160px", mt: "40px" }}>
        <Button onClick={prevpg}>
          <NavigateBeforeIcon />
        </Button>
        <IconButton size="small" onClick={first}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>
        <IconButton size="small" onClick={second}>
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton size="small">
          <CircleIcon sx={{ color: "#FE3B1F" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <IconButton disabled size="small">
          <CircleIcon sx={{ color: "#ed7272" }} />
        </IconButton>{" "}
        <Button onClick={nextpg}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </>
  );
};
export default CInfoLeft;
