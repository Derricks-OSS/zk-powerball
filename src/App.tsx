import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from "./layout/Layout"
import Routes from "./layout/Routes";

const App = () => {
  return (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
  );
}

export default App;