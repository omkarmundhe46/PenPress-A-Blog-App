import { useEffect } from "react";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import Base from "../components/Base";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log('Signup response:', resp);
        toast.success("User registered successfully! You can now login.");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
        setError({ errors: {}, isError: false });
      })
      .catch((error) => {
        console.error('Signup error:', error);
        
        if (error.response) {
          // Server responded with error
          const errorData = error.response.data;
          if (error.response.status === 400 && errorData) {
            // Validation errors
            setError({
              errors: error,
              isError: true,
            });
            toast.error("Please fix the form errors and try again.");
          } else {
            toast.error(errorData?.message || "Registration failed");
          }
        } else if (error.request) {
          // Network error
          toast.error("Cannot connect to server. Please check if the server is running.");
        } else {
          // Other error
          toast.error("Something went wrong during registration");
        }
      });
  };

  return (
    <Base>
      <div className="min-vh-100 d-flex align-items-center py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} sm={10}>
              <div className="modern-form">
                <div className="modern-form-header">
                  <div className="text-center mb-3">
                    <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-user-plus" style={{ fontSize: '24px', color: 'var(--primary-color)' }}></i>
                    </div>
                  </div>
                  <h3 className="text-center mb-2">Create Account</h3>
                  <p className="text-center mb-0 opacity-75">Join our community of writers and readers</p>
                </div>

                <div className="modern-form-body">
                  <Form onSubmit={submitForm}>
                    <div className="form-group-modern">
                      <Label className="form-label-modern" for="name">
                        <i className="fas fa-user me-2"></i>
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        className="form-control-modern"
                        placeholder="Enter your full name"
                        onChange={(e) => handleChange(e, "name")}
                        value={data.name}
                        invalid={error.errors?.response?.data?.name ? true : false}
                        required
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.name}
                      </FormFeedback>
                    </div>

                    <div className="form-group-modern">
                      <Label className="form-label-modern" for="email">
                        <i className="fas fa-envelope me-2"></i>
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="form-control-modern"
                        placeholder="Enter your email address"
                        onChange={(e) => handleChange(e, "email")}
                        value={data.email}
                        invalid={error.errors?.response?.data?.email ? true : false}
                        required
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.email}
                      </FormFeedback>
                    </div>

                    <div className="form-group-modern">
                      <Label className="form-label-modern" for="password">
                        <i className="fas fa-lock me-2"></i>
                        Password
                      </Label>
                      <Input
                        type="password"
                        id="password"
                        className="form-control-modern"
                        placeholder="Create a strong password"
                        onChange={(e) => handleChange(e, "password")}
                        value={data.password}
                        invalid={error.errors?.response?.data?.password ? true : false}
                        required
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.password}
                      </FormFeedback>
                    </div>

                    <div className="form-group-modern">
                      <Label className="form-label-modern" for="about">
                        <i className="fas fa-info-circle me-2"></i>
                        About Yourself
                      </Label>
                      <Input
                        type="textarea"
                        id="about"
                        className="form-control-modern"
                        placeholder="Tell us a bit about yourself..."
                        style={{ height: "120px", resize: "vertical" }}
                        onChange={(e) => handleChange(e, "about")}
                        value={data.about}
                        invalid={error.errors?.response?.data?.about ? true : false}
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.about}
                      </FormFeedback>
                    </div>

                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label text-muted" htmlFor="terms">
                        I agree to the{' '}
                        <a href="#" className="text-decoration-none" style={{ color: 'var(--primary-color)' }}>
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-decoration-none" style={{ color: 'var(--primary-color)' }}>
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div className="d-grid gap-2">
                      <Button className="btn-primary-modern btn-modern" size="lg">
                        <i className="fas fa-user-plus me-2"></i>
                        Create Account
                      </Button>
                      <Button
                        type="button"
                        onClick={resetData}
                        className="btn-outline-modern btn-modern"
                      >
                        <i className="fas fa-redo me-2"></i>
                        Reset Form
                      </Button>
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-decoration-none fw-bold" style={{ color: 'var(--primary-color)' }}>
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  );
};

export default Signup;
