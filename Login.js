import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import FormValidator from './FormValidator';
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert2';
import { GoogleLogin, GoogleLogout } from "react-google-login";
 import Profile from '../user/Profile';
const CLIENT_ID =
  "69593835577-uod70qqj0ab2jojua5g3jf6m6s0j7obn.apps.googleusercontent.com";
  const componentClicked = data => {
    console.log("data", data);
   }

class Login extends Component {
  constructor(){
    super();
    this.validator = new FormValidator([{
      field: 'email',
      method: 'isEmpty',
      validWhen: false,
      message: 'Enter your email address'
      }, {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'Enter valid email address'
      }, ]);
      this.validatorpassword = new FormValidator([{
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your password'
        }, ]);
      this.state = { 
      email: '', 
      password: '', 
      validation: this.validator.valid(),
      validpass: this.validatorpassword.valid()
      }
      this.submitted = false;
      this.submittedpass = false;
      }

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.email,"emaile");
       var email = this.state.email;
       var password = this.state.password;
       
          if(email.length != 0 && password.length != 0){
      fetch('https://rez-castle-app-prd-eastus.azurewebsites.net/api/user')
      .then(response => response.json())
      .then(records => {
          this.setState({
              records: records
          })
          console.log(records,"records")
          let boolstatus=true;
          records.map((item) =>{
            if(item.email == email)
                {
                  boolstatus=false;
                }
          })
            if (!boolstatus)
            {    
              window.location.href = '/Profile'         
            }  
                    
          }).catch((error) =>{
            console.log(error,"Login");           
           
          });
        }
        else
        {
          if(email.length == 0){
            this.setState({ email: event.target.value});
            const validation = this.validator.validate(this.state);
            this.setState({validation });
            this.submitted = true;
          }
          if(password.length == 0){
              this.setState({password: event.target.value}); 
              const validpass = this.validatorpassword.validate(this.state);
        this.setState({validpass});
        this.submittedp = true;   
        }  
      }
    }
    
      handleInputChange = event => {
      event.preventDefault();
      this.setState({ email: event.target.value});
      event.preventDefault();
      const validation = this.validator.validate(this.state);
      this.setState({validation });
      this.submitted = true;
      if(validation.isValid) {
      }
      }
      handleInputChangePass = event => {
        event.preventDefault();
        this.setState({
          password: event.target.value,
    
        });
  
        event.preventDefault();
        const validpass = this.validatorpassword.validate(this.state);
        this.setState({
        validpass
        });
        this.submittedp = true;    
       
        }
        responseGoogleSuccess = (response) => {
          
          let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
          };
          this.setState({ userInfo, isLoggedIn: true });
          console.log(userInfo,"userinfo");
        };
      
        // Error Handler
        responseGoogleError = (response) => {
          console.log(response);
        };
      
        // Logout Session and Update State
        logout = (response) => {
          console.log(response);
          let userInfo = {
            name: "",
            emailId: "",
          };
          this.setState({ userInfo, isLoggedIn: false });
        };
  render() {
    let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
    let validpass = this.submittedp ?this.validatorpassword.validate(this.state) : this.state.validpass
 
    return (
      <section className="form__section">
      <div className="container-fluid h-custom">
      <div className="form_block">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-7 form-left">
            <img src="images/form/form.jpg" className="img-fluid"
              alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-5">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start social-links">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            {/* <a><img src="images/form/facebooksqa.png" alt='' /></a>
            <a><img src="images/form/googlesqa.png" alt='' /></a> */}
     <div className="row mt-1">
        <div className="col-md-12">
          {this.state.isLoggedIn ? (
            <div>
              <h1>Welcome, {this.state.userInfo.name}</h1>
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            
            <GoogleLogin
            clientId={CLIENT_ID}
            render={renderProps => (
              <button onClick={renderProps.onClick} style={{ background: 'white',
              color: 'white',border:'none'}}><img src="images/form/googlesqa.png" alt='' /></button>
            )}
            isSignedIn={true}
               cookiePolicy={"single_host_origin"}
            buttonText="Login"
            onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}        />
          )         
        }
                </div>
      </div>
              </div>
    
              <div className="divider d-flex align-items-center my-4">
          <div className="divide-left"></div>
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
    
        
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" name="email" className="form-control form-control-lg" onChange={this.handleInputChange} onClick={this.handleInputChange} maxLength="250"
                  placeholder="Email Address" />
         <span className="text-danger">{validation.email.message}</span>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" name="password" className="form-control form-control-lg" onChange={this.handleInputChangePass} onClick={this.handleInputChangePass} maxLength="100"
                  placeholder="Password" />
                   <span className="text-danger">{validpass.password.message}</span>
              </div>
    
              <div className="d-flex justify-content-between align-items-center">
            
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <NavLink to='/ForgotPassword'>Forgot password?</NavLink>
              </div>
    
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-lg" onClick={this.handleFormSubmit}
                 style={{paddingleft: '2.5rem', paddingright: '2.5rem'}}>Login</button>
                <p className="small mt-2 pt-1 mb-0">Don't have an account?<NavLink to='/Signup'>Register</NavLink></p>
              </div>
    
            </form>
          </div>
        </div>
      </div>
      </div>
     
    </section>
    );
  }
}

export default Login;