import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Habit from "../Pages/Habit/Habit";
import ProgressPage from "../Pages/ProgressPage/ProgressPage";
import SignIn from "../Views/SignIn/SignIn";
import SignUp from "../Views/SignUp/SignUp";
import RequireAuth from "../Contexts/AuthContext/RequireAuth/RequireAuth";
import { useAuth } from "../Contexts/AuthContext/AuthContext";
import Toast from "../Components/Toast/Toast";
import { useData } from "../Contexts/DataContext/DataContext";
const Router = () => {
  const { authState } = useAuth();
  const { data } = useData();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route
          path="/Habit"
          element={
            <RequireAuth>
              <Habit />
            </RequireAuth>
          }
        />
        <Route
          path="/Progress"
          element={
            <RequireAuth>
              <ProgressPage />
            </RequireAuth>
          }
        />
        <Route path="/Auth/Signin" element={<SignIn />} />
        <Route path="/Auth/Signup" element={<SignUp />} />
      </Routes>
      <Toast type={data.toast.toastType} message={data.toast.toastMessage} />
    </>
  );
};

export default Router;
