import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import  Form from  "../../Components/Form/Form";
import AuthBox from "../../Components/AuthBox/AuthBox";
import { Link, useNavigate, his, useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';

const SignIn = () => {
const {authState ,authDispatch} = useAuth();
const location = useLocation()
const navigate = useNavigate()
const token  = localStorage.getItem("token")
    const SigninHandler =  async (e) => {
        e.preventDefault()
        const result = await axios.post('http://localhost:8000/user/login', {email: authState.email, username: authState.username, password: authState.password}).then((res) => res)
        if(result.data.success === true) {
            console.log(result.data.user)
            localStorage.setItem("token",result.data.token);
            authDispatch({type:"LOGIN", login:true});
            // Use navigate to go to the new route
            navigate('/Habit');
        }
       console.log(result)

    }



  
    return(
        <>
        <AuthBox>
        <div className="box-1">
                <Link to="/Auth/Signup" className='box-round'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='icon-center' />
                </Link>
                <h4 className='box-header'>Login</h4>
                <Link to="/" className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </Link>
        </div>
            <Form handleForm={SigninHandler} authDispatch={authDispatch} />
        </AuthBox>
        </>
    )
}
export default SignIn;