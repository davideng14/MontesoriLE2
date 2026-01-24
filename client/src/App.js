import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import { fetchTestData } from './services/api';
import Business from './components/Business/Business';
import Users from './components/Users/Users';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

function App() {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchTestData();
        setApiResponse(res);
      } catch (error) {
        // Handle error appropriately in your UI
        console.error("Failed to fetch data on mount:", error);
        setApiResponse("Failed to load data");
      }
    };
    loadData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Router>
      {/* You might want to display apiResponse somewhere or use it to conditionally render */}
      {/* For example: <p>API Response: {apiResponse}</p> */}
      <Switch>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      
    </Router>
    );
}

export default App;
