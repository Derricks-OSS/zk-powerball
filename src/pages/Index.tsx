import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Fragment, useEffect, useRef } from "react";
import GraphicBackground from "../components/GraphicBackground";

const wallet = false; // TODO: remove this is just for testing
const Index = () => {

  return (
    <>
      <br />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "45%",
        display: "inline"
      }}>
        {!wallet
          ? <>
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: 225,
                backgroundColor: "#1976d2",
                borderColor: "black",
                color: "white",
                borderRadius: 0,
                boxShadow: "5px 10px #333333"
              }}
                href="/pageone"
                variant="outlined"><strong>Connet Wallet</strong></Button>
            </Box>
          </>
          : <>
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: 225,
                borderColor: "black",
                borderRadius: 0,
                color: "white",
                backgroundColor: "#1976d2",
                margin: "1em",
                boxShadow: "5px 10px #333333"
              }}
                href="/pageone"
                variant="outlined"><strong>Buy Ticket</strong></Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: 225,
                borderColor: "black",
                backgroundColor: "#1976d2",
                color: "white",
                borderRadius: 0,
                margin: "1em",
                boxShadow: "5px 10px #333333"
              }}
                href="/pagetwo"
                variant="outlined"><strong>Buy Scratch-Off</strong></Button>
            </Box>
          </>
        }

      </div>
      <GraphicBackground></GraphicBackground>
    </>

  );
};

export default Index;