import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import CountdownBanner from "../components/CountdownBanner";

const Powerball = () => {
  return (
    <>
      {/* Powerball intake form */}
      <h1 style={{ textShadow: "none" }}>Powerball</h1>
      <br />
      <h1 style={{ textShadow: "none" }}>Jackpot: 38.976 ETH</h1>
      <br />
      <CountdownBanner></CountdownBanner>
      <br />
      {/* <img src="https://cdn.dribbble.com/users/23438/screenshots/3107987/loto-icon.gif" alt="img" /> */}
      <p style={{ margin: "auto", textShadow: "none" }}>Buy a Powerball ticket for this drawing or purchase a scratch-off for a chance at instant winnings.</p>
      <br />
      <p style={{margin: "auto", textShadow: "none"}}>Enter your Powerball number below:</p>
      <br />
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <input
        type="number"
        name="powerball-input"
        style={{ height: "75px", width: "100px", margin: "10px 10px 10px 10px", fontSize: "64px", textShadow: "none" }}
      ></input>
      <br />
      <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888",
            textShadow: "none"
          }}
            href="/pageone"
            variant="outlined"><strong>Submit</strong></Button>
        </Box>
    </>

  );
};

export default Powerball;