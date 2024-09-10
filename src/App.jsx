import React from "react";
import Home from "./components/Home";
import { Route, Routes,Link, useLocation } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
 
  return (
    <div className="h-screen w-full flex  box-border">
      
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/details/:id" element={<Details />}/>

      </Routes>
    </div>
  );
};

export default App;
