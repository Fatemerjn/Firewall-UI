import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import NavbarComponent from "./Navbar";
import ViewInterfaces from "./interfaces";
import DNSsetting from "./dns"
import StaticRoutes from "./static_routes";
import PolicyRoutes from "./policy_routes";
import Error404 from "./nf404";

import './index.css'

const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <NavbarComponent />
          <Menu />
          <Routes>
            <Route path="" element={<Menu/>} />
            <Route path="/network/interfaces" element={<ViewInterfaces />} />
            <Route path="/network/dns" element={<DNSsetting />} />
            <Route path="/network/static_routes" element={<StaticRoutes/>} />
            <Route path="/network/policy_routes" element={<PolicyRoutes/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
