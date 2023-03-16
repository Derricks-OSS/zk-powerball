import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import axios from "axios";

const ScratchOffs = () => {

  const getfirstBox = () => {
    //   axios.get("https://jsonplaceholder.typicode.com/customers",()=>{

    //   }).then(data: (any: any) => console.log(data.data)).catch(error => console.log(error));
    // };
  }
  return (
    <>
      <h1>Scratch Offs</h1>
      <br />
      <div style={{ display: "inline-flex" }}>
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
            onClick={()=>{console.log("made call")}}
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