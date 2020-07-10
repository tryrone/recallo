import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  return (
    <React.Fragment>
      <Router>
    <div className="appwrap">
     <Sidebar/>
    <Main/> 
    </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
