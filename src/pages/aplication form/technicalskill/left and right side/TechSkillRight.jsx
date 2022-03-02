import { Typography } from "@mui/material";

const TechSkillRight = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          ml: "100px",
          mt: "50px",
          color: "#FE3B1F",
          fontFamily: "Rowdies",
        }}
      >
        A bit about our battles
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
        <pre>
          As we said, Redberry has been on the field for quite
          <br /> some time now, and we have touched and embraced
          <br /> a varietly of programming languages, technologies,
          <br />
          philosophies, and frameworks. We are battle-tested
          <br /> in PHP Laravel Stack with Vue.js, refined in React,
          <br /> and allies with Serveside technologies like Docker
          <br /> and Kubernetes, and now we have set foot in the <br />
          web3 industry.
        </pre>
      </Typography>
    </>
  );
};
export default TechSkillRight;
