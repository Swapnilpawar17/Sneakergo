import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./About";
import Bucket from "./Bucket";

export default function Home() {
  const [Men, setMen] = useState("notmen");
  const [WoMen, setWoMen] = useState("notWoMen");
  const [Childern, setChildern] = useState("notChildern");
  const settings = {
    //dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 1000, // Set auto-slide speed in milliseconds
  };
  return (
    <>
      <div className=" flex h-200   " style={{ height: 620, marginTop: -9 }}>
        <div
          class=" bg- overflow-auto border border-black  "
          style={{ width: "20%" }}
        >
          <div class="ml-4 mt-4 text-2xl font-bold text-pink-600">FILTERS</div>
          <hr />
          <div class="flex flex-col ml-7 mt-6 ">
            <label class="inline-flex items-center ">
              <input
                type="checkbox"
                class=" h-5 w-6 "
                value={Men}
                onChange={(e) => {
                  Men === "notmen" ? setMen("Men") : setMen("notmen");
                }}
              />
              <span class="ml-4 m-3 ">Men</span>
            </label>
            <label class="inline-flex items-center ">
              <input
                type="checkbox"
                class=" h-5 w-6 "
                value={WoMen}
                onChange={(e) => {
                  WoMen === "notWoMen"
                    ? setWoMen("WoMen")
                    : setWoMen("notWoMen");
                }}
              />
              <span class="ml-4 m-3">Women</span>
            </label>
            <label class="inline-flex items-center ">
              <input
                type="checkbox"
                class=" h-5 w-6 "
                value={Childern}
                onChange={(e) => {
                  Childern === "notChildern"
                    ? setChildern("Childern")
                    : setChildern("notChildern");
                }}
              />
              <span class="ml-4 m-3">All Catagery</span>
            </label>
          </div>
          <hr />

          <div class="ml-4 mt-4 text-2xl font-bold text-pink-600">COLORS</div>
          <hr />
          <div class="flex flex-col ml-7 mt-6 ">
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 text-red-600 text-2xl font-bold">RED</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 text-green-600 text-2xl font-bold">
                GREEN
              </span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 text-slate-400 font-bold text-2xl">
                WHITE
              </span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 text-pink-400 text-2xl">PINK</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 text-gray-800 text-2xl font-bold">
                BLACK
              </span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3  text-blue-600 text-2xl font-bold">
                BLUE
              </span>
            </label>
          </div>
          <hr />
          <div class="ml-4 mt-4 text-2xl font-bold text-pink-600">PRICE</div>
          <hr />
          <div class="flex flex-col ml-7 mt-6 ">
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 ">Rs. 500 to Rs. 800</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3">Rs. 800 to Rs. 2500</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3">Rs. 2500 to Rs. 25500</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3">Rs. 25500 to Rs. 77500</span>
            </label>
          </div>
          <hr />
          <div class="ml-4 mt-4 text-2xl font-bold text-pink-600">
            PROFESSIONALS{" "}
          </div>
          <hr />
          <div class="flex flex-col ml-7 mt-6 ">
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3 ">SOLIDER</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3">STUDENT</span>
            </label>
            <label class="inline-flex items-center ">
              <input type="checkbox" class=" h-5 w-6 " />
              <span class="ml-4 m-3">INFULENCER</span>
            </label>
          </div>
          <hr />
        </div>

        <div
          id="2"
          className=" h-auto w-auto"
          style={{
            width: "80%",
            marginLeft: 1,
          }}
        >
          <About valueMen={Men} valueWoMen={WoMen} valueChildern={Childern} />
        </div>
      </div>
    </>
  );
}

/*<div class="flex-col">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src="./src/components/logo.png"
                    alt="Image 1"
                    className=" h-auto w-auto "
                  />
                </div>
                <div>
                  <img
                    src="./src/components/logo.png"
                    alt="Image 2"
                    className=" h-auto w-auto"
                  />
                </div>
                <div>
                  <img
                    src="./src/components/logo.png"
                    alt="Image 3"
                    className=" h-auto w-"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src="./src/components/logo1.png"
                    alt="Image 1"
                    className=" h-auto w-auto"
                  />
                </div>
                <div>
                  <img
                    src="./src/components/logo1.png"
                    alt="Image 1"
                    className=" h-auto w-auto"
                  />
                </div>
                <div>
                  <img
                    src="./src/components/logo1.png"
                    alt="Image 1"
                    className=" h-auto w-auto"
                  />
                </div>
              </Slider>
            </div>
          </div> */
