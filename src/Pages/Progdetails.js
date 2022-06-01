
import React, { Component } from 'react';
import {location, Link,NavLink} from 'react-router-dom';
import New from './New'
import Demo from './Demo'
// import ProgList from './ProgList';

class Progdetails extends Component {
    
    constructor(props) {
        super(props)   
        this.state = {
          
            
           records:[]
           
           
        }

    }
    

    componentDidMount() {
        let programid = JSON.parse(localStorage.getItem("programId"));
        console.log(programid);
        fetch(`https://rez-castle-app-prd-eastus.azurewebsites.net/api/practice/${programid}`)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                 
                })
                 console.log(records)
            })
            .catch(error => console.log(error))
    }

    handleClick({currentTarget}) {    
        console.log(currentTarget.value) // e.currentTarget.value would be equivalent
        localStorage.setItem('programId',currentTarget.value);
        // return currentTarget.value;
      }
    render() {
        const sections2 = [
            {
              title: 'Tab 1',
              content: 'Tab 1 content'
            //   content: <Tab image='images/1.jpg' text='This is in tab 1. It is a whole other component! Entire components can be passed down into each tab.' />
            },
            {
              title: 'Tab 2',
              content: 'Tab 2 content'
            },
            {
              title: 'Tab 3',
              content: 'Tab 3 content'
            }
          ];
      
      
      
        return (
            <>
         
			
       
         


{this.state.records.map((item, i) => (      

<section id="content"  >
<div className="container1 ps-3" id="page-title" key={i}>
  
    <h1>{item.title}</h1>

    <ol className="breadcrumb ps-3">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Programe</a></li>
        <li className="breadcrumb-item active" aria-current="page">{item.title}</li>
    </ol>

</div>

<div className="content-wrap" style={{overflow: "visible"}} >
    <div className="container clearfix">

        <div className="single-product">
            <div className="product">
                <div className="row gutter-40">

                    <div className="col-md-6">

                 
                        <div className="position-relative" data-lightbox="gallery">
                            <div className="sale-flash badge bg-info p-2">LEVEL 1</div>
                            <a className="mb-3 d-block" href={item.logo} title={item.logo} data-lightbox="gallery-item"><img src={item.logo} alt={item.title}/></a>
                            {/* <a className="mb-3 d-block" href="images/shop/prgm1.jpg" title="Gut Health Programe 1" data-lightbox="gallery-item"><img src="images/shop/prgm1.jpg" alt="Gut Health Programe 1"/></a>
                            <a className="mb-3 d-block" href="images/shop/prgm1.jpg" title="Gut Health Programe 1" data-lightbox="gallery-item"><img src="images/shop/prgm1.jpg" alt="Gut Health Programe 1"/></a> */}
                        </div>
                    </div>

                    <div className="col-md-6 product-desc position-lg-sticky h-100">

                        <div className="d-flex align-items-center justify-content-between">

                          
                            {/* <div className="product-price">Free!!</div> */}
                            <button type="submit" className="add-to-cart button m-0" ><NavLink to='/Login'>Entroll  Now</NavLink></button>
                        
                            <div className="product-rating">
                                <i className="icon-star3"></i>
                                <i className="icon-star3"></i>
                                <i className="icon-star3"></i>
                                <i className="icon-star-half-full"></i>
                                <i className="icon-star-empty"></i>
                            </div>

                        </div>

                        <div className="line"></div>

{/*                    
                        <form className="cart mb-0 d-flex justify-content-between align-items-center" method="post" encType='multipart/form-data'>
                            <div className="quantity clearfix">
                                <input type="button" defaultValue="-" className="minus"/>
                                <input type="number" step="1" min="1" name="quantity" defaultValue="1" title="Qty" className="qty" />
                                <input type="button" defaultValue="+" className="plus"/>
                            </div>
                            <button type="submit" className="add-to-cart button m-0">Entroll  Now</button>
                        </form> */}
                        <div className="entry pt-4 m-0">
										<div className="grid-inner row g-0">
											<div className="col-auto">
												<div className="entry-image">
													<a href="#"><img src="images/small/1.jpg" alt="Image" style={{maxWidth:"100px"}}/></a>
												</div>
											</div>
											<div className="col ps-3">
												<div className="entry-title">
													<h3><Link to="/Practice">{item.name}</Link></h3>
												</div>
												<div className="entry-meta">
													
														<p>{item.title}
                                                        <br/>
                                                        <h5><Link to="/Practice" className='color'>View Details</Link></h5> 
                                                        </p>
                                                          
                                                      

                                                       
												
                                                   
                                                  
												</div>
											</div>
										</div>
									</div>

                        <div className="line"></div>

                   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor! Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.</p>
                        <ul className="iconlist">
                            <li><i className="icon-caret-right"></i> eaque ex quae laboriosam</li>
                            <li><i className="icon-caret-right"></i> dolor sit amet</li>
                            <li><i className="icon-caret-right"></i> consectetur adipisicing elit</li>
                        </ul>

                      
                        <div className="card product-meta">
                            <div className="card-body">
                            <div className="entry-meta">
                                    <ul>
                                        <li><span className="badge bg-info text-dark py-2 px-4">Level 1</span></li>
                                        <li><a href="#"><i className="icon-time"></i>Daily 60 mins</a></li>
                                        <li><a href="#"><i className="icon-calendar3"></i> 60 Days</a></li>
                                    </ul>
                                </div>
                            
                            
                            </div>
                        </div>
<br />
<New />

     
                      
                        <div className="si-share d-flex justify-content-between align-items-center mt-4">
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
                                <a href="#" className="social-icon si-borderless si-instagram">
                                    <i className="icon-instagram"></i>
                                    <i className="icon-instagram"></i>
                                </a>
                                {/* <a href="#" className="social-icon si-borderless si-watsapp">
                                    <i className="icon-watsapp"></i>
                                    <i className="icon-watsapp"></i>
                                </a> */} 
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

                    <div className="modal fade" id="reviewFormModal" tabIndex="-1" role="dialog" aria-labelledby="reviewFormModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="reviewFormModalLabel">Submit a Review</h4>
                                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="row mb-0" id="template-reviewform" name="template-reviewform" action="#" method="post">

                                        <div className="col-6 mb-3">
                                            <label htmlFor="template-reviewform-name">Name <small>*</small></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="icon-user"></i></div>
                                                <input type="text" id="template-reviewform-name" name="template-reviewform-name" defaultValue="" className="form-control required" />
                                            </div>
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label htmlFor="template-reviewform-email">Email <small>*</small></label>
                                            <div className="input-group">
                                                <div className="input-group-text">@</div>
                                                <input type="email" id="template-reviewform-email" name="template-reviewform-email" defaultValue="" className="required email form-control" />
                                            </div>
                                        </div>

                                        <div className="w-100"></div>

                                        <div className="col-12 mb-3">
                                            <label htmlFor="template-reviewform-rating">Rating</label>
                                            <select id="template-reviewform-rating" name="template-reviewform-rating" className="form-select">
                                                <option defaultValue="">-- Select One --</option>
                                                <option defaultValue="1">1</option>
                                                <option defaultValue="2">2</option>
                                                <option defaultValue="3">3</option>
                                                <option defaultValue="4">4</option>
                                                <option defaultValue="5">5</option>
                                            </select>
                                        </div>

                                        <div className="w-100"></div>

                                        <div className="col-12 mb-3">
                                            <label htmlFor="template-reviewform-comment">Comment <small>*</small></label>
                                            <textarea className="required form-control" id="template-reviewform-comment" name="template-reviewform-comment" rows="6" cols="30"></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button className="button button-3d m-0" type="submit" id="template-reviewform-submit" name="template-reviewform-submit" defaultValue="submit">Submit Review</button>
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

        {/* <div className="line"></div> */}

        {/* <div className="w-100">

          <h4>Related Products</h4> 

            <div className="owl-carousel product-carousel carousel-widget" data-margin="30" data-pagi="false" data-autoplay="5000" data-items-xs="1" data-items-md="2" data-items-lg="3" data-items-xl="4">

                <div className="oc-item" style={{display:"none"}}>
                    <div className="product">
                        <div className="product-image">
                            <a href="#"><img src="images/shop/product1.jpg" alt="Product"/></a>
                            <a href="#"><img src="images/shop/product11.jpg" alt="Product"/></a>
                            <div className="bg-overlay">
                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
                                    <a href="#" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
                                </div>
                                <div className="bg-overlay-bg bg-transparent"></div>
                            </div>
                        </div>
                        <div className="product-desc center">
                            <div className="product-title"><h3><a href="product.html">Product Sample</a></h3></div>
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

                
                <div className="oc-item" style={{display:"none"}}>
                    <div className="product">
                        <div className="product-image">
                            <a href="#"><img src="images/shop/product1.jpg" alt="Product"/></a>
                            <a href="#"><img src="images/shop/product11.jpg" alt="Product"/></a>
                            <div className="bg-overlay">
                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
                                    <a href="#" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
                                </div>
                                <div className="bg-overlay-bg bg-transparent"></div>
                            </div>
                        </div>
                        <div className="product-desc center">
                            <div className="product-title"><h3><a href="product.html">Product Sample</a></h3></div>
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

            
                <div className="oc-item" style={{display:"none"}}>
                    <div className="product">
                        <div className="product-image">
                            <a href="#"><img src="images/shop/product1.jpg" alt="Product"/></a>
                            <a href="#"><img src="images/shop/product11.jpg" alt="Product"/></a>
                            <div className="bg-overlay">
                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
                                    <a href="#" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
                                </div>
                                <div className="bg-overlay-bg bg-transparent"></div>
                            </div>
                        </div>
                        <div className="product-desc center">
                            <div className="product-title"><h3><a href="product.html">Product Sample</a></h3></div>
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

            
                <div className="oc-item" style={{display:"none"}}>
                    <div className="product">
                        <div className="product-image">
                            <a href="#"><img src="images/shop/product1.jpg" alt="Product"/></a>
                            <a href="#"><img src="images/shop/product11.jpg" alt="Product"/></a>
                            <div className="bg-overlay">
                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
                                    <a href="#" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
                                </div>
                                <div className="bg-overlay-bg bg-transparent"></div>
                            </div>
                        </div>
                        <div className="product-desc center">
                            <div className="product-title"><h3><a href="product.html">Product Sample</a></h3></div>
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

            
                <div className="oc-item" style={{display:"none"}}>
                    <div className="product">
                        <div className="product-image">
                            <a href="#"><img src="images/shop/product1.jpg" alt="Product"/></a>
                            <a href="#"><img src="images/shop/product11.jpg" alt="Product"/></a>
                            <div className="bg-overlay">
                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed="400">
                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-cart"></i></a>
                                    <a href="#" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand"></i></a>
                                </div>
                                <div className="bg-overlay-bg bg-transparent"></div>
                            </div>
                        </div>
                        <div className="product-desc center">
                            <div className="product-title"><h3><a href="product.html">Product Sample</a></h3></div>
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

            </div>

        </div> */}

    </div>
    
</div>
 
</section>
        ))}  
     </>
           
                     
            
        );
    }
}

export default Progdetails;