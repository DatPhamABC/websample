import React from "react";
import TopNav from "./js/TopNav";
import BotNav from "./js/BotNav";
import Login from "./js/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <BotNav></BotNav>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
