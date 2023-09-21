import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Signin from "../Pages/Signin/Signin";
import Habit from "../Pages/Habit/Habit";
import ProgressPage from "../Pages/ProgressPage/ProgressPage";
const Router = () => {

    return(
        <>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/SignIn" element={<Signin />} />
         <Route path="/Habit" element={<Habit />} />
         <Route path="/Progress" element={<ProgressPage />} />
        </Routes>
        </>
    )

};

export default Router;