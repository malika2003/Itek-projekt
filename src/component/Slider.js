import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import slider from "./slider.css"

const Slider =({openModal}) => {
  return (
    <>
      <Carousel fade className="item">
        <Carousel.Item>
          <img
            style={{ objectFit: "cover" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="buttons">
        <div className="left-button ">
            <button className="consult-btn btn-style">
                Пройти консультатцию
            </button>
        </div>
        <div className="form-button  ">
            <button  onClick={openModal} className="request-btn btn-style" >  
            Оставить заявку 
            </button>
        </div>
      </div>
     
    </>
  )
}

export default Slider;
