import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.page";
import Ninjas from "../pages/ninjas/Ninjas.page";
import RQNinjas from "../pages/rq-ninjas/RQNinjas.page";

const Router = () => {
  return (
    <Routes>
      <Route path="/ninjas" element={<Home />} />
      <Route path="/ninjas" element={<Ninjas />} />
      <Route path="/ninjas" element={<RQNinjas />} />
    </Routes>
  );
};

export default Router;
