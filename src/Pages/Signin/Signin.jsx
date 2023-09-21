import './Signin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import svgzigzag from "../../Assets/img/box-1-zigzag.svg"; 
import svgtri from "../../Assets/img/box-3-tri.svg";

const Signin = () => {
    
    return(
        <>
        <div className="sigin-box">
            <div className="box-1">
                <div className='empty-div'></div>
                <h4 className='box-header'>Get started</h4>
                <div className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </div>
            </div>
            <div className="box-2">
               <span className='polygon-1'></span>
               <span className='polygon-2'></span>
               <span className='polygon-3'></span>
               <p className='signin-text text-1'>Get Started as a guest</p>
               <div className='box-round signin-btn-1 signin-btn-pos'>
                <FontAwesomeIcon icon={faArrowRightLong} className='icon-center' />
                </div>
            </div>
            <div className="box-3">
              <img src={svgzigzag} alt='svg' className='svg-zigzag' />
              <img src={svgtri} alt='svg' className='svg-tri' />
              <p className='signin-text text-2'>Sign in or join</p>
              <div className='box-round signin-btn-2 signin-btn-pos'>
                <FontAwesomeIcon icon={faArrowRightLong} className='icon-center' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin;