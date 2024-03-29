import React, { Component, useRef, useEffect } from "react";
//import { TweenMax } from "gsap";
import "./App.scss";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
