import React from 'react';
import { Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.min.css';


const ResetPassword=() =>
{
    return(
        <div>
        <Form className="forget-password">
            <h4> <span className="font-weight-bold">Reset Password</span></h4>
            <br></br>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="password" placeholder="New Password" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="password" placeholder="Confirm Your Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-lg btn-dark btn-block">
         Submit
         </Button>
        </Form>
        </div>

    );
}
export default ResetPassword;