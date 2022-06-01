import React from "react";
import useStyles from './styles';

const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();
    return (

<>
		<section id="page-title">

			<div class="container clearfix">
				<h1>Store</h1>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item active"><a href="#">store</a></li>
					
				</ol>
			</div>

		</section>

		
		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">






					<div class="row gutter-40 col-mb-80">
					
						<div class="postcontent col-lg-9 order-lg-last">

							<div id="shop" class="shop row grid-container gutter-20" data-layout="fitRows">

								<div class="product col-md-4 col-sm-6 sf-dress">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/dress/1.jpg" alt="Checked Short Dress"/></a>
											<a href="#"><img src="images/shop/dress/1-1.jpg" alt="Checked Short Dress"/></a>
											<div class="sale-flash badge bg-secondary p-2">Out of Stock</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="include/ajax/shop-item.html" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price"><del>$24.99</del> <ins>$12.49</ins></div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-pants">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/pants/1-1.jpg" alt="Slim Fit Chinos"/></a>
											<a href="#"><img src="images/shop/pants/1.jpg" alt="Slim Fit Chinos"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="include/ajax/shop-item.html" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$39.99</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-shoes">
									<div class="grid-inner">
										<div class="product-image">
											<div class="fslider" data-arrows="false">
												<div class="flexslider">
													<div class="slider-wrap">
														<div class="slide"><a href="#"><img src="images/shop/shoes/1.jpg" alt="1"/></a></div>
														<div class="slide"><a href="#"><img src="images/shop/shoes/1-1.jpg" alt="2"/></a></div>
														<div class="slide"><a href="#"><img src="images/shop/shoes/1-2.jpg" alt="3"/></a></div>
													</div>
												</div>
											</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$49</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-empty"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-dress">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/dress/2.jpg" alt="x"/></a>
											<a href="#"><img src="images/shop/dress/2-2.jpg" alt="x"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$19.95</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-sunglasses">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/sunglasses/1.jpg" alt="w"/></a>
											<a href="#"><img src="images/shop/sunglasses/1-1.jpg" alt="w"/></a>
											<div class="sale-flash badge bg-success p-2 text-uppercase">Sale!</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price"><del>$19.99</del> <ins>$11.99</ins></div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-empty"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-tshirts">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/tshirts/1.jpg" alt="b"/></a>
											<a href="#"><img src="images/shop/tshirts/1-1.jpg" alt="b"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$9.99</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-watches">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/watches/1.jpg" alt="s"/></a>
											<a href="#"><img src="images/shop/watches/1-1.jpg" alt="s"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$129.99</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-shoes">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/shoes/2.jpg" alt="Men Grey Casual Shoes"/></a>
											<a href="#"><img src="images/shop/shoes/2-1.jpg" alt="Men Grey Casual Shoes"/></a>
											<div class="sale-flash badge bg-success p-2 text-uppercase">Sale!</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="#">Sample Prduct</a></h3></div>
											<div class="product-price"><del>$45.99</del> <ins>$39.49</ins></div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
												<i class="icon-star-empty"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-dress">
									<div class="grid-inner">
										<div class="product-image">
											<div class="fslider" data-arrows="false">
												<div class="flexslider">
													<div class="slider-wrap">
														<div class="slide"><a href="#"><img src="images/shop/dress/3.jpg" alt="s"/></a></div>
														<div class="slide"><a href="#"><img src="images/shop/dress/3-1.jpg" alt="s"/></a></div>
														<div class="slide"><a href="#"><img src="images/shop/dress/3-2.jpg" alt="ss"/></a></div>
													</div>
												</div>
											</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$39.49</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-empty"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-pants">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/pants/5.jpg" alt="c"/></a>
											<a href="#"><img src="images/shop/pants/5-1.jpg" alt="c"/></a>
											<div class="sale-flash badge bg-success p-2 text-uppercase">Sale!</div>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price"><del>$24.99</del> <ins>$21.99</ins></div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-half-full"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-sunglasses">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/sunglasses/2.jpg" alt="e"/></a>
											<a href="#"><img src="images/shop/sunglasses/2-1.jpg" alt="e"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="include/ajax/shop-item.html" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$13.49</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star-empty"></i>
											</div>
										</div>
									</div>
								</div>

								<div class="product col-md-4 col-sm-6 sf-tshirts">
									<div class="grid-inner">
										<div class="product-image">
											<a href="#"><img src="images/shop/tshirts/4.jpg" alt="r"/></a>
											<a href="#"><img src="images/shop/tshirts/4-1.jpg" alt="r"/></a>
											<div class="bg-overlay">
												<div class="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
													<a href="#" class="btn btn-dark me-2"><i class="icon-shopping-cart"></i></a>
													<a href="include/ajax/shop-item.html" class="btn btn-dark" data-lightbox="ajax"><i class="icon-line-expand"></i></a>
												</div>
												<div class="bg-overlay-bg bg-transparent"></div>
											</div>
										</div>
										<div class="product-desc">
											<div class="product-title"><h3><a href="product.html">Sample Prduct</a></h3></div>
											<div class="product-price">$11.49</div>
											<div class="product-rating">
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
												<i class="icon-star3"></i>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
						<div class="sidebar col-lg-3">
							<div class="sidebar-widgets-wrap">

								<div class="widget widget-filter-links">

									<h4>Select Category</h4>
									<ul class="custom-filter ps-2" data-container="#shop" data-active-class="active-filter">
										<li class="widget-filter-reset active-filter"><a href="#" data-filter="*">Clear</a></li>
										<li><a href="#" data-filter=".sf-dress">Category1</a></li>
										<li><a href="#" data-filter=".sf-tshirts">Category2</a></li>
										<li><a href="#" data-filter=".sf-pants">Category3</a></li>
										<li><a href="#" data-filter=".sf-sunglasses">Category4</a></li>
										<li><a href="#" data-filter=".sf-shoes">Category5</a></li>
										<li><a href="#" data-filter=".sf-watches">Category6</a></li>
									</ul>

								</div>

								<div class="widget widget-filter-links">

									<h4>Sort By</h4>
									<ul class="shop-sorting ps-2">
										<li class="widget-filter-reset active-filter"><a href="#" data-sort-by="original-order">Clear</a></li>
										<li><a href="#" data-sort-by="name">Name</a></li>
										<li><a href="#" data-sort-by="price_lh">Price: Low to High</a></li>
										<li><a href="#" data-sort-by="price_hl">Price: High to Low</a></li>
									</ul>

								</div>
								<div class="widget clearfix">

									<h4>Recent Items</h4>
									<div class="posts-sm row col-mb-30" id="recent-shop-list-sidebar">
										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p3.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product </a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$29.99</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-half-full"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p1.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product </a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$23.99</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-half-full"></i><i class="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p2.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product</a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$19.99</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-empty"></i><i class="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
								
								
								<div class="widget clearfix">

									<h4>Popular Items</h4>
									<div class="posts-sm row col-mb-30" id="popular-shop-list-sidebar">
										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p2.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product 3</a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$21</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-half-full"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p3.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product 2</a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$19.99</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-empty"></i><i class="icon-star-empty"></i></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class="entry col-12">
											<div class="grid-inner row g-0">
												<div class="col-auto">
													<div class="entry-image">
														<a href="#"><img src="images/p1.jpg" alt="Image"/></a>
													</div>
												</div>
												<div class="col ps-3">
													<div class="entry-title">
														<h4><a href="#">Sample Product 1</a></h4>
													</div>
													<div class="entry-meta no-separator">
														<ul>
															<li class="color">$14.99</li>
															<li><i class="icon-star3"></i><i class="icon-star3"></i><i class="icon-star-half-full"></i><i class="icon-star-empty"></i><i class="icon-star-empty"></i></li>
														</ul>
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
		</section>






             {/* <div className={classes.toolbar} /> 
             <Grid container justify={'center'} spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       
                        <Product product={product} key={product.id} onAddToCart={onAddToCart}/>
                       
                    </Grid>
                ))}
             </Grid> */}
     </>
        );

}

export default Products
