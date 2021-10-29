import React from "react";
import { DatePicker } from "antd";
import './App.scss';

function App() {

  const test = (date,dateString) => {
    console.log(date,dateString);
  }

  return (

    <div className="app">

     <h1>Revolver Web App</h1>
     <h2>Project</h2>
     <DatePicker onChange={test} />

    </div>
  );
}

export default App;
