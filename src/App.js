import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Subscriptions from "./components/Subscriptions";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/subscriptions" element={<Subscriptions/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
