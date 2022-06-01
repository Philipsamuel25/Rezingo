import React, {Component} from 'react'; 

	
class Footer extends  Component{ 
    render(){ 
  return (    
      <div>
<footer id="footer" className="light">
			<div className="container">
				<div className="footer-widgets-wrap">

					<div className="row col-mb-50">
						<div className="col-md-6 col-lg-4">

							<div className="widget clearfix">

								{/* <!--<img src="images/footer-widget-logo.png" alt="Image" className="footer-logo">--> */}
								<h3>Rezingo1</h3>

								<p>Welcome to Rezingo. We are a health and wellness application unlike any other. We curate health and wellness programs from practitioners all over the world to matching to each of our customer’s individual health and wellness needs.</p>


							</div>

						</div>

						<div className="col-md-6 col-lg-4">

							<div className="widget clearfix">
								<h4>INFORMATION</h4>

								<div className="widget_links">
										<ul>
											<li><a href="#">Get Started</a></li>
											<li><a href="#">About Rezingo</a></li>
											<li><a href="#">Contact Us</a></li>
											
										</ul>
									</div>

							</div>

							<div className="widget clearfix">

								<a href="#" className="social-icon si-small si-rounded si-facebook">
									<i className="icon-facebook"></i>
									<i className="icon-facebook"></i>
								</a>

								<a href="#" className="social-icon si-small si-rounded si-twitter">
									<i className="icon-twitter"></i>
									<i className="icon-twitter"></i>
								</a>

								<a href="#" className="social-icon si-small si-rounded si-gplus">
									<i className="icon-gplus"></i>
									<i className="icon-gplus"></i>
								</a>

								{/* <a href="#" className="social-icon si-small si-rounded si-pinterest">
									<i className="icon-pinterest"></i>
									<i className="icon-pinterest"></i>
								</a>

								<a href="#" className="social-icon si-small si-rounded si-vimeo">
									<i className="icon-vimeo"></i>
									<i className="icon-vimeo"></i>
								</a>

								<a href="#" className="social-icon si-small si-rounded si-github">
									<i className="icon-github"></i>
									<i className="icon-github"></i>
								</a>

								<a href="#" className="social-icon si-small si-rounded si-yahoo">
									<i className="icon-yahoo"></i>
									<i className="icon-yahoo"></i>
								</a> */}

								<a href="#" className="social-icon si-small si-rounded si-linkedin">
									<i className="icon-linkedin"></i>
									<i className="icon-linkedin"></i>
								</a>

							</div>

						</div>

						<div className="col-md-6 col-lg-4">

							<div className="widget quick-contact-widget form-widget clearfix">

								<h4>Send Message</h4>

								<div className="form-result"></div>

								<form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" className="quick-contact-form mb-0">

									<div className="form-process">
										<div className="css3-spinner">
											<div className="css3-spinner-scaler"></div>
										</div>
									</div>

									<div className="input-group mx-auto">
										<div className="input-group-text"><i className="icon-user"></i></div>
										<input type="text" className="required form-control" id="quick-contact-form-name" name="quick-contact-form-name" defaultValue="" placeholder="Full Name" />
									</div>
									<div className="input-group mx-auto">
										<div className="input-group-text"><i className="icon-email2"></i></div>
										<input type="text" className="required form-control email" id="quick-contact-form-email" name="quick-contact-form-email" defaultValue="" placeholder="Email Address" />
									</div>
									<textarea className="required form-control input-block-level short-textarea" id="quick-contact-form-message" name="quick-contact-form-message" rows="4" cols="30" placeholder="Message"></textarea>
									<input type="text" className="d-none" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" defaultValue="" />
									<input type="hidden" name="prefix" defaultValue="quick-contact-form-" />
									<button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" className="btn btn-danger m-0" defaultValue="submit">Send Email</button>

								</form>

							</div>

						</div>
					</div>

				</div>
			</div>

			<div id="copyrights" >
				<div className="container">

					<div className="row justify-content-between">
						<div className="col-12 col-lg-auto text-center text-lg-start">
							<p className="mb-1">Copyrights &copy; 2022 All Rights Reserved.</p>
						</div>

						<div className="col-12 col-lg-auto text-center text-lg-end">
							<div className="copyrights-menu copyright-links mb-0">
								<a href="#">Privacy Policy</a>/<a href="#">Terms and Conditions </a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</footer>
      </div>
  );
    }
}

export default Footer;