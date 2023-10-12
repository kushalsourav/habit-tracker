import { Link} from "react-router-dom";
import { SteppedEase, gsap } from 'gsap';
import { Power2, Sine, Back, Elastic, Bounce, Rough, SlowMo, Stepped, Power4 } from 'gsap';
import './Home.css';
import basketBall from '../../Assets/img/basketball.png';
import book from '../../Assets/img/book.png';
import alarm from '../../Assets/img/alarm.png';
import vase from '../../Assets/img/flowers.png';
import apple from '../../Assets/img/apple.png';
import mug from '../../Assets/img/mug.png';
import sneakers from '../../Assets/img/sneakers.png';
import bottle from '../../Assets/img/bottle.png';
import { useEffect } from "react";
const Home = () => {


    useEffect(() => {
      // Scroll animation using GSAP
      gsap.to('.home-header', {
        opacity: 1,
        y: 0,
        duration: 1,
      });
      gsap.to(".home-header", { duration: 3, x: 100 })
      gsap.to(".bottle", {duration:3,opacity:1, y:425, ease:Bounce.easeOut})
      gsap.to(".sneakers", {
        opacity: 1,
        duration: 3,
        x:-800,
        ease:Power4.easeOut
      })
    }, []);


return(
    <>
    <div className='home'>

      <h1 className='home-header'>Be Better</h1>
         <img src={bottle} alt="bottle" className='index bottle' />
      <div className="home-footer">
      <img src={basketBall} alt="basketball" className='index basket-ball' />
      <img src={book} alt="book" className='index book' />
      <img src={alarm} alt="alarm" className='index alarm' />
      <img src={vase} alt="flower vase" className='index vase' />
      <img src={apple} alt="apple" className='index apple' />
      <img src={mug} alt="mug" className='index mug' />
      <img src={sneakers} alt="sneakers" className='index sneakers' />
      <div className='block-1'></div>

      <button className='btn-getStarted'><Link to='/Auth' className="link" >Get Started</Link></button>
      <div className="block-2"></div>
      </div>
    </div>
     

    
    </>
)
}

export default Home;