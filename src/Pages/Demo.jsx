import { useState } from "react";

function Demo() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="row clearfix">

    <div className="col-lg-12">

        <div className="tabs tabs-alt clearfix" id="tabs-profile">

            <ul className="tab-nav clearfix">
                <li><a href="#tab-feeds"><i className="icon-note"></i> Class</a></li>
                <li><a href="#tab-replies"><i className="icon-reply"></i> Replies</a></li>
              
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
             
                <div className="tab-content clearfix" id="tab-replies">                              

<div id="reviews" className="clearfix">

    <ol className="commentlist clearfix">

        <li className="comment even thread-even depth-1" id="li-comment-1">
            <div id="comment-1" className="comment-wrap clearfix">

                <div className="comment-meta">
                    <div className="comment-author vcard">
                        <span className="comment-avatar clearfix">
                        <img alt='Image' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>
                    </div>
                </div>

                <div className="comment-content clearfix">
                    <div className="comment-author">John Doe<span><a href="#" title="Permalink to this comment">April 24, 2022 at 10:46AM</a></span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo perferendis aliquid tenetur. Aliquid, tempora, sit aliquam officiis nihil autem eum at repellendus facilis quaerat consequatur commodi laborum saepe non nemo nam maxime quis error tempore possimus est quasi reprehenderit fuga!</p>
                    <div className="review-comment-ratings">
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star-half-full"></i>
                    </div>
                </div>

                <div className="clear"></div>

            </div>
        </li>

        <li className="comment even thread-even depth-1" id="li-comment-2">
            <div id="comment-2" className="comment-wrap clearfix">

                <div className="comment-meta">
                    <div className="comment-author vcard">
                        <span className="comment-avatar clearfix">
                        <img alt='Image' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>
                    </div>
                </div>

                <div className="comment-content clearfix">
                    <div className="comment-author">Mary Jane<span><a href="#" title="Permalink to this comment">June 16, 2021 at 6:00PM</a></span></div>
                    <p>Quasi, blanditiis, neque ipsum numquam odit asperiores hic dolor necessitatibus libero sequi amet voluptatibus ipsam velit qui harum temporibus cum nemo iste aperiam explicabo fuga odio ratione sint fugiat consequuntur vitae adipisci delectus eum incidunt possimus tenetur excepturi at accusantium quod doloremque reprehenderit aut expedita labore error atque?</p>
                    <div className="review-comment-ratings">
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star3"></i>
                        <i className="icon-star-empty"></i>
                        <i className="icon-star-empty"></i>
                    </div>
                </div>

                <div className="clear"></div>

            </div>
        </li>

    </ol>

   
    <a href="#" data-bs-toggle="modal" data-bs-target="#reviewFormModal" className="button button-3d m-0 float-end">Add a Review</a>

</div>

</div>

                </div>


            </div>

        </div>

    </div>


  );
}

export default Demo;