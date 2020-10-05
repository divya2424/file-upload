import React from "react";
import "./App.css";
import Dashboard from "../../container/Dashboard/Dashboard";
import unregister from "../../interceptor";


const App = () => {
  return (
    <div className="App">
      <h1 className="text-center">File Upload</h1>
      <br />
      <Dashboard />
    </div>
  );
};

export default App;
