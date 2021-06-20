import React from 'react';
import { Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton} from 'react-social-login-buttons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';



function Login() {
  const handlesubmite=(e)=>
  {
     e.preventDefult();
  const data={
  email:this.email,
  password:this.password
}
   axios.post('http://172.21.15.184:3000/login',data)
   .then(res=>{
     console.log(res)
   })
   .catch(
     err=>{
       console.log(err)
     }
   )
  }
    return (
        <div>
        <Form className="login-form">
            <h3> <span className="font-weight-bold">Sign in </span></h3>
            <br></br>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit" className="btn-lg btn-dark btn-block">
          Sign in
        </Button>
        <div className="text-center pt-3">Or continue with your social account</div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <GoogleLoginButton className="mt-3 mb-3" />
        <LinkedInLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
            <Link to="/sign-up">Sign up</Link>
            <span className="p-2">|</span>
            <Link to="/forget-password">Forget Password</Link>
        </div>
      </Form>
      </div>
    );
  }
  
  export default Login;
  