import { Button, IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const ViewSlider = ({ setviewSlider, viewSlider }) => {
    return (
        <IconButton
            onClick={() => {
                setviewSlider(viewSlider === "block" ? "none" : "block")
            }}
            sx={{
                position: "absolute",
                bgcolor: "blue",
                right: "15px", top: "10px",
                fontSize: "40px",
                display: { md: "none" }
            }}  >
            <MenuIcon />
        </IconButton>
    );
}

export default ViewSlider;
