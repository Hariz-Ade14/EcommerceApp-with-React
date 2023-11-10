import React , {useState} from "react";
import {Container , Row , Col , Form , FormGroup } from "reactstrap";
import { Link } from "react-router-dom";


const Login = () => {
      const [inputs , setForm] = useState({});

      const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setForm((prev) => ({...prev , [name] : value}));
      }

      const handleSubmit = (e) => {
            // e.preventDefault();
            setForm({mail: "" , password :""});
      }

      return (
          <div className="bg-dange" style={{marginTop:"100px"}}>
              <Container>
                   <Row>
                       <Col lg="6" className="m-auto text-center">
                            <h3>Login</h3>

                            <Form onSubmit={handleSubmit} className="auth_form mt-5">
                                  <FormGroup className="form_group">
                                       <input type="email" name="mail" value={inputs.mail} className="w-75" onChange={handleChange} placeholder="Email"/>
                                  </FormGroup>
                                  <FormGroup className="form_group">
                                       <input type="password" name="password" value={inputs.password} className="w-75" onChange={handleChange} placeholder="Password"/>
                                  </FormGroup>
                                  <button className="btn btn-primary auth_btn mb-5">Login</button>
                                  <p>Don't have an account? <Link to="/signUp">Create an account</Link></p>
                            </Form>
                       </Col>
                   </Row>
              </Container>
          </div>
      )
}

export default Login;