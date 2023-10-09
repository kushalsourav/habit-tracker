import {useAuth} from "../../Contexts/AuthContext/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import  Form from  "../../Components/Form/Form";
import AuthBox from "../../Components/AuthBox/AuthBox";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import axios from "axios";

const SignUp = () => {
const {authState, authDispatch} = useAuth()
console.log(authState)
const navigate = useNavigate()
const signupHandler = async (e) => {
    e.preventDefault();

   const result = await axios.post('http://localhost:8000/user/signup', {email: authState.email, username: authState.username, password: authState.password}).then((res) => res)
   if(result.status === 200) {
         navigate("/Auth/Signin")
        console.log("true")
   }
}

    return(
        <>
        <AuthBox>
        <div className="box-1">
                <Link to="/Auth" className='box-round'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='icon-center' />
                </Link>
                <h4 className='box-header'>Create your Account</h4>
                <Link to="/" className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </Link>
        </div>
            <Form authDispatch={authDispatch} handleForm={signupHandler} />
           <div className="signup-box">
           <p className='signup-text'>Already have an account?</p><Link to="/Auth/Signin" className='signup-link'>Sign in</Link>
            </div>
        </AuthBox>
        </>
    )
}
export default SignUp;