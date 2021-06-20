import React from 'react';
import { Form,Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton} from 'react-social-login-buttons';
import 'materialize-css/dist/css/materialize.min.css';


const Signup=() =>
{
    return (
    <div>
         <Form className="login-form">
         <h3> <span className="font-weight-bold">Sign Up </span></h3>
            <br></br>
            <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstname">
      <Form.Control placeholder="Fist Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastname">
      <Form.Control  placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridEmail">
    <Form.Control  type="email" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group controlId="formGridPassword">
    <Form.Control  type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formGridConfirmPassword">
    <Form.Control  type="password" placeholder="Confirm Your Password" />
  </Form.Group>

  <Form.Row>
    
    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Control placeholder="Enter Your Phone">
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit" className="btn-lg btn-dark btn-block">
    Sign Up
  </Button>
  <div className="text-center pt-3">Or Log In with your social account</div>
       <div> <FacebookLoginButton  className="mt-3 mb-3"/></div>
      <div>  <GoogleLoginButton    className="mt-3 mb-3"/></div> 
       <div> <LinkedInLoginButton className="mt-3 mb-3"/></div>
       </Form>

    </div>
    );
}
export default Signup;