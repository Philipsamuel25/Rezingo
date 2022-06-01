import React,{useState} from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { NavLink,Redirect } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { authAtom } from '../_state';
import { useUserActions } from '../_actions';
// const CLIENT_ID =
// "467838841706-ucpo5bs3a5fka3pg64inss7as4828is6.apps.googleusercontent.com";
//   const componentClicked = data => {
//     console.log("data", data);
//    }

   function Profile() {

   
    const userActions = useUserActions();
    const auth = useRecoilValue(authAtom);
    // const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);
    // const onLoginSuccess = (res) => {
    //     console.log('Login Success:', res.profileObj);
    //     setShowloginButton(false);
    //     setShowlogoutButton(true);
    // };

    // const onLoginFailure = (res) => {
    //     console.log('Login Failed:', res);
    // };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };
   
//   const [products, setProducts] = useState([]);
const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    window.location.href='/login'
    window.sessionStorage.removeItem("access_token");
    window.sessionStorage.removeItem("nama");
};


    return (
      <>
      
		<section id="page-title" className="page-title-parallax page-title-dark page-title-center include-header include-topbar skrollable skrollable-between" style={{background: "url(images/page-dashboard.jpg) 0px 46.2177% / cover no-repeat", padding:" 160px 0px", marginTop: "-128px"}} data-center="background-position: 0px 50%;" data-top-bottom="background-position:0px 0%;">

<div className="container clearfix">
    <h1>DASHBOARD</h1>

</div>

<div className="video-wrap" style={{position: "absolute", top: "0", left: "0", height: "100%", zIndex:1}}>
        <div className="video-overlay" style={{background: "rgba(0,0,0,0.6)"}}></div>
    </div>

</section>
<div id="page-menu" data-mobile-sticky="true">
<div id="page-menu-wrap">
    <div className="container">
        <div className="page-menu-row">

            <div className="page-menu-title">Hi  <span>{auth?.firstName}</span></div>

            <nav className="page-menu-nav">
                <ul className="page-menu-container">
                    <li className="page-menu-item current"><a href=""><div>Profile</div></a></li>
                    {/* <li className="page-menu-item"><a href="todaytask.html"><div>Today Track</div></a></li>
                    <li className="page-menu-item"><a href="class.html"><div>Class</div></a></li>
                    <li className="page-menu-item"><a href="store.html"><div>Shop Now</div></a>
                        <ul className="page-menu-sub-menu">
                            <li className="page-menu-item"><a href="store.html"><div>Category</div></a></li>
                            <li className="page-menu-item"><a href="store.html"><div>Category2</div></a></li>
                        </ul>
                    </li>
                    <li className="page-menu-item"><a href="billing.html"><div>Billing</div></a></li>
                    <li className="page-menu-item"><a href="message.html"><div>Messages</div></a></li> */}
                    <li className="page-menu-item"><a href="review"><div>Review</div></a></li>
                    {/* <li className="page-menu-item"><a href="connect.html"><div>Connect</div></a></li> */}
                </ul>
            </nav>

            <div id="page-menu-trigger"><i className="icon-reorder"></i></div>

        </div>
    </div>
</div>
</div>


<section id="content">
<div className="content-wrap">
    <div className="container clearfix">

        <div className="row clearfix">

            <div className="col-md-9">

                <img src="images/icons/avatar.jpg" className="alignleft img-circle img-thumbnail my-0" alt="Avatar" style={{maxWidth: "84px"}}/>

                <div className="heading-block border-0">
                    <h3>{auth?.firstName} {auth?.lastName}</h3>
                    <span>General Practisner</span>
                </div>

                <div className="clear"></div>

                <div className="row clearfix">

                    <div className="col-lg-12">

                        <div className="tabs tabs-alt clearfix" id="tabs-profile">

                            <ul className="tab-nav clearfix">
                                <li><a href="#tab-feeds"><i className="icon-note"></i> Class</a></li>
                                <li><a href="#tab-posts"><i className="icon-pencil2"></i>Active Program</a></li>
                                <li><a href="#tab-replies"><i className="icon-reply"></i> Replies</a></li>
                                <li><a href="#tab-connections"><i className="icon-users"></i> Practitioner</a></li>
                            </ul>

                            <div className="tab-container">

                                <div className="tab-content clearfix" id="tab-feeds">

<br/>
                                {/* <h3 className="pt-4"><a href="#">About the class</a></h3> */}
                                <h6>DESCRIPTION</h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium harum ea quo! Nulla fugiat earum, sed corporis amet iste non, id facilis dolorum, suscipit, deleniti ea. Nobis, temporibus magnam doloribus. Reprehenderit necessitatibus esse dolor tempora ea unde, itaque odit. Quos.</p>

                                    <div id="faqs" className="faqs">

<div className="toggle faq faq-marketplace faq-authors">
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
        <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 1
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    
  
        <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>


<div className="toggle faq faq-marketplace faq-authors" >
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
            <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 2
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    
  
  
    <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>


<div className="toggle faq faq-marketplace faq-authors" >
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
            <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 3
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    

  
    <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>

<div className="toggle faq faq-marketplace faq-authors">
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
        <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 4
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    
  
    <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>


<div className="toggle faq faq-marketplace faq-authors" >
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
            <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 5
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    
  
    <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>




<div className="toggle faq faq-marketplace faq-authors">
    <div className="toggle-header">
        <div className="toggle-icon">
            <i className="toggle-closed icon-question-sign"></i>
            <i className="toggle-open icon-line-chevron-up"></i>
        </div>
        <div className="toggle-title">
            WEEK 6
        </div>
    </div>
    <div className="toggle-content" style={{display: "none"}}>
    
    
  
    <div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 1</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>

<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 2</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 3</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 4</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">20 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 5</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">13 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 6</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">17 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>
<div className="col-12">
<div className="border rounded p-2 mb-1 h-shadow all-ts bg-white h-translatey-sm">
<div className="row align-items-center col-mb-10">
    <div className="col-lg-3 col-md-6">
        <h4 className="mb-0 color fw-semibold font-secondary">DAY 7</h4>
    </div>
    <div className="col-lg-5 col-md-6">
        <p className="mb-0 text-small fw-normal">10 interactions</p>
    </div>
   
    <div className="col-lg-2 col-md-6">
        <a href="#" className="button button-rounded button-border m-0" style={{padding:"2px 14px",fontSize:"0.759rem"}}>Measure</a>
    </div>
</div>
</div>
</div>


    
    </div>
</div>


</div>				
        
                                    

                                </div>
                                <div className="tab-content clearfix" id="tab-posts">

                                 
                                    <div className="row gutter-40 posts-md mt-4">

                                        <div className="entry col-md-10 shadow-sm card">
                                            <div className="grid-inner row align-items-center g-0">
                                                <div className="col-md-4 mt-4">
                                                    <a className="entry-image" href="demos/yoga/images/teacher/1.jpg" data-lightbox="image"><img src="demos/yoga/images/teacher/1.jpg" alt="Standard Post with Image"/></a>
                                                </div>
                                                <div className="col-md-8 ps-md-2">
                                                    <div className="entry-title title-sm">
                                                        <h3><a href="#">Gut Health - 1</a></h3>
                                                    </div>
                                                    <div className="entry-meta">
                                                        <ul>
                                                            <li><i className="icon-calendar3"></i> 10th Feb 2022</li>
                                                            <li><a href="#"><i className="icon-comments"></i> 13</a></li>
                                                            <li><a href="#"><i className="icon-camera-retro"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="entry-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        <a href="#" className="button button-round m-0">View Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="tab-content clearfix" id="tab-replies">

                                    <div className="clear topmargin-sm"></div>
                                    <ol className="commentlist border-0 m-0 p-0 clearfix">
                                        <li className="comment even thread-even depth-1" id="li-comment-1">
                                            <div id="comment-1" className="comment-wrap clearfix">
                                                <div className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <span className="comment-avatar clearfix">
                                                        <img alt='Image' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' className='avatar avatar-60 photo avatar-default' height='60' width='60' /></span>
                                                    </div>
                                                </div>
                                                <div className="comment-content clearfix">
                                                    <div className="comment-author">John Doe<span><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a></span></div>
                                                    <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                                    <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <ul className='children'>
                                                <li className="comment byuser comment-author-_smcl_admin odd alt depth-2" id="li-comment-3">
                                                    <div id="comment-3" className="comment-wrap clearfix">
                                                        <div className="comment-meta">
                                                            <div className="comment-author vcard">

                                                                <span className="comment-avatar clearfix">
                                                                <img alt='Image' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' className='avatar avatar-40 photo' height='40' width='40' /></span>

                                                            </div>
                                                        </div>
                                                        <div className="comment-content clearfix">
                                                            <div className="comment-author"><a href='#' rel='external nofollow' className='url'>SemiColon</a><span><a href="#" title="Permalink to this comment">April 25, 2012 at 1:03 am</a></span></div>

                                                            <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                                                            <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1" id="li-comment-2">
                                            <div className="comment-wrap clearfix">
                                                <div className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <span className="comment-avatar clearfix">
                                                        <img alt='Image' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G' className='avatar avatar-60 photo' height='60' width='60' /></span>
                                                    </div>
                                                </div>
                                                <div className="comment-content clearfix">
                                                    <div className="comment-author"><a href='#' rel='external nofollow' className='url'>Test app</a><span><a href="#" title="Permalink to this comment">April 25, 2022 at 1:03 am</a></span></div>

                                                    <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

                                                    <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </li>

                                    </ol>

                                </div>
                                <div className="tab-content clearfix" id="tab-connections">
                                
                                
    <div className="section bg-transparent" style={{padding: "60px 0 40px"}}>
        <div className="container">

            <div className="heading-block border-bottom-0 mb-5 center">
                <h3>Most Popular Instructors</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus mollitia ipsum. Voluptatibus, perspiciatis placeat.</span>
            </div>

            <div className="clear"></div>

            <div className="row">

              
                <div className="col-lg-3 col-sm-6 mb-4">
                    <div className="feature-box hover-effect shadow-sm fbox-center fbox-bg fbox-light fbox-lg fbox-effect">
                        <div className="fbox-icon">
                            <i><img src="demos/landing/images/instructor/1.jpg" className="border-0 bg-transparent shadow-sm" style={{zIndex: "2"}} alt="Image"/></i>
                        </div>
                        <div className="fbox-content">
                            <h3 className="mb-4 nott ls0"><a href="#" className="text-dark">Linda hal</a><br/><small className="subtitle nott color">Yoga</small></h3>
                            <p className="text-dark"><strong>2342</strong> Students</p>
                            <p className="text-dark mt-0"><strong>23</strong> Courses</p>
                        </div>
                    </div>
                </div>

             
                <div className="col-lg-3 col-sm-6 mb-4">
                    <div className="feature-box hover-effect shadow-sm fbox-center fbox-bg fbox-light fbox-lg fbox-effect">
                        <div className="fbox-icon">
                            <i><img src="demos/landing/images/instructor/2.jpg" className="border-0 bg-transparent shadow-sm" style={{zIndex: "2"}} alt="Image"/></i>
                        </div>
                        <div className="fbox-content">
                            <h3 className="mb-4 nott ls0"><a href="#" className="text-dark">Alan Fresco</a><br/><small className="subtitle nott color">Health &amp; Fitness</small></h3>
                            <p className="text-dark"><strong>7563</strong> Students</p>
                            <p className="text-dark mt-0"><strong>29</strong> Courses</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-lg-3 col-sm-6 mb-4">
                    <div className="feature-box hover-effect shadow-sm fbox-center fbox-bg fbox-light fbox-lg fbox-effect">
                        <div className="fbox-icon">
                            <i><img src="demos/landing/images/instructor/3.jpg" className="border-0 bg-transparent shadow-sm" style={{zIndex: "2"}} alt="Image"/></i>
                        </div>
                        <div className="fbox-content">
                            <h3 className="mb-4 nott ls0"><a href="#" className="text-dark">Gunther Beard</a><br/><small className="subtitle nott color">Photography</small></h3>
                            <p className="text-dark"><strong>1131</strong> Students</p>
                            <p className="text-dark mt-0"><strong>11</strong> Courses</p>
                        </div>
                    </div>
                </div>

               
                <div className="col-lg-3 col-sm-6 mb-4">
                    <div className="feature-box hover-effect shadow-sm fbox-center fbox-bg fbox-light fbox-lg fbox-effect">
                        <div className="fbox-icon">
                            <i><img src="demos/landing/images/instructor/4.jpg" className="border-0 bg-transparent shadow-sm" style={{zIndex: "2"}} alt="Image"/></i>
                        </div>
                        <div className="fbox-content">
                            <h3 className="mb-4 nott ls0"><a href="#" className="text-dark">Desmond Eag</a><br/><small className="subtitle nott color">Lifestyle</small></h3>
                            <p className="text-dark"><strong>1232</strong> Students</p>
                            <p className="text-dark mt-0"><strong>12</strong> Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                             

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="w-100 line d-block d-md-none"></div>

            <div className="col-md-3">

                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><div>Profile</div><i className="icon-user"></i></a>
                    {/* <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><div>Servers</div><i className="icon-laptop2"></i></a>
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><div>Messages</div><i className="icon-envelope2"></i></a>
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><div>Billing</div><i className="icon-credit-cards"></i></a>
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><div>Settings</div><i className="icon-cog"></i></a> */}


<a href="#" onClick={userActions.logout}  className="list-group-item list-group-item-action d-flex justify-content-between"><div>Logout</div><i className="icon-line2-logout"></i></a>
                    {/* <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between"><i className="icon-line2-logout"></i> <span onClick={userActions.logout} className="nav-item nav-link">Logout</span></a>
            */}

<GoogleLogout
                                        clientId="232819647030-6v2sl364jrse4rlsbrpsm2uejj7obe85.apps.googleusercontent.com"
                                        buttonText='Logout'
                                        onLogoutSuccess={onSignoutSuccess}
                                        render={renderProps => (
                                            <input type='button' value="LOGOUT" onClick={renderProps.onClick} />)}
                                    />

                    {/* <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                isSignedIn={false}
                onLogoutSuccess={logout}
              ></GoogleLogout> */}

{/* <GoogleLogout
                                        clientId={CLIENT_ID}
                                        buttonText='Logout'
                                        onLogoutSuccess={logout}
                                        render={renderProps => (
                                            <input type='button' value="LOGOUT" onClick={renderProps.onClick} />)}
                                    /> */}
                                    {/* { showloginButton ?
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={CLIENT_ID}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}

                </div>

                <div className="fancy-title topmargin title-border">
                    <h4>About Me</h4>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laboriosam, dignissimos veniam obcaecati. Quasi eaque, odio assumenda porro explicabo laborum!</p>

                <div className="fancy-title topmargin title-border">
                    <h4>Social Profiles</h4>
                </div>

                <a href="#" className="social-icon si-facebook si-small si-rounded si-light" title="Facebook">
                    <i className="icon-facebook"></i>
                    <i className="icon-facebook"></i>
                </a>

                <a href="#" className="social-icon si-twitter si-small si-rounded si-light" title="twitter">
                    <i className="icon-twitter"></i>
                    <i className="icon-twitter"></i>
                </a>

             

            </div>

        </div>

    </div>
</div>
</section>
      
      
      </>
    );
 
};

export default Profile;