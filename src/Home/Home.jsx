import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = ({ SidbarWidth, setviewSlider }) => {


  return (
    <Box
      component="main"
      sx={{ height: "100vh", ml: { md: `${SidbarWidth}px` } }}
      className="wallpaper"
    >
      <Box className="c-opacity"
        onClick={() => {
          setviewSlider("none")
        }}
      >
        <Box>
          <Typography sx={{ color: "white" }} variant="h4">Hello, I'm Mahmoud Safwat</Typography>
          <Typography variant="h8">
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "",
                2000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", color: "white" }}
            />
          </Typography>
          <Button variant="contained">
            <Box component="a" target="_blank" href="https://drive.google.com/file/d/1zRfXKymRnNO0FKgLOt77OLXS9929BPdX/view"
              sx={{
                textDecoration: "none", fontWeight: '500', color: '#FFF'
              }}>
              View My Cv
            </Box>
          </Button>
        </Box>
      </Box >
    </Box >
  );
};

export default Home;
