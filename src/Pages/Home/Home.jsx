import { Link } from "react-router-dom";
import { Linear, SteppedEase, gsap } from "gsap";
import {
  Power2,
  Sine,
  Back,
  Elastic,
  Bounce,
  Rough,
  SlowMo,
  Stepped,
  Power4,
} from "gsap";
import CustomEase from "gsap/CustomEase";
import "./Home.css";
import basketBall from "../../Assets/img/basketball.png";
import book from "../../Assets/img/book.png";
import alarm from "../../Assets/img/alarm.png";
import vase from "../../Assets/img/flowers.png";
import apple from "../../Assets/img/apple.png";
import mug from "../../Assets/img/mug.png";
import sneakers from "../../Assets/img/sneakers.png";
import bottle from "../../Assets/img/bottle.png";
import { useEffect, useState } from "react";
const Home = () => {
  const [state, setState] = useState(false);
  gsap.registerPlugin(CustomEase);

  CustomEase.create("slantCurve", "0,0,1,1");
  useEffect(() => {
    // Scroll animation using GSAP
    let tl = gsap.timeline();
    tl.to(".home", {
      duration: 2,
      opacity: 1,
    })
      .to(".home-header", { duration: 3, opacity: 1, x: 100 })
      .to(".bottle", { duration: 3, opacity: 1, y: 425, ease: Elastic.easeOut })
      .to(".basket-ball", {
        duration: 2,
        opacity: 1,
        y: 400,
        ease: Bounce.easeOut,
      })
      .to(".book", { duration: 0.5, y: 410, opacity: 1, ease: Linear.easeIn })
      .to(".alarm", { duration: 0.5, opacity: 1, y: 410, ease: Power4.easeIn });
  }, []);

  return (
    <>
      <div className="home">
        <h1 className="home-header">Be Better</h1>
        <img src={bottle} alt="bottle" className="index bottle" />
        <img src={basketBall} alt="basketball" className="index basket-ball" />
        <img src={book} alt="book" className="index book" />
        <img src={alarm} alt="alarm" className="index alarm" />
        <div className="home-footer">
          <img src={vase} alt="flower vase" className="index vase" />
          <img src={apple} alt="apple" className="index apple" />
          <img src={mug} alt="mug" className="index mug" />
          <img src={sneakers} alt="sneakers" className="index sneakers" />
          <div className="block-1"></div>

          <button className="btn-getStarted">
            <Link to="/Auth" className="link">
              Get Started
            </Link>
          </button>
          <div className="block-2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
