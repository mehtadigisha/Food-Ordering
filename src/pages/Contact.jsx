import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet.js";

const Contact = () => {
  function onsubt(){
    alert("Your Feedback is submitted Successfully!!\nWe will reach you soon")
  }
  return (
    <Helmet title='Contact'>
    <div>
      <h1 style={{ marginTop: 30, marginLeft: 400 }}>
        <span>We would love to hear from you!</span>
      </h1>
      <br />
      <br />

      <div className="container" style={{marginTop:5}}>
        <form className="row g-2" action="" onSubmit={onsubt}>
          <div className="row-md-5">
            <select className="form-select row-5">
              <option selected>--Choose--</option>
              <option value="1">I need help with my app online order</option>
              <option value="2">
                I found incorrect/outdated information on a page
              </option>
              <option value="3">
                There is a photo/review that is bothering me and I would like to
                report it
              </option>
              <option value="4">
                The website are not working the way they should{" "}
              </option>
              <option value="5">
                I would like to give feedback/suggestion
              </option>
              <option value="6">I need help with my blog</option>
              <option value="7">Other</option>
            </select>
          </div>
          <div className="row-md-5">
            <input type="text" className="form-control" placeholder="Full Name" required validated />
          </div>
          <div className="row-md-5">
            <input type="email" className="form-control" placeholder="Email" required validated />
          </div>
          <div className="row-md-5">
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number(optional)"
            />
          </div>
          <div className="row-5">
            <textarea 
            rows={5} cols={5}
              type="text"
              class="form-control"
              placeholder="Type text"
              required
              validated
            />
          </div>
          <br />
          <div className="row-md-5">
            {/* <button type="submit" className="btn btn-primary">
              Submit Feedback
            </button> */}
            <button className="btn btn-danger" type="submit">Submit Feedback    
            </button>
            <button className="btn btn-danger" type="submit" style={{marginInline:5}}>
            <Link to="/Home">Home</Link>
            </button>
            
          </div>
        </form>
      </div>
    </div>
    </Helmet>
  );
};

export default Contact;