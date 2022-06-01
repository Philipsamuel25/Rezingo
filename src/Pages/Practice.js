import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecentlyProductItem from './RecentlyProductItem';
import Comments from './Comments';

var id=1 ;
class Practice extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            records: [],
			items:[]
        }
       // this.onviewdetails = this.onviewdetails.bind(this);
    }
    
   

    componentDidMount() {
		//let programid =1;
		 let programid = JSON.parse(localStorage.getItem("programId"));
        // console.log(programid);

		fetch(`https://rez-castle-app-prd-eastus.azurewebsites.net/api/practice/${programid}`)
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items: items
                })
            })

        fetch(`https://rez-castle-app-prd-eastus.azurewebsites.net/api/program/relatedprograms/${programid}`)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

	handleClick({currentTarget}) {    
        console.log(currentTarget.value) // e.currentTarget.value would be equivalent
        localStorage.setItem('programId',currentTarget.value);
        // return currentTarget.value;
      }


    render() {
        return (
			<>
	<section id="content">
	

			<div className="content-wrap">
				<div className="container clearfix">
				
					<div className="row gutter-40 col-mb-80" >
					
						<div className="postcontent col-12">

							<div className="single-post mb-0">

							{this.state.items.map((item, i) => (
								<div className="entry clearfix" key={i}>

									<div className="entry-title">
										<h2>Message for Practicener |<span className="color">{item.name}</span> </h2>
									</div>
									<div className="entry-meta">
										<ul>
											{/* <li><i className="icon-calendar3"></i> 10th July 2021</li> */}
											<li><a href="#"><i className="icon-user"></i> Lynda Hall</a></li>
											<li><i className="icon-folder-open"></i> <a href="#">Program</a><a href="#"></a></li>
											<li><a href="#"><i className="icon-comments"></i> 43 Comments</a></li>
											<li><a href="#"><i className="icon-camera-retro"></i></a></li>
										</ul>
									</div>
									<div className="entry-content mt-0">

										
										<div className="entry-image alignleft">
											<a href="#"><img src="images/444.jpg" alt="Blog Single"/></a>
										</div>

										<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

										<p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="#">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>

										{/* {/* <blockquote><p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p></blockquote>

										<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p> */}

										<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <a href="#">Nullam quis risus eget urna</a> mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p> 

{/* <pre>
#header-inner {
	width: 940px;
	margin: 0 auto;
	padding-top: 40px;
}</pre> */}

										<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

										<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
									
										{/* <div className="tagcloud clearfix bottommargin">
											<a href="#">general</a>
											<a href="#">information</a>
											<a href="#">media</a>
											<a href="#">press</a>
											<a href="#">gallery</a>
											<a href="#">illustration</a>
										</div> */}

										<div className="clear"></div>

{/* 									
										<div className="si-share border-0 d-flex justify-content-between align-items-center">
											<span>Share this Post:</span>
											<div>
												<a href="#" className="social-icon si-borderless si-facebook">
													<i className="icon-facebook"></i>
													<i className="icon-facebook"></i>
												</a>
												<a href="#" className="social-icon si-borderless si-twitter">
													<i className="icon-twitter"></i>
													<i className="icon-twitter"></i>
												</a>
												<a href="#" className="social-icon si-borderless si-pinterest">
													<i className="icon-pinterest"></i>
													<i className="icon-pinterest"></i>
												</a>
												<a href="#" className="social-icon si-borderless si-gplus">
													<i className="icon-gplus"></i>
													<i className="icon-gplus"></i>
												</a>
												<a href="#" className="social-icon si-borderless si-rss">
													<i className="icon-rss"></i>
													<i className="icon-rss"></i>
												</a>
												<a href="#" className="social-icon si-borderless si-email3">
													<i className="icon-email3"></i>
													<i className="icon-email3"></i>
												</a>
											</div>
										</div> */}

									</div>
								</div>
								))} 
								{/* <div className="row justify-content-between col-mb-30 post-navigation">
									<div className="col-12 col-md-auto text-center">
										<a href="#">&lArr; This is a Standard post with a Slider Gallery</a>
									</div>

									<div className="col-12 col-md-auto text-center">
										<a href="#">This is an Embedded Audio Post &rArr;</a>
									</div>
								</div>

								<div className="line"></div> */}

								<div className="card">
									<div className="card-header"><strong>Tips for Practicener <a href="#">{this.state.title}</a></strong></div>
									<div className="card-body">
										<div className="author-image">
											<img src="images/small/1.jpg" alt="Image" className="rounded-circle"/>
										</div>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eveniet, eligendi et nobis neque minus mollitia sit repudiandae ad repellendus recusandae blanditiis praesentium vitae ab sint earum voluptate velit beatae alias fugit accusantium laboriosam nisi reiciendis deleniti tenetur molestiae maxime id quaerat consequatur fugiat aliquam laborum nam aliquid. Consectetur, perferendis?
									</div>
								</div>

						

								<div className="line"></div>

								<h4>Related Programe:</h4>

								<div className="related-posts row posts-md col-mb-30">
                                                 

                                {this.state.records.map((item, i) => (

									<div className="entry col-12 col-md-6" key={i}>



														<div class="grid-inner row align-items-center gutter-20">
															<div class="col-md-4">
																<a class="entry-image" href="images/blog/full/17.jpg" data-lightbox="image"><img src={item.logo}  alt={item.title}/></a>
															</div>
															<div class="col-md-8 ps-md-4">
																<div class="entry-title title-sm">
																	<h3><a href="Practice">{item.title}</a></h3>
																</div>
																{/* <div class="entry-meta">
																	<ul>
																		<li><i class="icon-calendar3"></i> {item.createdDate}</li>
																		<li><a href="blog-single.html#comments"><i class="icon-comments"></i> 13</a></li>
																		<li><a href="#"><i class="icon-camera-retro"></i></a></li>
																	</ul>
																</div> */}
																<div class="entry-content">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
																<br />
																<a href="/Progdetails" > <button type="submit" className="color m-0" value={item.id} onClick={this.handleClick}>View Details</button></a>
																	</p>
																
																</div>
															</div>
														</div>
													


                                        
										{/* <div className="grid-inner row align-items-center gutter-20">
											<div className="col-4">
												<div className="entry-image">
													<a href="/Progdetails"><img src={item.description} alt="Blog Single"/></a>
												</div>
											</div>
											<div className="col-8">
												<div className="entry-title title-xs">
													<h3><a href="/Progdetails">{item.title} </a></h3>
												</div>
												<div className="entry-meta">
													<ul>
														<li><i className="icon-calendar3"></i> 10th July 2021</li>
														<li><a href="#"><i className="icon-comments"></i> 12</a></li>
													</ul>
                                                    <a href="blog-single.html" class="more-link">Read More</a>
												</div>
											</div>
										</div> */}
									</div>
))} 
							

								</div>

	
	
								<div id="comments" className="clearfix">
{/* 
									<h3 id="comments-title">Comments</h3> */}

								<Comments />
									<div id="disqus_thread"></div>

								</div>

							</div>

						</div>
						
					</div>

				</div>
			</div>

 
		</section>

     </>
                    
                
                    
            
        );
    }
}

export default Practice;