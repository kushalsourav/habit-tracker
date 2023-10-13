import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Form from "../../Components/Form/Form";
import AuthBox from "../../Components/AuthBox/AuthBox";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import useToast from "../../Hooks/useToast";

const SignUp = () => {
  const { authState, authDispatch } = useAuth();
  const postToast = useToast();
  const navigate = useNavigate();
  const signupHandler = async (e) => {
    e.preventDefault();

    const result = await axios
      .post("http://localhost:8000/user/signup", {
        email: authState.email,
        username: authState.username,
        password: authState.password,
      })
      .then((res) => res);

    if (authState.email === " ") {
      postToast("warning", result.data.error);
    }
    if (result.data.success === false) {
      postToast("warning", result.data.message);
    } else {
      postToast("success", "login please");
      navigate("/Auth/Signin");
    }

    console.log("true");
  };

  return (
    <>
      <AuthBox>
        <div className="box-1">
          <Link to="/Auth" className="box-round">
            <FontAwesomeIcon icon={faArrowLeftLong} className="icon-center" />
          </Link>
          <h4 className="box-header">Create your Account</h4>
          <Link to="/" className="box-round">
            <FontAwesomeIcon icon={faXmark} className="icon-center" />
          </Link>
        </div>
        <Form authDispatch={authDispatch} handleForm={signupHandler} />
        <div className="signup-box">
          <p className="signup-text">Already have an account?</p>
          <Link to="/Auth/Signin" className="signup-link">
            Sign in
          </Link>
        </div>
      </AuthBox>
    </>
  );
};
export default SignUp;
