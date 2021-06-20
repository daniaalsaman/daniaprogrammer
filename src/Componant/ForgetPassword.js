import React from 'react';
import { Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.min.css';


const ForgetPassword=() =>
{
    return(
        <div>
        <Form className="forget-password">
            <h4> <span className="font-weight-bold">Forgot Password</span></h4>
            <br></br>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email Adress" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-lg btn-dark btn-block">
            Send Email
         </Button>
        </Form>
        </div>

    );
}
export default ForgetPassword;