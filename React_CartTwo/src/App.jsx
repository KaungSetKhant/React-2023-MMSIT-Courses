import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Addtocart from "./components/Addtocart";
import Search from "./components/Search";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
