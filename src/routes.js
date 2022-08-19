import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home";
import Links from "./Componentes/Links";
import Error from "./Componentes/Error";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Links/>} />
                <Route path="/*" element={<Error/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;