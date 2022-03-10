import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const SubmitApp = () => {
  const [postinfo, setPostinfo] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://bootcamp-2022.devtest.ge/api/applications?token=75432f6e-fdb5-4820-b1f1-0c7ce6db6f91"
        );
        setPostinfo(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(postinfo);
  return (
    <>
      <Box sx={{ bgcolor: "black", height: "100vh" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Rowdies",
              color: "white",
              fontSize: "56px",
              ml: "359px",
            }}
          >
            Submitted Applications
          </Typography>
          <Accordion sx={{ bgcolor: "red", width: "1154px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            ></AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "white" }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography sx={{ fontFamily: "Montserrat" }}>
                    Personal Information
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography sx={{ fontFamily: "Montserrat" }}>
                        First Name <br /> <br /> <br />
                        Last Name <br /> <br /> <br />
                        E Mail <br /> <br /> <br />
                        Phone
                      </Typography>
                    </Grid>
                    <Grid sx={{}} item xs={6}>
                      <Typography>
                        {" "}
                        {postinfo[0].first_name}
                        <br /> <br /> <br />
                        {postinfo[0].last_name} <br /> <br /> <br />
                        {postinfo[0].email} <br /> <br /> <br />
                        {postinfo[0].phone}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography>Covid Situation</Typography>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    defaultValue={postinfo[0].work_preference}
                  >
                    <FormControlLabel
                      disabled
                      value="from_ofice"
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
                      disabled
                      value="from_home"
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
                      disabled
                      value="from_hybrid"
                      control={<Radio />}
                      label={
                        <Typography
                          sx={{ fontFamily: "Montserrat", fontSize: "14px" }}
                        >
                          Hybrid
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
                <Grid sx={{}} item xs={6}>
                  kukukukuk
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};
export default SubmitApp;
