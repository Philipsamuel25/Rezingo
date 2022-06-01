import React, {useState} from 'react';
import { NavLink,Redirect,Link,Route,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Alert } from '../_components/Alert';
import GoogleLogin from "react-google-login";
import { useUserActions ,useAlertActions } from '../_actions';
import {Register} from './Register'; 
import { render } from '@testing-library/react';
import GoogleLogout from 'react-google-login';
import TwitterLogin from "react-twitter-login";
import FacebookLogin from "react-facebook-login";
import Profile from '../user/Profile';

// import { LoginManager } from 'react-native-fbsdk'
export { Login };
// LoginManager.logOut()

function Login() {
    const userActions = useUserActions();
    const alertActions = useAlertActions();
    const history = useHistory();
    const responseFacebook = (response) => {
      console.log(response);
    }
    const authHandler = (error, data) => {
        if (error) return console.error(error);
        console.log(data);
      };
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;
      //goooglelogin
      const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        // history.push('/Profile');
        // <NavLink to='/Profile' />
        // window.location.href='/Profile';
        return userActions.login(res)
        .then(() => {
            // history.push('/Profile');
            // window.location.href='/Profile'
            alertActions.success('Login successful');
        })
    };
 
    
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (

							
    //     <div classNameName="section ">
    //     <div className="vertical-middle">
    //         <div className="container py-5">

            

    //             <div className="card mx-auto rounded-0 border-0" style={{maxWidth: "400px"}}>
    //                 <div className="card-body" style="padding: 40px;">
    //                     <form id="login-form" name="login-form" className="mb-0" action="#" method="post">
    //                         <h3>Login to your Account</h3>

    //                         <div className="row">
    //                             <div className="col-12 form-group">
    //                                 <label for="login-form-username">Username:</label>
    //                                 <input type="text" id="login-form-username" name="login-form-username" value="" className="form-control not-dark" />
    //                             </div>

    //                             <div className="col-12 form-group">
    //                                 <label for="login-form-password">Password:</label>
    //                                 <input type="password" id="login-form-password" name="login-form-password" value="" className="form-control not-dark" />
    //                             </div>

    //                             <div className="col-12 form-group mb-0">
    //                                 <button className="button button-3d button-black m-0" id="login-form-submit" name="login-form-submit" value="login">Login</button>
    //                                 <a href="#" className="float-end">Forgot Password?</a>
    //                             </div>
    //                         </div>
    //                     </form>

    //                     <div className="line line-sm"></div>

    //                     <div className="center">
    //                         <h4 style={{marginBottom:" 15px"}}>or Login with:</h4>
    //                         <a href="#" className="button button-rounded si-facebook si-colored">Facebook</a>
    //                         <span className="d-none d-md-inline-block">or</span>
    //                         <a href="#" className="button button-rounded si-twitter si-colored">Google</a>
    //                     </div>
    //                 </div>
    //             </div>

           

    //         </div>
    //     </div>
    // </div>
<div className="section bg-transparent min-vh-80 p-4 m-0 d-flex">
        <div className="vertical-middle">
             <div className="container py-3"></div>

        <div className="card mx-auto rounded-0 border-0 justify-content-center shadow-lg rounded-3" style={{maxWidth: "430px" , padding:"36px"}}>
            <h3 className="text-center">Login to your Account</h3>
            <div className="card-body">
            <Alert />

                <form onSubmit={handleSubmit(userActions.login)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
									<label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
								</div>
                    <div className='mt-4'>
                    <button disabled={isSubmitting} className="button button-rounded ">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/Register" className="button button-border button-rounded">Register</Link>
                    </div>
                </form>
            </div>

            <h4 className="text-center mb-3" style={{marginBottom:" 15px"}}>or Login with Social Media</h4>

            <div className="d-flex justify-content-center">
                {/* <GoogleLogin
                    clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com"
                    buttonText="Sign In"
                    render={renderProps => (
                      <button onClick={renderProps.onClick} style={{ background: 'white',
                      color: 'white',border:'none'}}><a href="#" className="social-icon si-borderless si-text-color si-google" title="Google">
                      <i className="icon-google"></i>	<i className="icon-google"></i> </a></button>
                    )}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'    '}
                    isSignedIn={true}
                />  */}



<div className="row mt-1">
        <div className="col-md-12">
{/*               
            <div>
               return <Redirect to="/Profile" />
              <h1>Welcome, {this.state.userInfo.name}</h1>
              <GoogleLogout
                clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com"
                buttonText={"Logout"}
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </div>
         */}
      
            <GoogleLogin
            clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} style={{ background: 'white',
              color: 'white',border:'none'}}><a href="#" className="social-icon si-borderless si-text-color si-google" title="Google">
              <i className="icon-google"></i>	<i className="icon-google"></i> </a></button>
            )}
            isSignedIn={true}
               cookiePolicy={"single_host_origin"}
            buttonText="Login"
            onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
         
                  />
                 
            
            </div>
            </div>
            <FacebookLogin
    appId="404706351194828"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    
    icon={  <div style={{border:'none',backgroundColor:'white'}}> <a href="#" className="social-icon si-borderless si-text-color si-facebook" title="Facebook">
    <i className="icon-facebook"></i><i className="icon-facebook"></i> </a></div>}
    textButton=''
    Style={'border:none'}
    onSuccess={onLoginSuccess}
    onFailure={onLoginFailure}
  />          

            {/* { showlogoutButton ?
                <GoogleLogout
                    clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com"
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}
        </div>
          {/* exist */}
                       {/* <div>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
            clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com" // We created this earlier, remember?
            render={renderProps => (
              <button onClick={renderProps.onClick} style={{ background: 'white',
              color: 'white',border:'none'}}><a href="#" className="social-icon si-borderless si-text-color si-google" title="Google">
              <i className="icon-google"></i>	<i className="icon-google"></i> </a></button>
            )}
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
                   
          />
          )} */}
           {/* <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout> */}
        </div>
       
   </div> 
        {/* <Face
        //  render={renderProps => (
        //     <button onClick={renderProps.onClick} style={{ background: 'white',
        //     color: 'white',border:'none'}}> <a href="#" className="social-icon si-borderless si-text-color si-facebook" title="Facebook">
        //     <i className="icon-facebook"></i><i className="icon-facebook"></i> </a></button>
        //   )}
      appId="4869322693188064" // we created this, remember?
      autoLoad={true}
      fields="name,email,picture"
     
      callback={onResponse}
      onFailure={onResponse}
        icon={<button style={{ background: 'white',
            color: 'white',border:'none'}}> <a href="#" className="social-icon si-borderless si-text-color si-facebook" title="Facebook">
            <i className="icon-facebook"></i><i className="icon-facebook"></i> </a></button>}
    /> */}
                             {/* <a href="#" className="social-icon si-borderless si-text-color si-facebook" title="Facebook">
							<i className="icon-facebook"></i><i className="icon-facebook"></i> </a> */}
                            {/* <TwitterLogin
      authCallback={authHandler}
      consumerKey="<Consumer Key>" // We created this, remember?
      consumerSecret="<Consumer Secret>" // We created this, remember?
      callbackUrl="<Callback URL>" // You set this up in the twitter app settings, remember?
      icon={ <button style={{border:'none'}}> <a href="#" className="social-icon si-borderless si-text-color si-facebook" title="Facebook">
    <i className="icon-facebook"></i><i className="icon-facebook"></i> </a></button>}
         textButton=''
     
    /> */}
                            {/* <a href="#" className="social-icon si-borderless si-text-color si-twitter" title="Twitter">
							<i className="icon-twitter"></i><i className="icon-twitter"></i></a> */}
                           
                     
        </div>

        
            
        
    )
    
    }

export default Login;
