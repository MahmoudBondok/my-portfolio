import {
  Alert,
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Contact = ({ SidbarWidth, setOpen, setviewSlider }) => {
  const [Name, setName] = useState("");
  const [Email, seEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [Message, setMessage] = useState("");


  const [Err, setErr] = useState("none");
  const navigate = useNavigate();

  const info = [
    { Text: "Email: mahmoudsafwat799@gmail.com", icon: <MailOutlineIcon /> },
    { Text: "WhatsApp : 01102534778", icon: <WhatsAppIcon /> },
  ];

  return (
    <Box
      component="main"
      sx={{ height: "100vh", ml: { md: `${SidbarWidth}px` } }}
      onClick={() => {
        setviewSlider("none")
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" mt="30px">
          Contact Me
        </Typography>

        {info.map((item, index) => {
          return (
            <List key={index} component="nav" aria-label="main mailbox folders">
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={`${item.Text}`} />
              </ListItemButton>
            </List>
          );
        })}

        <Box component="form" sx={{ padding: "10px", width: "320px" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Message Me
          </Typography>
          <Typography textAlign="center" sx={{
            display: Err
          }} >Please Fill The Form To Send Your Message</Typography>
          <Box sx={{ display: "flex" }}>
            <TextField
              sx={{ m: "10px 5px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              onChange={(eo) => {
                setName(eo.target.value);
              }}
            />
            <TextField
              sx={{ m: "10px 5px" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              onChange={(eo) => {
                seEmail(eo.target.value);
              }}
            />
          </Box>
          <TextField
            sx={{ m: "10px 0", width: "100%" }}
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            required
            onChange={(eo) => {
              setsubject(eo.target.value);
            }}
          />
          <TextField
            sx={{ m: "10px 0", width: "100%" }}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            required
            onChange={(eo) => {
              setMessage(eo.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={async (eo) => {
              eo.preventDefault();

              if (Name !== "" && Email !== "" && subject !== "" && Message !== "") {
                console.log("waiting.............");
                // Add a new document in collection "Messages"
                await setDoc(doc(db, "Messages", "msg"), {
                  name: Name,
                  Email: Email,
                  subject: subject,
                  Message: Message,
                });
                navigate("/");
                console.log("done...............");
                setOpen("flex");

                setTimeout(() => {
                  setOpen("none");
                }, 4000);
              }
              if (Name === "" && Email === "" && subject === "" && Message === "") {
                setErr("block")
              }

            }}
            sx={{ m: "10px 5px" }}
            variant="contained"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
