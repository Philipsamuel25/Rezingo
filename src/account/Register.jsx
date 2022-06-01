import {NavLink,Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Alert } from '../_components/Alert';
import { useUserActions, useAlertActions } from '../_actions';

export { Register };

function Register({ history }) {
    const userActions = useUserActions();
    const alertActions = useAlertActions();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40)
            .required('First Name is required'),
        lastName: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40)
            .required('Last Name is required'),
        email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email ID is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        passwordConfirmation: Yup.string()
            .required('passwordConfirmation is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit(data) {
        return userActions.register(data)
            .then(() => {
                // history.push('/account/login');
                 window.location.href='/login'
                // <NavLink to={'/login'} />
                alertActions.success('Registration successful');
            })
    }
  

    return (


<div className="section bg-transparent min-vh-80 p-3 m-0 d-flex">
        <div className="vertical-middle">
           
        <div className="container py-3"> </div>

        <div className="card mx-auto rounded-0 border-0 justify-content-center shadow-lg rounded-3" style={{maxWidth: "430px" , padding:"40px"}}>
            <h3 className="text-center">Don't have an Account? Register Now</h3>
            <div className="card-body">
            <Alert />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Email ID</label>
                        <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
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
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="passwordConfirmation" type="password" {...register('passwordConfirmation')} className={`form-control ${errors.passwordConfirmation ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.passwordConfirmation?.message}</div>
                    </div>

                    <div class="form-check mt-4">
									<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
									<label class="form-check-label" for="exampleCheck1">I agree with the <Link>terms and conditions</Link></label>
								</div>

                    <div className="mt-4">
                    <button disabled={isSubmitting} className="button button-rounded">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="login" className="btn btn-link">Cancel</Link>

                    <div class="divider divider-sm divider-border divider-center" style={{margin:"1.6rem auto"}}><i class="icon-user"></i></div>
                    <span className="text-center">Already have an account? <Link to="/login" className="link">Login</Link></span>
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Register
