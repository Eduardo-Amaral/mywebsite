import React, {useEffect, useState } from "react";
import {BrowserRouter,Route,useLocation,Routes} from "react-router-dom";
//@ts-ignore
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "pages/Home";
import Projects from "pages/Projects";
import KnowHow from "pages/KnowHow";
import Contacts from "pages/Contacts";
import "./index.css";
//@ts-ignore
import styled from "styled-components";
import Navbar from "components/Navbar";


const Main = styled.main``;

const AnimatedSwitch = () => {
  const location = useLocation();

  console.log("location", location);

  const [transitionName, setTransitionName] = useState("prev");
  useEffect(() => {
    if (transitionName === "next") setTransitionName("prev");
    if (transitionName === "prev") setTransitionName("next");
  }, [location]);
  

  return (
    <TransitionGroup component={Main}>
      <CSSTransition
        key={location.pathname}
        classNames={transitionName}
        timeout={500}
      >
        <Routes location={location}>
        {/* @ts-ignore */}
          <Route exact path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/conhecimentos" element={<KnowHow />} />
          <Route path="/contatos" element={<Contacts />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AnimatedSwitch />
      </BrowserRouter>
    </div>
  );
}
