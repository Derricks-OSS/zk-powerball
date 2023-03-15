import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const ScratchOffs = () => {
  return (
    <>
    <h1>Scratch Offs</h1>
    <br />
    <div style={{display: "inline-flex"}}>
    <Box sx={{ flexGrow: 1, display: "inline-block" }}>
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
            href="/pageone"
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
            href="/pageone"
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
            href="/pageone"
            variant="outlined"><strong></strong></Button>
        </Box>
        </div>
    </>

  );
};

export default ScratchOffs;