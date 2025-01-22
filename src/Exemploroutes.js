import React from "react"; 
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Cliente from "./Pages/Cliente";
import Fornecedor from "./Pages/Fornecedor";
import Home from "./Pages/Home";

function RoutesApp(){

    return(
       
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cliente" element={<Cliente/>}/>
                    <Route path="/fornecedor" element={<Fornecedor/>}/>
                </Routes>             
            </BrowserRouter>

    )
}


export default RoutesApp;