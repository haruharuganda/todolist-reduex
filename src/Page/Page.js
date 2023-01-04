import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import ToDo from "../components/toDoListFrame";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
