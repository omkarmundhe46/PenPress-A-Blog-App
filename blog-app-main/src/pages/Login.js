import { useState } from "react";
import { toast } from "react-toastify";
import {
  Label,
  Col,
  Container,
  Form,
  Input,
  Row,
  Button,
} from "reactstrap";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate, Link } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";

const Login = () => {
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Email and Password are required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log('Login response:', data);
        
        if (!data || !data.token) {
          throw new Error('Invalid response from server');
        }
        
        // Use user data from backend response
        const loginData = {
          token: data.token,
          user: data.user || {
            email: loginDetail.username,
            name: loginDetail.username.includes('@') ? loginDetail.username.split('@')[0] : loginDetail.username
          }
        };

        //save the data to localstorage
        doLogin(loginData, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          userContxtData.setUser({
            data: loginData.user,
            login: true,
          });
          navigate("/user/dashboard");
        });

        toast.success("Login Success");
      })
      .catch((error) => {
        console.error('Login error:', error);
        if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          const message = error.response.data?.message || error.message;
          
          if (status === 400 || status === 401) {
            toast.error("Invalid username or password");
          } else if (status === 404) {
            toast.error("User not found");
          } else {
            toast.error(`Server error: ${message}`);
          }
        } else if (error.request) {
          // Network error
          toast.error("Cannot connect to server. Please check if the server is running.");
        } else {
          // Other error
          toast.error(error.message || "Something went wrong");
        }
      });
  };

  return (
    <Base>
      <div className="min-vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={5} md={7} sm={9}>
              <div className="modern-form">
                <div className="modern-form-header">
                  <div className="text-center mb-3">
                    <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-sign-in-alt" style={{ fontSize: '24px', color: 'var(--primary-color)' }}></i>
                    </div>
                  </div>
                  <h3 className="text-center mb-2">Welcome Back!</h3>
                  <p className="text-center mb-0 opacity-75">Sign in to your account to continue</p>
                </div>

                <div className="modern-form-body">
                  <Form onSubmit={handleFormSubmit}>
                    <div className="form-group-modern">
                      <Label className="form-label-modern" for="email">
                        <i className="fas fa-envelope me-2"></i>
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="form-control-modern"
                        placeholder="Enter your email"
                        value={loginDetail.username}
                        onChange={(e) => handleChange(e, "username")}
                        required
                      />
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
                        placeholder="Enter your password"
                        value={loginDetail.password}
                        onChange={(e) => handleChange(e, "password")}
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label text-muted" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-decoration-none" style={{ color: 'var(--primary-color)' }}>
                        Forgot password?
                      </a>
                    </div>

                    <div className="d-grid gap-2">
                      <Button className="btn-primary-modern btn-modern" size="lg">
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In
                      </Button>
                      <Button
                        type="button"
                        onClick={handleReset}
                        className="btn-outline-modern btn-modern"
                      >
                        <i className="fas fa-redo me-2"></i>
                        Reset Form
                      </Button>
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-decoration-none fw-bold" style={{ color: 'var(--primary-color)' }}>
                          Sign up here
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

export default Login;
