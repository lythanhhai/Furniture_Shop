import React from "react";
import { useState, useEffect } from "react";
import Banner_Left from "../Container/Banner_Left";
import Banner_Right from "../Container/Banner_Right";
import "../Asset/Banner/Banner.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const [imageCurrent, setImageCurrent] = useState(0);
  const handleLeft = () => {
    let indexCurrent = imageCurrent - 1;
    if (indexCurrent === -1) {
      indexCurrent = 3;
    }
    setImageCurrent(indexCurrent);
  };
  const handleRight = () => {
    let indexCurrent = imageCurrent + 1;
    if (indexCurrent === 4) {
      indexCurrent = 0;
    }
    setImageCurrent(indexCurrent);
  };
  const handleBottom = (index) => {
    let indexCurrent = index;
    setImageCurrent(indexCurrent);
  };
  useEffect(() => {
    // setInterval(() => {
    //     let indexCurrent = imageCurrent + 1;
    //     if(indexCurrent === 4)
    //     {
    //         indexCurrent = 0;
    //     }
    //     if(indexCurrent === -1)
    //     {
    //         indexCurrent = 3;
    //     }
    //     setImageCurrent(indexCurrent);
    // }, 5000)
  });
  return (
    <section className="Banner">
      <Banner_Left imageCurrent={imageCurrent} />
      <Banner_Right imageCurrent={imageCurrent} />
      <button
        type="button"
        className="Banner__arrowLeft"
        onClick={() => {
          handleLeft();
        }}
      >
        <FaAngleLeft />
      </button>
      <button
        type="button"
        className="Banner__arrowRight"
        onClick={() => {
          handleRight();
        }}
      >
        <FaAngleRight />
      </button>
      <ul>
        <li
          onClick={() => {
            handleBottom(0);
          }}
        >
          <p>1</p>
          <div className={imageCurrent === 0 ? "indexSlider" : ""}></div>
        </li>
        <li
          onClick={() => {
            handleBottom(1);
          }}
        >
          <p>2</p>
          <div className={imageCurrent === 1 ? "indexSlider" : ""}></div>
        </li>
        <li
          onClick={() => {
            handleBottom(2);
          }}
        >
          <p>3</p>
          <div className={imageCurrent === 2 ? "indexSlider" : ""}></div>
        </li>
        <li
          onClick={() => {
            handleBottom(3);
          }}
        >
          <p>4</p>
          <div className={imageCurrent === 3 ? "indexSlider" : ""}></div>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(Banner);
