import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Login = () => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [errors,seterrors]=useState('');
  const chngemail=(e)=>{  
    setemail(e.target.value);
  }
  const chngpwd=(e)=>{
    setpassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const p1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!p1.test(password)){
      // alert("Minimum 8 characters,Atleast one uppercase letter,Atleast one lowercase letter,Atleast one number,Atleast one special character")
      seterrors('Minimum 8 characters,Atleast one uppercase letter,Atleast one lowercase letter,Atleast one number,Atleast one special character')
    }
   
    else{
      seterrors('Form Submited Successfully');
      setemail('');
      setpassword('');
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
          <h3 style={{color: 'red', alignContent:"center"}}>{errors}</h3>
          <br /><br />
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={chngemail}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={chngpwd}
                  />
                </div>
                {/* <Link to="/Home"> */}
                <button type="submit" className="addTOCart__btn" >
                Login
                </button>
                {/* </Link> */}
                
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;