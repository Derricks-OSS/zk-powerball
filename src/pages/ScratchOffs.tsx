import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import axios from "axios";
import ScratchCard from 'lesca-react-scratch-card';
import CoverImage from '../img/scratch-off-bg.jpg';
import Cherry from "../img/cherry.png";

const ScratchOffs = () => {

  const getfirstBox = () => {
    axios({
      method: "get",
      url: "https://www.google.com/"
    }).then(response => {
      const { data } = response;
      console.info("data: ", data)
    }).catch(error => {
      console.error("req failed")
    })

  }
  return (
    <>
      <h1>Scratch Offs</h1>
      <br />
      <ScratchCard
            cover={CoverImage}
            percent={50}
            width={225}
            height={225}
            onComplete={() => {
              // ...script
            }}
          >
            <img src={Cherry} alt="cherry"  />
          </ScratchCard>
      <div style={{ display: "inline-flex" }}>
        <Box sx={{ flexGrow: 1, display: "inline-block" }}>
          
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            height: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888",
            backgroundColor: "blue"
          }}
            variant="outlined"><strong></strong></Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            height: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888",
            backgroundColor: "blue"
          }}
            variant="outlined"><strong></strong></Button>
        </Box>
      </div>
    </>

  );
};

export default ScratchOffs;