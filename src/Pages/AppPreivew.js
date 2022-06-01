import {React, Component} from 'react'; 

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Divider } from '@material-ui/core';

class AppPreview extends  Component{
	
    render(){ 
  return (    
<>


{/* <div className="section mt-4" >

	
					<div className="row clearfix" >
					<div className="col-md-12" >
					
					<div id="about" className="heading-block center mt-10">
						<h3> Health and Wellness Program</h3>
						<span>Welcome to Rezingo. We are a health and wellness application unlike any other. We curate health and wellness programs from practitioners all over the world to matching to each of our customers individual health and wellness needs. </span>
						<br/>
						<a href="#" className="button button-rounded "><span>Explorer Classes</span></a> <a href="#" className="button button-border button-rounded "><span>TRY Classes</span></a>
					</div>
					
						<div className="row clearfix">
						
						<div id="oc-clients-full" className="owl-carousel owl-carousel-full image-carousel carousel-widget" data-margin="25" data-nav="true" data-pagi="false" data-autoplay="5000" data-items-xs="4" data-items-sm="4" data-items-md="5" data-items-lg="5" data-items-xl="5">

						
					
						<div className="oc-item">
								<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage:" url('images/vid/1.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
								<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/2.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
								<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/3.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
								<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/4.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
							<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/5.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
							<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/1.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
							<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-4 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/vid/2.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						</div>
						<div className="oc-item">
						
						<a href="https://www.youtube.com/watch?v=hGOYxik3oeE" data-lightbox="iframe" className="d-flex justify-content-center align-items-center text-center mt-2 rounded-6 shadow grid-inner min-vh-50 mw-xs mx-auto h-scale-sm transform-ts" style={{backgroundImage: "url('images/12.jpg')"}}>
					<i  className="icon-line-play h3 icon-stacked text-center rounded-circle ps-1 text-white h-bg-danger bg-ts" style={{background: "rgba(255,255,255,0.2)"}}></i>
					</a>
						
						</div>

					</div>
					
						
							
						</div>
						</div>
					</div>
				</div> */}



<div className="section m-0" style={{padding: '100px 0', backgroundcolor: 'rgba(61,128,228,0.05)'}}>

					<div className="container clearfix">

						<div className="heading-block mx-auto center" style={{maxWidth: '500px'}}>
							<h5 className="s1 text-muted mb-2">Application</h5>
							<h3 className="nott mb-3">Our App Preview</h3>
							<p className="h6 fw-normal text-black-50">Recusandae ducimus, sequi, sapiente possimus optio impedit efficient services. Completely promote.</p>
						</div>

					</div>

					<OwlCarousel
    className="owl-theme owl-carousel owl-carousel-full image-carousel owl-loaded  skrollable skrollable-before"
    loop={true}
	autoplay ={true} 
    margin={10}
	data-margin={40}
	data-center={true}
	 data-loop={true}
	  data-nav={false}
	   data-pagi={true}
	    data-items-xs={1}
		
>
<div className="owl-stage-outer">
<div className="owl-stage" style={{transition: 'all 0.25s ease 0s', width: '100%', transform: 'translate3d(-1165px, 0px, 0px)'}}></div>

    <div className="item "  style={{width: '348.6px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/4.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/4.png" alt="Image 3" /></a>
	</div>
	 
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/5.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/5.png" alt="Image 3" /></a>
	</div>
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/6.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/6.png" alt="Image 3" /></a>
	</div>
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/1.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/1.png" alt="Image 3" /></a>
	</div>
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/4.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/4.png" alt="Image 3" /></a>
	</div>
	 
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/5.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/5.png" alt="Image 3" /></a>
	</div>
	<div className="item "  style={{width: '400px', marginright: '0px'}}>
		<a href="demos/landing/images/carousel/6.png" data-lightbox="image">
		<img src="demos/landing/images/carousel/6.png" alt="Image 3" /></a>
	</div>

{/* 
    <div className="item"><img src="demos/landing/images/carousel/3.png"/></div>
    <div className="item"><img src="demos/landing/images/carousel/4.png"/></div>
    <div className="item"><img src="demos/landing/images/carousel/5.png"/></div>
    <div className="item"><img src="demos/landing/images/carousel/6.png"/></div>
    <div className="item"><img src="demos/landing/images/carousel/7.png"/></div>
    <div className="item"><img src="demos/landing/images/carousel/2.png"/></div> */}


</div>

   
</OwlCarousel>

{/* test slider */}

{/* 				
					<div className="owl-carousel owl-carousel-full image-carousel carousel-widget owl-loaded owl-drag with-carousel-dots skrollable skrollable-before" data-margin="40" data-center="true" data-loop="true" data-nav="false" data-pagi="true" data-items-xs="2" data-items-sm="3" data-items-md="4" data-items-lg="4" data-items-xl="5">
					


					<div className="owl-stage-outer">
						<div className="owl-stage" style={{transition: 'all 0.25s ease 0s', width: '6607px', transform: 'translate3d(-1165px, 0px, 0px)'}}>
						<div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}>
						<div className="oc-item">
							<a href="demos/landing/images/carousel/3.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/3.png" alt="Image 3" />
							</a>
						</div></div>
						<div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}>
							<div className="oc-item">
							<a href="demos/landing/images/carousel/4.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/4.png" alt="Image 4" />
							</a>
						</div></div>
						
						<div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/5.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/5.png" alt="Image 5" />
							</a>
						</div></div><div className="owl-item cloned active" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/6.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/6.png" alt="Image 6" />
							</a>
						</div></div><div className="owl-item cloned active" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/7.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/7.png" alt="Image 7" />
							</a>
						</div></div><div className="owl-item active center" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/1.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/1.png" alt="Image 1" />
							</a>
						</div></div><div className="owl-item active" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/2.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/2.png" alt="Image 2" />
							</a>
						</div></div><div className="owl-item active" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/3.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/3.png" alt="Image 3" />
							</a>
						</div></div><div className="owl-item" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/4.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/4.png" alt="Image 4" />
							</a>
						</div></div><div className="owl-item" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/5.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/5.png" alt="Image 5" />
							</a>
						</div></div><div className="owl-item" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/6.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/6.png" alt="Image 6" />
							</a>
						</div></div><div className="owl-item" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/7.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/7.png" alt="Image 7" />
							</a>
						</div></div><div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/1.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/1.png" alt="Image 1" />
							</a>
						</div></div><div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}>
							<div className="oc-item">
							<a href="demos/landing/images/carousel/2.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/2.png" alt="Image 2" />
							</a>
						</div></div><div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/3.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/3.png" alt="Image 3" />
							</a>
						</div></div><div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/4.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/4.png" alt="Image 4" />
							</a>
						</div></div><div className="owl-item cloned" style={{width: '348.6px', marginright: '40px'}}><div className="oc-item">
							<a href="demos/landing/images/carousel/5.png" data-lightbox="image">
								<img src="demos/landing/images/carousel/5.png" alt="Image 5" />
							</a>
						</div></div></div>
						<div className="owl-stage-outer-bg"></div></div>
						
						<div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="icon-angle-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="icon-angle-right"></i></button></div>
				
						</div> */}




				</div>
				<div className="section mb-0 bg-color dotted-bg" style={{backgroundImage: 'linear-gradient(to bottom, #3D80E4 0%, #0a4bab 50%, #FFF 50%)'}}>

					<div className="container clearfix" style={{maxWidth:'1100px'}}>
						<div className="row mx-auto justify-content-center shadow-lg py-5 my-5 text-center rounded-3 bg-white" style={{maxwidth: '940px'}}>
							<div className="col-md-8">
								<div className="card border-0 bg-transparent">
									<div className="card-body">
										<h3 className="display-4 fw-bold">Start your journey right now</h3>
										<p className="text-black-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sequi natus autem non temporibus aperiam, nesciunt iusto, perspiciatis.</p>
										
									</div>
								</div>
							</div>
							
							<div className="col-12 col-lg-auto mt-3 mt-lg-0">
										<a href="#"><img src="demos/appstore.png" alt="Image" height="54" className="mt-3" /></a>
										<a href="#"><img src="demos/googleplay.png" alt="Image" className="ms-xl-3 ms-lg-1 mt-3 ms-0 " height="54" /></a>
									</div>
							
						</div>
					</div>
				</div>
</>
  );
    }
}
export default AppPreview;