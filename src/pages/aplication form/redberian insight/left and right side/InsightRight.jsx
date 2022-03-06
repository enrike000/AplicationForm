import { Typography } from "@mui/material";

const InsightRight = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          ml: "100px",
          mt: "70px",
          color: "#FE3B1F",
          fontFamily: "Rowdies",
        }}
      >
        Redberry Covid Policies
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          color: "#FFFFFF",
          ml: "100px",
          mt: "80px",
          fontSize: "21px",
        }}
      >
        We were soo much fun before the pandemic started! <br />
        Parties almost every weekend and lavish employee <br />
        birthday celebrations! Unfortunately, covid ruined <br />
        that fun like it did almost everything else in the <br />
        world. But we try our best to zhuzh it up a bit. For <br />
        example, we host biweekly devtalks where our senior <br />
        and lead developers talk about topics they are <br />
        passionate about. Previous topics have included <br />
        Web3, NFT, Laravel 9, Kubernetes, ect. We hold these <br />
        talks in the office but you can join our Zoom <br />
        brodcast as well. Feel free to join either as an <br />
        attendee or a speaker!
      </Typography>
    </>
  );
};
export default InsightRight;
