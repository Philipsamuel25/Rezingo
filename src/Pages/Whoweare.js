import React, {Component} from 'react'; 
import Header from './Header';
import { NavLink,Link, useHistory } from 'react-router-dom';

class Whoweare extends  Component{
	constructor(props) {
        super(props)   
        this.state = {
            records: []
        }
        
    }

    render(){
		
  return ( 	
	<div>
		<section id="content">
			<div className="content pt-0">
						
				<div className="mt-0 ">
				<div className="section mb-2" id="readmore">
					<div className="heading-block mx-auto center">
							<h3 className="nott mb-3">Our Features</h3>
							<p className="h4 fw-normal text-black-50">Could your health use direction? Our wellness programs take the guesswork out of healthful living.
</p>
						</div>
							
				<div className="container clearfix">
				
							
							
							<div className="row col-mb-30 clearfix">
							
								
									<div className="col-md-4" >
										<div className="card card2">
								<div className="card-body">
									<h4 className="card-title center mb-0">Engage</h4>
								</div>

								<img src="demos/yoga/images/2.jpg" alt="Engage" />

								<div className="card-body" style={{height:'230px'}}>
									<p className="card-text">Engage in as much of our optional survey as possible to browse and select from a variety of recommended health and wellness programs and protocols based on your dynamic health score. Or, take your time and browse content by type, date posted, author, fitness level, outcome, and so much more.
									<br/>
									<a href="#" className="pt-4 color">Learn More</a>
									</p>
									{/* <a href="#" className="button button-border button-rounded ">Learn More</a> */}
								</div>
							</div>

							</div>
									<div className="col-md-4">
										<div className="card card2">
								<div className="card-body">
									<h4 className="card-title center mb-0">Build</h4>
								</div>

								<img src="demos/yoga/images/3.jpg" alt="Build" />

								<div className="card-body" style={{height:'230px'}}>
									<p className="card-text">Build your custom library of programs from the programs page including diverse curated selections for mental health, diet, supplementation, meditation, physical health, and relationships.
									<br/>
									<a href="#" className="pt-4 color">Learn More</a>
									</p>
									{/* <a href="#" className="button button-border button-rounded ">Learn More</a> */}
								</div>
							</div>

							</div>
										<div className="col-md-4">
										<div className="card card2">
								<div className="card-body">
									<h4 className="card-title center mb-0">Grow</h4>
								</div>

								<img src="demos/yoga/images/1.jpg" alt="Grow" />

								<div className="card-body" style={{height:'230px'}}>
									<p className="card-text">Optionally track and share your fitness data, answer daily health prompts, and review your program history in one place. Rezingo grows with you, suggesting new refinements to your wellness library and offering encouragement along the way.
									<br/>
									<a href="#" className="pt-4 color">Learn More</a>
									</p>
									
								</div>
							</div>

							</div>
								
								
							
					
						</div>
					
				</div>
				</div>
				<div className="my-4 p-4" id="whoweare">
					<div className="container" >

						<div className="row mt-4 col-mb-50">

						<div id="about" className="heading-block center mt-10">
						<h3>Who we are ?</h3>
						<span>Welcome to Rezingo. We are a health and wellness application unlike any other. We curate health and wellness programs from practitioners all over the world to matching to each of our customer’s individual health and wellness needs. </span>
						<br/>
						<a href="#" className="button button-rounded "><span>Shop Now</span></a> <a href="#" className="button button-border button-rounded "><span>Try Levels</span></a>
					</div>

						</div>

					</div>
				</div>
			</div>
            </div>
		</section>
		   <div id="gotoTop" className="icon-angle-up"></div> 
		</div>
  );
    }
}
export default Whoweare;
