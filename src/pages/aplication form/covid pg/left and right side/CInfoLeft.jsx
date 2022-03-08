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

const CInfoLeft = () => {
  const navigate = useNavigate();

  const [workSpace, setWorkSpace] = React.useState(() => {
    const saved = localStorage.getItem("workSpace");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [covidContact, setCovidContact] = React.useState("");
  const [contactDate, setContactDate] = React.useState("");
  const [vaccinated, setVaccinated] = React.useState(Boolean);
  const [vaccinatedTime, setVaccinatedTime] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("workSpace", JSON.stringify(workSpace));
    localStorage.setItem("covidContact", JSON.stringify(covidContact));
    localStorage.setItem("vaccinated", JSON.stringify(vaccinated));
    localStorage.setItem("contactDate", JSON.stringify(contactDate));
    localStorage.setItem("vaccinatedTime", JSON.stringify(vaccinatedTime));
  }, [workSpace, covidContact, vaccinated, contactDate, vaccinatedTime]);

  const nextpg = (e) => {
    e.preventDefault();

    if (workSpace === "") {
      alert("nnn");
    } else if (covidContact === "") {
      alert("nnn1");
    } else if (vaccinated === "") {
      alert("nnn2");
    } else if (covidContact === "true" && contactDate === "") {
      alert("sheiyvanet contact time");
    } else if (vaccinated === "true" && vaccinatedTime === "") {
      alert("Sheiyvanet vacinis dro");
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
