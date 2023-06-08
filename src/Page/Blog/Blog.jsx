import React, { useState, useEffect } from "react";
import "../Blog/Blog.css";
import Dancing from "../../Assets/S-597.gif";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer.jsx";
import { height } from "@mui/system";

function Blog() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="blog">
      <Nav></Nav>
      <div className="blogContent">
        <div className="titul">
          <h1>
            <span>en fase </span>
            <div class="message">
              <div class="word1">de</div>
              <div class="word2">crear</div>
              <div class="word3">el blog</div>
            </div>
          </h1>
        </div>
        <div className="imageDance">
          <img  src={Dancing} alt="" />
        </div>
        <div className="clock">
          <p>{formatTime(time)}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Blog;
