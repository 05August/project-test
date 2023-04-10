import React, { useEffect, useState } from "react";
import banner_1 from "../assets/img/banner_1.png";
import banner_2 from "../assets/img/banner_2.png";
import {
  DATA_MEMBER,
  DATA_POPULAR,
  DATA_SILDE,
  SETTING_SLIDE,
  SETTING_SLIDE_MOBILE,
} from "../constants/constants";
import Popular from "../components/Popular";
import Member from "../components/Member";
import Slider from "react-slick";

const renderPopular = () => {
  return DATA_POPULAR.map((data, index) => {
    return <Popular data={data} key={`popular-${index}`} />;
  });
};

const renderMember = () => {
  return DATA_MEMBER.map((data, index) => {
    return <Member data={data} key={`popular-${index}`} />;
  });
};
const Home = () => {
  return (
    <main className="homepage">
      <section className="banner">
        <img src={banner_1} alt="banner" />
      </section>
      <section className="video">
        <div className="video-container">
          <img src={banner_2} alt="banner2" />
          <h3>Reach More Customers</h3>
          <div className="button">
            <a href="#">LEARN HOW</a>
          </div>
        </div>
      </section>
      <section className="popular-new ">
        <h1 className="title">All the popular news </h1>
        <div className=" popular-container container-section">{renderPopular()}</div>
        <div className="mobile-slide">
          <Slider {...SETTING_SLIDE_MOBILE}>{renderPopular()}</Slider>
        </div>
      </section>

      <section className="member">
        <h1 className="title">
          All the <br />
          co-founding members
        </h1>
        <div className=" member-container container-section">{renderMember()}</div>
        <div className="mobile-slide">
          <Slider {...SETTING_SLIDE_MOBILE}>{renderMember()}</Slider>
        </div>
      </section>

      <section className="learn">
        <h1 className="title">
          Learn how others are reaching their audience easier than ever before.
        </h1>

        <form action="send-email">
          <span style={{ position: "relative" }}>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
            <div className="text">Thanks! Email received.</div>
          </span>

          <label htmlFor="email"></label>

          <button type="button"> Join our list</button>
        </form>
      </section>

      <section className="brand">
        <h1 className="title">All the best brands already use us.</h1>

        <div className="slide">
          <Slider {...SETTING_SLIDE}>
            {DATA_SILDE.map((item) => {
              return <img src={item} alt="logobrand" key={item} />;
            })}
          </Slider>
        </div>

        <div className="brandlist">
          {DATA_SILDE.map((item, index) => {
            return index < 5 && <img src={item} alt="logobrand" key={item} />;
          })}
        </div>
      </section>

      <section className="start">
        <h1>Get started today!</h1>
        <a>PICK A PLAN</a>
      </section>
    </main>
  );
};

export default Home;
