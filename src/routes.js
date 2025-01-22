import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Cliente from "./Pages/Cliente"; 
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Header from "./component/Header";
import Erro from "./component/Error";
import Produto from "./Pages/Produto";

function AppRouter() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />      
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto/:id" element={<Produto/>}/>
        <Route path="*" element={<Erro/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
