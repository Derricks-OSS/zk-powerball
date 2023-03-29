import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
// import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

import Layout from "./layout/Layout"
import Routes from "./layout/Routes";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: `https://8545-derricksope-scaffoldeth-yyiqw900tvt.ws-us92.gitpod.io`,
      }),
    }),
  ],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

const App = () => {
  return (
    <WagmiConfig client={client}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </WagmiConfig>
  );
}

export default App;