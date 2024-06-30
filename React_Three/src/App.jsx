import React from "react";
import Meal from "./components/Meal";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
