import { bgcolor, borderBottom, Box, padding } from '@mui/system';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Sendmsg = ({ open }) => {
    return (
        <Box sx={{
            position: "fixed",
            right: "10px", top: "50px"
            , bgcolor: "cyan",
            color: "black",
            borderBottom: "6px solid red",
            padding: "15px",
            zIndex: "2",
            borderRadius: "10px",
            display: open
        }}
        >
            <CheckCircleIcon sx={{ color: "orange", mr: "5px" }} />
            Your Message Sent Successfully
        </Box>
    );
}

export default Sendmsg;
