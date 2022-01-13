import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
//import UserContext from "./contexts/UserContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Subscriptions from "./components/Subscriptions";
import Home from "./components/Home";

import Plan from "./components/Plan";

export default function App(){

    const [token, setToken] = useState([]);

    // <UserContext.Provider value={{ token, setToken }}>
    //     </UserContext.Provider>
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/subscriptions" element={<Subscriptions/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/plano" element={<Plan/>}></Route>
                </Routes>
            </BrowserRouter>
    );
}
