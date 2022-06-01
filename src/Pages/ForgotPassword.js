import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import FormValidator from './FormValidator'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert2';

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
        // axios({
        //     method: 'Get',
        //     headers: {'Content-Type': 'application/json; charset=utf-8',
        //            'Authorization': '776d91d9-7648-4619-9c7a-a6bc7ff22b86'},
        //     url: 'https://rez-castle-app-prd-eastus.azurewebsites.net/api/user/' + this.state.email + '/' + this.state.password,
           
        //   })
          if(email.length !== 0 && password.length !== 0){
      fetch('https://rez-castle-app-prd-eastus.azurewebsites.net/api/user')
      .then(response => response.json())
      .then(records => {
          this.setState({
              records: records
          })
          console.log(records,"records")
          let boolstatus=true;
          records.map((item) =>{
            if(item.email === email)
                {
                  boolstatus=false;
                }
          })
           console.log(email, records[0]["email"]);
            if (!boolstatus)
            {
              // confirmAlert({
              //   title: 'Login Successfully',
              //   message: '',
              //   buttons: [
              //     {
              //       label: 'Yes',
                 
              //     },
                 
              //   ]
              // });

              swal.fire(
                'Login',
                'Login successfully',
                'success'
              )
            }
            else{
              // confirmAlert({
              //   title: 'Email id is invalid',
              //   message: '',
              //   buttons: [
              //     {
              //       label: 'Yes',
                 
              //     },
                 
              //   ]
              // });

              swal.fire(
                'Email id is invalid',
                '',
                'error'
              )
            }
          }).catch((error) =>{
            console.log(error,"thasim");
            // confirmAlert({
            //   title: 'Email or password incorrect',
            //   message: '',
            //   buttons: [
            //     {
            //       label: 'Yes',
                  
            //     },
               
            //   ]
            // });

            swal.fire(
              'Email or password incorrect',
              '',
              'error'
            ) 
          });
        }
        else if(email.length === 0 && password.length === 0){
          // confirmAlert({
          //   title: 'Enter the email and password',
          //   message: '',
          //   buttons: [
          //     {
          //       label: 'Yes',
                
          //     },
             
          //   ]
          // });

          swal.fire(
            'Enter the email and password',
            '',
            'error'
          )
        }
        else if(email.length === 0){
          // confirmAlert({
          //   title: 'Enter the email',
          //   message: '',
          //   buttons: [
          //     {
          //       label: 'Yes',
                
          //     },
             
          //   ]
          // });

          swal.fire(
            'Enter the email',
            '',
            'error'
          )
        }
        else if(password.length === 0){
          // confirmAlert({
          //   title: 'Enter the password',
          //   message: '',
          //   buttons: [
          //     {
          //       label: 'Yes',
                
          //     },
             
          //   ]
          // });

          swal.fire(
            'Enter the password',
            '',
            'error'
          )
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
    
        if(validpass.isValid) {
        //reaches here if form validates successfully...
        }
        }
  render() {
   // let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
    //let validpass = this.submittedp ?this.validatorpassword.validate(this.state) : this.state.validpass
 
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
            
            <p className="lead fw-normal me-3 form-h">Forgot Your Password?</p>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Email address" />
         
              </div>
    
          
    
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-lg"
                 style={{paddingleft: '2.5rem', paddingright: '2.5rem'}}>Reset Password</button>
                <p className="small mt-2 pt-1 mb-0"><NavLink to='/Login'>Back to Login</NavLink></p>
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