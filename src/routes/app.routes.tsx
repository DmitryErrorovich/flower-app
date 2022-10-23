import React from "react";
import { Route, Routes } from "react-router-dom";

export const routes = () => (
  <Routes>
    <Route path="/" />
    <Route path="/Example" element={<div>EXAMPLE</div>} />
  </Routes>
);

export default routes;
