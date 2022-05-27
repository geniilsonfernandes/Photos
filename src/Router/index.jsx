import React from "react";
import { Home } from "../pages/Home";
import { Photos } from "../pages/Photos";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos/:id" element={<Photos />} />
    </Routes>
  );
};
