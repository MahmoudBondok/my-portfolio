import React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accoordion from "./Accoordion";

const About = ({ SidbarWidth, setviewSlider }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "block",
        maxHeight: "100vh",
        ml: { md: `${SidbarWidth}px` },
      }}
      onClick={() => {
        setviewSlider("none")
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ ml: "10px", mt: "30px", mb: "5px" }}>
          About Me
        </Typography>
        <Divider sx={{ bgcolor: "#ccc", width: "100px", ml: "10px" }} />
      </Box>

      <Box
        sx={{
          display: { xs: "block" },
        }}
      >
        <Avatar
          sx={{
            width: "150px",
            height: "150px",
            mx: "auto",
            mt: "30px",
          }}
          alt="Remy Sharp"
          src="../../img/avatar.jpg"
        />
        <Typography variant="h5" textAlign="center" mt="10px">
          Mahmoud Bondok
        </Typography>

        <Typography variant="h5" textAlign="center" mt="10px">
          {" "}
          I'm a Front-End Web Developer | React.js
        </Typography>
      </Box>
      <Box my="10px">
        <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <LocationOnIcon />
          Damanhour ,Egypt
        </Typography>
      </Box>

      <Accoordion />
    </Box>
  );
};

export default About;
