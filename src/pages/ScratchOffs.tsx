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
      <h1 style={{textShadow: "none"}}>Scratch Offs</h1>
      <br />
      
      <div style={{ display: "inline-flex" }}>
     
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
     
      </div>
    </>

  );
};

export default ScratchOffs;