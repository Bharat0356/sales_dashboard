import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Dashboard1 from "./Component/Dashboard1";
import Dashboard2 from "./Component/Dashboard2";
import "./App.css";

const App = () => (
<div>
 <Router>
    <div>
      <h1>Sales Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard1">Today's Sales</Link></li>
          <li><Link to="/dashboard2">Sales Comparison</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/" element={
          <div>
            <h2>Welcome to the Sales Dashboard</h2>
            <p>Use the links to navigate to the dashboards.</p>
          </div>
        } />
      </Routes>
    </div>
  </Router>
  </div>
);

export default App;
