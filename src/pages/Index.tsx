import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import CountdownBanner from "../components/CountdownBanner";


const Index = () => {
  return (
    <>
      <br />
      <h1>Jackpot: 38.976 ETH</h1>
      <br />
<CountdownBanner></CountdownBanner>
      <br />
      <img src="https://cdn.dribbble.com/users/23438/screenshots/3107987/loto-icon.gif" alt="img" />{/* height="200vw" width="200vh"*/}
      <p style={{ margin: "auto" }}>Buy a Powerball ticket for this drawing or purchase a scratch-off for a chance at instant winnings.</p>
      <br />
      <div>
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
            variant="outlined"><strong>Buy Ticket</strong></Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888"
          }}
            href="/pagetwo"
            variant="outlined"><strong>Buy Scratch-Off</strong></Button>
        </Box>
      </div>
    </>

  );
};

export default Index;