import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Chip, Typography } from "@mui/material";
const Accoordion = () => {
  return (
    <Box sx={{ mx: "30px", my: "5px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OverView</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a front-end developer with expertise in React.js, I have a passion for creating beautiful and functional websites. My goal is to provide users with a seamless and engaging experience, whether they are browsing a website, filling out a form, or making a purchase. My ability to work with React.js, combined with my eye for design, allows me to develop websites that are both visually stunning and intuitive to use. Whether you need a simple portfolio website or a complex e-commerce platform, I have the skills and experience to deliver results that meet your specific needs. So, if you're looking for a front-end developer who can bring your online vision to life, look no further. I am confident that I can make your website not only look amazing, but perform exceptionally well too.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Chip sx={{ mx: "5px", my: "10px" }} label="HTML5" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="CSS3" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="Tailwind" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="SASS" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="JavaScript" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="React Js" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="Redux" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="Redux ToolKit" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="Material Ui" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="GitHub" />
            <Chip sx={{ mx: "5px", my: "10px" }} label="PhotoShop" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accoordion;
