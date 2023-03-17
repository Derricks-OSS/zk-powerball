import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const Powerball = () => {
  return (
    <>
      {/* Powerball intake form */}
      <h1>Powerball</h1>
      <br />
      <p style={{margin: "auto"}}>Enter your Powerball number below:</p>
      <br />
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px" }}
      ></input>
      <br />
      <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888"
          }}
            href="/pageone"
            variant="outlined"><strong>Submit</strong></Button>
        </Box>
    </>

  );
};

export default Powerball;