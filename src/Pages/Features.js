import React, {Component} from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Pagination, Autoplay } from "swiper";

import 'swiper/css/autoplay';
class Features extends  Component{ 
    render(){ 
  return (    
      <div>
		   <section id="slider" className="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header" data-loop="true" style={{margintop:'-122px'}}>
		<Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
		autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
       
		  <SwiperSlide>
		  <section id="slider" className="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header" data-loop="true" style={{margintop:'-122px'}}>
			<div className="slider-inner">
				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
		  <div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<h2>Curated health and wellness programs </h2>
									<div className="d-md-flex  d-none categories-lists" style={{width:'100%'}}>
									<p>Designed by independent coaches, practitioners and experts in their fields. Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
									</div>
									<div className="d-flex justify-content-left align-items-left categories-lists mt-4">
										<a href="#readmore" className="button button-rounded button-large nott ms-0 align-self-center ps-4">READ MORE</a>
									</div>
								</div>
							</div>
							<div className="video-wrap" style={{position: 'absolute', top: 0, left: 0, height: '100%', zindex:'1'}}>
								<div className="video-overlay" style={{background: 'rgba(0,0,0,0.5)'}}></div>
							</div>
							<div className="swiper-slide-bg" style={{backgroundImage: 'url(demos/gym/images/slider/1.jpg)'}}></div>
						</div>
						</div>
						</div>
						</div>
						</section>
        </SwiperSlide>
        <SwiperSlide>
		<section id="slider" className="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header" data-loop="true" style={{margintop:'-122px'}}>
			<div className="slider-inner">
				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
		<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<h2>Best health Product</h2>
										<p className="categories-lists">Designed by independent coaches, practitioners and experts in their fields. Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
									<div className="d-flex justify-content-left align-items-center categories-lists mt-4">
										<div className="d-flex fw-semibold ms-2 mb-0 p-2 h5 text-dark center justify-content-center align-items-center" style={{background: 'url(demos/gym/images/brush.png)no-repeat center center / cover', width: '180px', height: '50px'}}><span className="align-self-center">$19.99/m</span></div>
										<a href="#products" className="button button-rounded button-large nott ms-4 align-self-center">SHOP NOW</a>
									</div>
								</div>
							</div>
							<div className="video-wrap">
								<div className="yt-bg-player customjs" data-quality="hd1080" data-start="19" data-volume="80" data-stop="52" data-video="https://youtu.be/G5eaRMifvPQ"></div>
								<div className="video-overlay" style={{background: 'rgba(0,0,0,0.4)'}}></div>
							</div>
							<div className="swiper-slide-bg" style={{backgroundImage:'url(/demos/gym/images/slider/2.jpg)'}}></div>
						</div>
						</div></div></div></section>
        </SwiperSlide>
        <SwiperSlide>
		<section id="slider" className="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header" data-loop="true" style={{margintop:'-122px'}}>
			<div className="slider-inner">
				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
		<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<div>
										<h2>Only the Weak Give Up</h2>
										<p className="categories-lists">Completely incubate worldwide users before imperatives.</p>
										<a href="#program" className="button button-large nott mt-4">GET STARTED</a>
									</div>
								</div>
							</div>
							<div className="video-wrap" style={{position: 'absolute', top: 0, left: 0, height: '100%', zindex:1}}>
								<div className="video-overlay" style={{background: 'rgb(0,0,0,0.25)'}}></div>
							</div>
							<div className="swiper-slide-bg" style={{backgroundImage:'url(/demos/gym/images/slider/3.jpg)'}}></div>
						</div>
						</div></div></div></section>
        </SwiperSlide>
      </Swiper>
	
          {/*  <section id="slider" className="slider-element swiper_wrapper min-vh-60 min-vh-md-100 include-header" data-loop="true" style={{margintop:'-122px'}}>
			<div className="slider-inner">
				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<h2>Curated health and wellness programs </h2>
									<div className="d-md-flex  d-none categories-lists" style={{width:'100%'}}>
									<p>Designed by independent coaches, practitioners and experts in their fields. Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
									</div>
									<div className="d-flex justify-content-left align-items-left categories-lists mt-4">
										<a href="#" className="button button-rounded button-large nott ms-0 align-self-center ps-4">Read More</a>
									</div>
								</div>
							</div>
							<div className="video-wrap" style={{position: 'absolute', top: 0, left: 0, height: '100%', zindex:'1'}}>
								<div className="video-overlay" style={{background: 'rgba(0,0,0,0.5)'}}></div>
							</div>
							<div className="swiper-slide-bg" style={{backgroundImage: 'url(demos/gym/images/slider/1.jpg)'}}></div>
						</div>
						<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<h2>Best health Product</h2>
										<p className="categories-lists">Designed by independent coaches, practitioners and experts in their fields. Begin the next step of your health and wellness journey with Rezingo, your single platform for healthy living.</p>
									<div className="d-flex justify-content-left align-items-center categories-lists mt-4">
										<div className="d-flex fw-semibold ms-2 mb-0 p-2 h5 text-dark center justify-content-center align-items-center" style={{background: 'url(demos/gym/images/brush.png)no-repeat center center / cover', width: '180px', height: '50px'}}><span className="align-self-center">$19.99/m</span></div>
										<a href="#" className="button button-rounded button-large nott ms-4 align-self-center">Shop Now</a>
									</div>
								</div>
							</div>
							<div className="video-wrap">
								<div className="yt-bg-player customjs" data-quality="hd1080" data-start="19" data-volume="80" data-stop="52" data-video="https://youtu.be/G5eaRMifvPQ"></div>
								<div className="video-overlay" style={{background: 'rgba(0,0,0,0.4)'}}></div>
							</div>
						</div>
						<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption slider-caption-left">
									<div>
										<h2>Only the Weak Give Up</h2>
										<p className="categories-lists">Completely incubate worldwide users before imperatives.</p>
										<a href="#" className="button button-large nott mt-4">Get Started</a>
									</div>
								</div>
							</div>
							<div className="video-wrap" style={{position: 'absolute', top: 0, left: 0, height: '100%', zindex:1}}>
								<div className="video-overlay" style={{background: 'rgba(0,0,0,0.25)'}}></div>
							</div>
							<div className="swiper-slide-bg" style={{backgroundImage:'url(/demos/gym/images/slider/3.jpg)'}}></div>
						</div>
					</div>
					<div className="slider-arrow-left bg-transparent"><i className="icon-line-chevron-left"></i></div>
					<div className="slider-arrow-right bg-transparent"><i className="icon-line-chevron-right"></i></div>
				</div>
				<a href="#" className="scroll-down d-none d-lg-block" data-scrollto="#content" data-offset="80">
					<span className="scroll-mouse"><span className="scroll-wheel"></span></span>
				</a>

			</div>
		</section>  */}
		</section>
		
      </div>
  );
    }
}
export default Features;