import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel,Typography,CircularProgress,Divider,Button,Box ,Card,CardActions,CardContent} from "@material-ui/core";
import useStyles from './styles'
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import {commerce} from "../../../lib/commerce";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fasolidfahandshake} from '@fortawesome/free-solid-svg-icons'
const Checkout = ({cart,order,onCaptureCheckout,error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const steps = ['Shipping address', 'Payment details'];
    const [shippingData, setShippingData] = useState();
    const classes = useStyles()

    useEffect(()=>{
        const generateToken = async ()=>{
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

                console.log(token);
                setCheckoutToken(token);
            }catch (error){

            }

        }
        generateToken();
    },[cart]);
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }
    let Confirmation = () => order.customer ? (
      <>
          <div>
              <Typography variant={"h5"}>Thank you for your purchase</Typography>
              <Divider className={classes.divider}/>
              <Typography variant={"subtitle2"}>
                  Order ref:
              </Typography>
              <br/>
              <Button variant={"outlined"} component={Link} to={'/'} type={'button'}> Back to Home</Button>
          </div>
      </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }
    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : <PaymentForm nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} backStep={backStep} checkoutToken={checkoutToken} shippingData={shippingData}/>
    return (
        <>
    
            
    
            <section id="page-title" className="page-title-parallax page-title-dark page-title-center include-header include-topbar skrollable skrollable-between" style={{background: 'url(images/page.jpg) ', padding: '160px 0px',margintop: '-128px'}} data-center="background-position: 0px 50%;" data-top-bottom="background-position:0px 0%;">
        
        <div className="container clearfix">
            <h1>Shop Checkout</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Programe</a></li>
                <li className="breadcrumb-item active">Programe-Details</li>
            </ol> 
        </div>
    
        <div className="video-wrap" style={{position:'absolute' , top:'0' , left:'0' , height: '100%',zindex:'1' }}>
                <div className="video-overlay" style={{background:'rgba(0,0,0,0.6)'}}></div>
            </div>
    
    </section>
    
    
    
    
    
       
    <section id="page-title">
    
        <div className="container clearfix">
            <h1>Checkout</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
            </ol>
        </div>
    
    </section>
    
    
    <section id="content">
        <div className="content-wrap">
            <div className="container clearfix">

          
                <div className="card">
                            <div className="card-body">
                            <FontAwesomeIcon icon="fa-solid fa-handshake" />
                        Wish to buy? Must <a href="/Login">login</a>

                        </div>
                </div>
    </div></div></section>
            
            
        <div className={classes.toolbar}/>
            <main className={classes.layout}>
            <div>
                </div>
                <Paper className={classes.paper}>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=> (
                            <Step key={step}>
                                <StepLabel>
                                    {step}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}

                </Paper>
            </main>

        </>
    )
}
export default Checkout