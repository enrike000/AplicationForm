import { Typography } from "@mui/material";

const CInfoRight = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          ml: "100px",
          mt: "85px",
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
        As this infamous pandemic took over the world, we <br />
        adjusted our working practices so that our <br />
        employees can be as safe and comfortable as
        <br /> possible. We have a hybrid work environment, so you
        <br /> can either work from home or visit our lovely office <br />
        on Sairme Street. If it was up to us, we would love you <br />
        to see us in the office because we think face-to-face <br />
        comunications &gt; Zoom meetings. Both on the fun <br />
        and productivity scales.
      </Typography>
    </>
  );
};
export default CInfoRight;
