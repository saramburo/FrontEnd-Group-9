import { useState } from "react";

import React from "react";
import About from "./pages/About";
import Eventos from "./pages/Eventos";
import Menu from "./pages/Menu";
import Reservas from "./pages/Reservas";
import Home from "./pages/Home";
import Evento from "./pages/Evento";
import Dia from "./pages/Dia";
import "./App.css";
import Root from "./components/Root";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  NavLink,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="eventos" element={<Eventos />} />

        <Route path="reservas" element={<Reservas />} />

        <Route path="evento" element={<Evento />} />
        <Route path="dia" element={<Dia />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
