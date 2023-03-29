import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import axios from "axios";
import ScratchCard from "react-scratchcard-v2";
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
        <Box>
      <ScratchCard
        width={225}
        height={225}
        image={CoverImage}
        finishPercent={75}
        onComplete={() => alert('complete')}
      >
        <img src={Cherry} alt="cherry"  />
      </ScratchCard>
      </Box>
      {/* <ScratchCard
        width={225}
        height={225}
        image={CoverImage}
        finishPercent={75}
        onComplete={() => alert('complete')}
      >
        <img src={Cherry} alt="cherry"   />
      </ScratchCard>
      <ScratchCard

        width={225}
        height={225}
        image={CoverImage}
        finishPercent={75}
        onComplete={() => alert('complete')}
      >
        <img src={Cherry} alt="cherry"  />
      </ScratchCard> */}
      </div>
    </>

  );
};

export default ScratchOffs;