import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from "./components/Login";
import Register from "./components/Register";
import Subscriptions from "./components/Subscriptions";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Plan from "./components/Plan";

import UserContext from "./contexcts/UserContext";

export default function App(){
    const [showModal, setShowModal] = useState(false);

    const [idPlan, setIdPlan] = useState('');
    const [name, setName] = useState('');
    const [membership, setMembership] = useState([]);
    const [token, setToken] = useState('');

    return(
        <UserContext.Provider value={{idPlan, setIdPlan, name, setName, membership, setMembership, token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/subscriptions" element={<Subscriptions/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/home2" element={<Home2/>}></Route>
                    <Route path="/plano/:idPlan" element={<Plan showModal={showModal} setShowModal={setShowModal} />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
