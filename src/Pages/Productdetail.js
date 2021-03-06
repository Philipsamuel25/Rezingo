import React, { Component } from 'react'; 

class Productdetail extends  Component{
	
    render(){ 
  return (    
<>
<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">

					<div className="row gutter-40 col-mb-80">
						<div className="postcontent col-lg-9">

							<div className="single-product">
								<div className="product">
									<div className="row gutter-40">

										<div className="col-md-6">

											
											<div className="product-image">
												<div className="fslider" data-pagi="false" data-arrows="false" data-thumbs="true">
													<div className="flexslider">
														<div className="slider-wrap" data-lightbox="gallery">
															<div className="slide" data-thumb="images/shop/thumbs/3-1.jpg"><a href="images/shop/dress/3.jpg" title="slide2" data-lightbox="gallery-item"><img src="images/shop/dress/3.jpg" alt="slide"/></a></div>
															<div className="slide" data-thumb="images/shop/thumbs/3-2.jpg"><a href="images/shop/dress/3-1.jpg" title="slide2" data-lightbox="gallery-item"><img src="images/shop/dress/3-1.jpg" alt="slide1"/></a></div>
															<div className="slide" data-thumb="images/shop/thumbs/3.jpg"><a href="images/shop/dress/3-2.jpg" title="slide2" data-lightbox="gallery-item"><img src="images/shop/dress/3-2.jpg" alt="slide2"/></a></div>
														</div>
													</div>
												</div>
												<div className="sale-flash badge bg-danger p-2">Sale!</div>
											</div>

										</div>

										<div className="col-md-6 product-desc">

											<div className="d-flex align-items-center justify-content-between">

												<div className="product-price"><del>$39.99</del> <ins>$24.99</ins></div>

												
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-half-full"></i>
													<i className="icon-star-empty"></i>
												</div>

											</div>

											<div className="line"></div>

											
											<form className="cart mb-0 d-flex justify-content-between align-items-center" method="post" enctype='multipart/form-data'>
												<div className="quantity clearfix">
													<input type="button" value="-" className="minus"/>
													<input type="number" step="1" min="1" name="quantity" value="1" title="Qty" className="qty" />
													<input type="button" value="+" className="plus"/>
												</div>
												<button type="submit" className="add-to-cart button m-0">Add to cart</button>
											</form>

											<div className="line"></div>

											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!</p>
											<p>Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.</p>
											<ul className="iconlist">
												<li><i className="icon-caret-right"></i> Dynamic Color Options</li>
												<li><i className="icon-caret-right"></i> Lots of Size Options</li>
												<li><i className="icon-caret-right"></i> 30-Day Return Policy</li>
											</ul>

										
											<div className="card product-meta">
												<div className="card-body">
													<span itemprop="productID" className="sku_wrapper">SKU: <span className="sku">8465415</span></span>
													<span className="posted_in">Category: <a href="#" rel="tag">Category1</a>.</span>
													<span className="tagged_as">Tags: <a href="#" rel="tag">Sample Product</a>, <a href="#" rel="tag">Health</a>, <a href="#" rel="tag">Vacine</a>, <a href="#" rel="tag">Exercise</a>.</span>
												</div>
											</div>

											
											<div className="si-share border-0 d-flex justify-content-between align-items-center mt-4">
												<span>Share:</span>
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
											</div>

										</div>

										<div className="w-100"></div>

										<div className="col-12 mt-5">

											<div className="tabs clearfix mb-0" id="tab-1">

												<ul className="tab-nav clearfix">
													<li><a href="#tabs-1"><i className="icon-align-justify2"></i><span className="d-none d-md-inline-block"> Description</span></a></li>
													<li><a href="#tabs-2"><i className="icon-info-sign"></i><span className="d-none d-md-inline-block"> Additional Information</span></a></li>
													<li><a href="#tabs-3"><i className="icon-star3"></i><span className="d-none d-md-inline-block"> Reviews (2)</span></a></li>
												</ul>

												<div className="tab-container">

													<div className="tab-content clearfix" id="tabs-1">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!</p>
														Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
													</div>
													<div className="tab-content clearfix" id="tabs-2">

														<table className="table table-striped table-bordered">
															<tbody>
																<tr>
																	<td>Size</td>
																	<td>Small, Medium &amp; Large</td>
																</tr>
																<tr>
																	<td>Color</td>
																	<td>Pink &amp; Black</td>
																</tr>
																<tr>
																	<td>Weight</td>
																	<td>4 Kg</td>
																</tr>
																<tr>
																	<td>Length</td>
																	<td>50 cm</td>
																</tr>
																<tr>
																	<td>Width</td>
																	<td>33 inches</td>
																</tr>
																<tr>
																	<td>Fabric</td>
																	<td>Metal </td>
																</tr>
																<tr>
																	<td>Warranty</td>
																	<td>3 Months</td>
																</tr>
															</tbody>
														</table>

													</div>
													<div className="tab-content clearfix" id="tabs-3">

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
																			<div className="comment-author">John Doe<span><a href="#" title="Permalink to this comment">April 24, 2021 at 10:46AM</a></span></div>
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

															<div className="modal fade" id="reviewFormModal" tabindex="-1" role="dialog" aria-labelledby="reviewFormModalLabel" aria-hidden="true">
																<div className="modal-dialog">
																	<div className="modal-content">
																		<div className="modal-header">
																			<h4 className="modal-title" id="reviewFormModalLabel">Submit a Review</h4>
																			<button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"></button>
																		</div>
																		<div className="modal-body">
																			<form className="row mb-0" id="template-reviewform" name="template-reviewform" action="#" method="post">

																				<div className="col-6 mb-3">
																					<label for="template-reviewform-name">Name <small>*</small></label>
																					<div className="input-group">
																						<div className="input-group-text"><i className="icon-user"></i></div>
																						<input type="text" id="template-reviewform-name" name="template-reviewform-name" value="" className="form-control required" />
																					</div>
																				</div>

																				<div className="col-6 mb-3">
																					<label for="template-reviewform-email">Email <small>*</small></label>
																					<div className="input-group">
																						<div className="input-group-text">@</div>
																						<input type="email" id="template-reviewform-email" name="template-reviewform-email" value="" className="required email form-control" />
																					</div>
																				</div>

																				<div className="w-100"></div>

																				<div className="col-12 mb-3">
																					<label for="template-reviewform-rating">Rating</label>
																					<select id="template-reviewform-rating" name="template-reviewform-rating" className="form-select">
																						<option value="">-- Select One --</option>
																						<option value="1">1</option>
																						<option value="2">2</option>
																						<option value="3">3</option>
																						<option value="4">4</option>
																						<option value="5">5</option>
																					</select>
																				</div>

																				<div className="w-100"></div>

																				<div className="col-12 mb-3">
																					<label for="template-reviewform-comment">Comment <small>*</small></label>
																					<textarea className="required form-control" id="template-reviewform-comment" name="template-reviewform-comment" rows="6" cols="30"></textarea>
																				</div>

																				<div className="col-12">
																					<button className="button button-3d m-0" type="submit" id="template-reviewform-submit" name="template-reviewform-submit" value="submit">Submit Review</button>
																				</div>

																			</form>
																		</div>
																		<div className="modal-footer">
																			<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
																		</div>
																	</div>
																</div>
															</div>
														

														</div>

													</div>

												</div>

											</div>

											<div className="line"></div>

											<div className="row">
												<div className="col-md-4 d-none d-md-block">
													<a href="#" title="Brand Logo"><img src="images/shop/brand2.jpg" alt="Brand Logo"/></a>
												</div>

												<div className="col-md-8">

													<div className="row gutter-30">

														<div className="col-lg-6">
															<div className="feature-box fbox-plain fbox-dark fbox-sm">
																<div className="fbox-icon">
																	<i className="icon-thumbs-up2"></i>
																</div>
																<div className="fbox-content">
																	<h3>100% Original Brands</h3>
																	<p className="mt-0">We guarantee you the sale of Original Brands with warranties.</p>
																</div>
															</div>
														</div>

														<div className="col-lg-6">
															<div className="feature-box fbox-plain fbox-dark fbox-sm">
																<div className="fbox-icon">
																	<i className="icon-credit-cards"></i>
																</div>
																<div className="fbox-content">
																	<h3>Lots of Payment Options</h3>
																	<p className="mt-0">We accept Visa, MasterCard and American Express &amp; of-course PayPal.</p>
																</div>
															</div>
														</div>

														<div className="col-lg-6">
															<div className="feature-box fbox-plain fbox-dark fbox-sm">
																<div className="fbox-icon">
																	<i className="icon-truck2"></i>
																</div>
																<div className="fbox-content">
																	<h3>Free Express Shipping</h3>
																	<p className="mt-0">Free Delivery to 100+ Locations Worldwide on orders above $40.</p>
																</div>
															</div>
														</div>

														<div className="col-lg-6">
															<div className="feature-box fbox-plain fbox-dark fbox-sm">
																<div className="fbox-icon">
																	<i className="icon-undo"></i>
																</div>
																<div className="fbox-content">
																	<h3>30-Days Returns Policy</h3>
																	<p className="mt-0">Return or exchange items purchased within 30 days for Free.</p>
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

							<div className="line"></div>

							<div className="w-100">

								<h4>Related Products</h4>

								<div className="owl-carousel product-carousel carousel-widget" data-margin="30" data-pagi="false" data-autoplay="5000" data-items-xs="1" data-items-md="2" data-items-lg="3" data-items-xl="4">

									<div className="oc-item">
										<div className="product">
											<div className="product-image">
												<a href="#"><img src="images/shop/dress/1.jpg" alt="Checked Short Dress"/></a>
												<a href="#"><img src="images/shop/dress/1-1.jpg" alt="Checked Short Dress"/></a>
												<div className="sale-flash badge bg-success p-2">50% Off*</div>
												<div className="bg-overlay">
													<div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
														<a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
														<a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
													</div>
													<div className="bg-overlay-bg bg-transparent"></div>
												</div>
											</div>
											<div className="product-desc center">
												<div className="product-title"><h3><a href="#">Sample product</a></h3></div>
												<div className="product-price"><del>$24.99</del> <ins>$12.49</ins></div>
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-half-full"></i>
												</div>
											</div>
										</div>
									</div>

									<div className="oc-item">
										<div className="product">
											<div className="product-image">
												<a href="#"><img src="images/shop/pants/1-1.jpg" alt="Slim Fit Chinos"/></a>
												<a href="#"><img src="images/shop/pants/1.jpg" alt="Slim Fit Chinos"/></a>
												<div className="bg-overlay">
													<div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
														<a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
														<a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
													</div>
													<div className="bg-overlay-bg bg-transparent"></div>
												</div>
											</div>
											<div className="product-desc center">
												<div className="product-title"><h3><a href="#">Sample product</a></h3></div>
												<div className="product-price">$39.99</div>
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-half-full"></i>
													<i className="icon-star-empty"></i>
												</div>
											</div>
										</div>
									</div>

									<div className="oc-item">
										<div className="product">
											<div className="product-image">
												<a href="#"><img src="images/shop/shoes/1-1.jpg" alt="Dark Brown Boots"/></a>
												<a href="#"><img src="images/shop/shoes/1.jpg" alt="Dark Brown Boots"/></a>
												<div className="bg-overlay">
													<div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
														<a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
														<a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
													</div>
													<div className="bg-overlay-bg bg-transparent"></div>
												</div>
											</div>
											<div className="product-desc center">
												<div className="product-title"><h3><a href="#">Sample product</a></h3></div>
												<div className="product-price">$49</div>
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-empty"></i>
													<i className="icon-star-empty"></i>
												</div>
											</div>
										</div>
									</div>

									<div className="oc-item">
										<div className="product">
											<div className="product-image">
												<a href="#"><img src="images/shop/dress/2.jpg" alt="Light Blue Denim Dress"/></a>
												<a href="#"><img src="images/shop/dress/2-2.jpg" alt="Light Blue Denim Dress"/></a>
												<div className="bg-overlay">
													<div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
														<a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
														<a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
													</div>
													<div className="bg-overlay-bg bg-transparent"></div>
												</div>
											</div>
											<div className="product-desc center">
												<div className="product-title"><h3><a href="#">Sample product</a></h3></div>
												<div className="product-price">$19.95</div>
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-empty"></i>
												</div>
											</div>
										</div>
									</div>

									<div className="oc-item">
										<div className="product">
											<div className="product-image">
												<a href="#"><img src="images/shop/sunglasses/1.jpg" alt="Unisex Sunglasses"/></a>
												<a href="#"><img src="images/shop/sunglasses/1-1.jpg" alt="Unisex Sunglasses"/></a>
												<div className="sale-flash badge bg-success p-2">Sale!</div>
												<div className="bg-overlay">
													<div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
														<a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
														<a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
													</div>
													<div className="bg-overlay-bg bg-transparent"></div>
												</div>
											</div>
											<div className="product-desc center">
												<div className="product-title"><h3><a href="#">Sample product</a></h3></div>
												<div className="product-price"><del>$19.99</del> <ins>$11.99</ins></div>
												<div className="product-rating">
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star3"></i>
													<i className="icon-star-empty"></i>
													<i className="icon-star-empty"></i>
												</div>
											</div>
										</div>
									</div>

								</div>

							</div>

						</div>

						<div className="sidebar col-lg-3">
							<div className="sidebar-widgets-wrap">

								<div className="widget widget_links clearfix">

									<h4>Shop Categories</h4>
									<ul>
										<li><a href="#">Category1</a></li>
										<li><a href="#">Category2</a></li>
										<li><a href="#">Category3</a></li>
										<li><a href="#">Category4</a></li>
										<li><a href="#">Category5</a></li>
										<li><a href="#">Category6</a></li>
										<li><a href="#">Category7</a></li>
									</ul>

								</div>

								<div className="widget clearfix">

									<h4>Recent Items</h4>
									<div className="posts-sm row col-mb-30" id="recent-shop-list-sidebar">
										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p2.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$29.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p4.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$23.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p2.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$19.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>

								<div className="widget clearfix">

									<h4>Last Viewed Items</h4>
									<div className="posts-sm row col-mb-30" id="last-viewed-shop-list-sidebar">
										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p3.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$15</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p1.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$19</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p4.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$34.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>

								<div className="widget clearfix">

									<h4>Popular Items</h4>
									<div className="posts-sm row col-mb-30" id="popular-shop-list-sidebar">
										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p3.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$21</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p2.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$19.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="entry col-12">
											<div className="grid-inner row g-0">
												<div className="col-auto">
													<div className="entry-image">
														<a href="#"><img src="images/p1.jpg" alt="Image"/></a>
													</div>
												</div>
												<div className="col ps-3">
													<div className="entry-title">
														<h4><a href="#">Sample product</a></h4>
													</div>
													<div className="entry-meta no-separator">
														<ul>
															<li className="color">$14.99</li>
															<li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>


								<div className="widget subscribe-widget clearfix">

									<h4>Subscribe For Latest Offers</h4>
									<h5>Subscribe to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
									<form action="#" className="my-0">
										<div className="input-group mx-auto">
											<input type="text" className="form-control" placeholder="Enter your Email" required=""/>
											<button className="btn btn-success" type="submit"><i className="icon-email2"></i></button>
										</div>
									</form>
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
export default Productdetail;