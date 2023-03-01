import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WebIcon from "@mui/icons-material/Web";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import { useTheme } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useLocation, useNavigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SideBar = ({ setTheme, SidbarWidth, viewSlider, setviewSlider }) => {
  // const [iconColor, seticonColor] = useState("orange");
  // const [ThemeName, setThemeName] = useState("Light Mood");
  // const theme = useTheme();

  const navigate = useNavigate();
  const cLocation = useLocation();

  const NavButton = [
    { Title: "Home", Icon: <HomeIcon />, path: "/" },
    { Title: "About", Icon: <PersonIcon />, path: "/about" },
    { Title: "Project Frontend", Icon: <WebIcon />, path: "/projects" },
    { Title: "Project Full-Stack", Icon: <WebIcon />, path: "/project-fullstack" },
    { Title: "Contact", Icon: <MailOutlineIcon />, path: "/contact" },
  ];

  const socialicons = [
    { icon: <FacebookIcon />, color: "#3b5998", link: "https://www.facebook.com/profile.php?id=100023130649538" },
    { icon: <LinkedInIcon />, color: "#007bb6", link: "https://www.linkedin.com/in/mahmoudbondok/" },
    { icon: <TwitterIcon />, color: "#00aced", link: "https://twitter.com/mahmoudsafwatc" },
    { icon: <GitHubIcon />, color: "#EEE", link: "https://github.com/MahmoudBondok" },
  ];


  const handleclose = () => {
    setviewSlider("none")

  }
  return (
    <Box
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.9)",
        width: `${SidbarWidth}px`,
        minHeight: "100vh",
        position: "fixed",
        top: "0",
        bottom: "0",
        display: { xs: viewSlider, md: "block" }
        , zIndex: "3"
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
      <Typography sx={{ textAlign: "center", mt: "10px", color: "white" }} variant="h6">
        Mahmoud Bondok
      </Typography>

      <List sx={{ display: "flex", m: "5px 15px" }}>
        {socialicons.map((item, index) => {
          return (
            <ListItemButton key={index}>
              <Box component="a" href={`${item.link}`} target="_blank" >
                <ListItemIcon
                  sx={{
                    mx: "auto",
                    color: "white",
                    ":hover": { color: item.color },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </Box>
            </ListItemButton>
          );
        })}
      </List>

      <List sx={{ justifyContent: "center" }}>
        {NavButton.map((item, index) => {
          return (
            <Box key={index}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  sx={{
                    bgcolor:
                      cLocation.pathname === `${item.path}` ? "#1976d2" : null,
                  }}
                  onClick={() => {
                    handleclose()
                    navigate(`${item.path}`);
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.Icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary={`${item.Title}`}
                  />
                </ListItemButton>
              </List>
            </Box>
          );
        })}
        {/* <ListItemButton
          onClick={() => {
            setTheme(theme.palette.mode === "dark" ? "dark" : "dark");
            localStorage.setItem(
              "PageMood",
              theme.palette.mode === "light" ? "dark" : "dark"
            );
            seticonColor(iconColor === "orange" ? "" : "orange");
            setThemeName(
              ThemeName === "Light Mood" ? "Dark Mood" : "Light Mood"
            );
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <Brightness4Icon sx={{ color: iconColor }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary={ThemeName} />
        </ListItemButton> */}
      </List>
    </Box>
  );
};

export default SideBar;
