import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hometakeoutimage.jpeg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import "../styles/home.css";
import dal_makhani from "../assets/Healthy/dal_makhani.jpg";
import date from '../assets/Healthy/date-and-walnut-balls.png';
import crispy from '../assets/Healthy/crispy-potato-tacos.jpg';
import dumplings from '../assets/Healthy/turkey-carrot-mushroom-dumplings.jpg';
import pavbhaji from '../assets/Unhealthy/pavbhaji.png';
import frechfries from '../assets/Unhealthy/frenchfries.png';
import cholepuri from '../assets/Unhealthy/cholepuri.jpg';
import chicken from '../assets/Unhealthy/chickennuggets.jpg';

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.jpg";
import featureImg03 from "../assets/images/service-03.png";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "food delivery fast and reliable and get delivered at deliivery time and location any day, any time",
  },

  {
    title: "100% quality",
    imgUrl: featureImg02,
    desc: "We provide quality food for you and your loved ones for health and so onnnnnn and for wellness",
  },
  {
    title: "Easy Order",
    imgUrl: featureImg03,
    desc: "Order food at a single click and select all food to order at any poin in time and at ease and comfort",
  },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY OR LAZY?</span> <br /> Just want food at<br/>
                  <span> your door</span>
                </h1>

                <p>
                Helping you enjoy comfortable and healthy food anywhere and anytime on the go 
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/foods">Order</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Away from Home?
                Missing that mummy wala kana?
              </p>
              <p className="feature__text">
                Then What for waiting Just Order and enjoy ghare vala Kana{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 style={{color:'red'}}>Popular Foods</h2>
              <br /><br />
            </Col>
            <Link to='/foods'>
              <Row>
              <Col lg="3" md="4" sm="6" xs="6" className="mb-5">
                <img src={dal_makhani} alt="sorry" width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={pavbhaji} alt="sorry"  width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={cholepuri} alt="sorry"  width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={date} alt="sorry"  width={250} height={250}/>
            </Col>
              </Row>
              <Row>
              <Col lg="3" md="4" sm="6" xs="6" className="mb-5">
                <img src={chicken} alt="sorry" width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={dumplings} alt="sorry"  width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={crispy} alt="sorry"  width={250} height={250}/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <img src={frechfries} alt="sorry"  width={250} height={250}/>
            </Col>
              </Row>
            </Link>
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>TakeOut Express?</span>
                </h2>
                <p className="tasty__treat-desc">
                With our app, you never have to settle for unhealthy, expensive takeaway food again. 
                From spicy noodles to fresh salads, we'll deliver anywhere in your city. 
                Get tasty meals in just 30 minutes. It's simple. 
                We make it easy for you to make smart business decisions fast. 
                Whether you have a busy schedule or just want enjoy home-cooked food,
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  This is what our client are saying
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
