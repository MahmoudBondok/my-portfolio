import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accoordion from "./Accoordion";

const About = ({ SidbarWidth }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "block",
        maxHeight: "100vh",
        ml: { md: `${SidbarWidth}px` },
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ ml: "10px", mt: "30px", mb: "5px" }}>
          About Me :
        </Typography>
        <Divider sx={{ bgcolor: "blue", width: "100px", ml: "10px" }} />
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
          Ahmed Safwat Abbas
        </Typography>

        <Typography variant="h5" textAlign="center" mt="10px">
          {" "}
          I'm a front-end web developer | React.js
        </Typography>
      </Box>
      <Box my="10px">
        <Typography variant="h6" textAlign="center">
          <LocationOnIcon />
          Alexanderia ,Egypt
        </Typography>
      </Box>

      <Accoordion />
    </Box>
  );
};

export default About;
