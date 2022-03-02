import { Typography } from "@mui/material";

const PInfoRight = () => {
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
        Redberry Origins
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
          You Watch "What? Where? When?" Yeah. Our
          <br /> founders used to play it. That's where they got a<br />{" "}
          question about a famous American author and
          <br />
          screenwriter Ray Bradbury. Albeit, our CEO Gaga
          <br /> Daraselia forgot the exact name and he answered Ray
          <br /> Redberry. And at that moment, a name for a yet to be
          <br /> born company Was inspired - Redberry 😇
        </pre>
      </Typography>
    </>
  );
};
export default PInfoRight;
