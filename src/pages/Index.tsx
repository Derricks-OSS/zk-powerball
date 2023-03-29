import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Fragment, useEffect, useRef, useState } from "react";
import GraphicBackground from "../components/GraphicBackground";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
// const provider = new ethers.JsonRpcProvider('https://8545-derricksope-scaffoldeth-yyiqw900tvt.ws-us92.gitpod.io');
const wallet = false; // TODO: remove this is just for testing
const Index = () => {

  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  console.log("address: ", address);

  return (
    <>
      <br />
      <div style={{
        position: "absolute",
        top: "50%",
        margin: "auto",
        width: "100%"
      }}>
        {!isConnected
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
                onClick={() => { connect(); console.log("connected: ", isConnected) }}
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