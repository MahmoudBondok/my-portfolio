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

const ProjectFullStack = ({ SidbarWidth, setviewSlider }) => {
    const ProArray = [
        {
            img: "../../img/project/Kasper.png",
            Title: "Kasper Template",
            Discription:
                "Design Using Html and CSS",
            Github:
                "https://github.com/MahmoudBondok/-Kasper",
            demo: "https://mahmoudbondok.github.io/-Kasper/",
        },
        {
            img: "../../img/project/Leon.png",
            Title: "Leon Template",
            Discription: "Design Using Html and CSS",
            Github: "https://github.com/MahmoudBondok/Leon-Template",
            demo: "https://mahmoudbondok.github.io/Leon-Template/",
        },
        {
            img: "../../img/project/Pizza.png",
            Title: "Pizza Website",
            Discription: "Pizza Landing Page Using HTML and CSS",
            Github: "https://github.com/MahmoudBondok/Pizza-website---Using-React",
            demo: "https://pizza-com.onrender.com",
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
                Projects
            </Typography>
            <Divider sx={{ bgcolor: "#ccc", width: "90px", ml: "10px", mb: '20px' }} />
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {ProArray.map((item, index) => {
                    return (
                        <Card key={index} sx={{ maxWidth: " 300px", m: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.img}
                                    alt=""
                                />
                                <CardContent sx={{ height: "120px", mb: '-35px' }}>
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
                                <Box style={{ textDecoration: 'none' }} component="a" target="_blank" href={`${item.demo}`}>
                                    <Button style={{ textDecoration: 'none' }} size="small" color="primary">
                                        Demo
                                    </Button>
                                </Box>
                                <Box style={{ textDecoration: 'none' }} component="a" target="_blank" href={`${item.Github}`}>
                                    <Button style={{ textDecoration: 'none' }} size="small" color="primary">
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

export default ProjectFullStack;
