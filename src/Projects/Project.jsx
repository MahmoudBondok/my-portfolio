import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Project = ({ SidbarWidth , setviewSlider }) => {
  const ProArray = [
    {
      img: "../../img/project/commerce.png",
      Title: "E-Commerce App",
      Discription:
        "E-Commerce App with Shopping Cart using react js and redux toolkit and Material Ui",
      Github:
        "https://github.com/AhmedSafwat97/E-Commerce-with-shopping-cart-using-React-redux",
      demo: "https://e-commerce-house-shop.netlify.app",
    },
    {
      img: "../../img/project/to do list.png",
      Title: "To Do List",
      Discription: "To do List App with Auth With Firebase Database",
      Github: "https://github.com/AhmedSafwat97/To-Do-LIst-React-App-with-Auth",
      demo: "https://t0-do-list-app.netlify.app",
    },
    {
      img: "../../img/project/Movie App.png",
      Title: "Movie App",
      Discription: "Movies App using React js , using MovieDb Api  ",
      Github: "https://github.com/AhmedSafwat97/Movie-app--using-react-js",
      demo: "https://movies-app-with-react.netlify.app",
    },
    {
      img: "../../img/project/portfolio.png",
      Title: "Portfolio React App",
      Discription: "Portfolio App using React js ",
      Github: "https://github.com/AhmedSafwat97/Portfolio-WebSite",
      demo: "https://portfolio-web-react-app.netlify.app",
    },
    {
      img: "../../img/project/E-commerce with js.png",
      Title: "E-Commerce with js",
      Discription: "Ecommerce with shopping Cart using Html and JavaScript",
      Github: "https://github.com/AhmedSafwat97/Ecommerce-using-javascript",
      demo: "https://ahmedsafwat97.github.io/Ecommerce-using-javascript/",
    },
    {
      img: "../../img/project/landing page.png",
      Title: "Landing Page",
      Discription: "pizza Landing Page using Html , Css And JavaScript ",
      Github: "https://github.com/AhmedSafwat97/landing-page",
      demo: "https://ahmedsafwat97.github.io/landing-page/",
    },
    {
      img: "../../img/project/Screenshot.png",
      Title: "Weather App",
      Discription: "Weather App With Node js ",
      Github: "https://github.com/AhmedSafwat97/Node-Js-weather-app",
      demo: "",
    },
    {
      img: "../../img/project/xogame.png",
      Title: "X-o Game",
      Discription: "X-o Game using Html Css And JavaScript",
      Github: "https://github.com/AhmedSafwat97/X-O_Game",
      demo: "https://x-o-play-game.netlify.app",
    },
  ];

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
      <Typography variant="h5" sx={{ ml: "10px", mt: "30px", mb: "5px" }}>
        Projects :
      </Typography>
      <Divider sx={{ bgcolor: "blue", width: "90px", ml: "10px" }} />
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {ProArray.map((item, index) => {
          return (
            <Card key={index} sx={{ maxWidth: " 300px", m: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt=""
                />
                <CardContent sx={{height : "120px"}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.Discription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{ justifyContent: "space-between", alignItems: "baseline" }}
              >
                <Box component="a" target="_blank" href={`${item.demo}`}>
                  <Button size="small" color="primary">
                    Demo
                  </Button>
                </Box>
                <Box component="a" target="_blank" href={`${item.Github}`}>
                  <Button size="small" color="primary">
                    Github
                  </Button>
                </Box>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Project;
