import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import Addcart from "./Addcart";
import { NavLink } from "react-router-dom";
import Commerce from "@chec/commerce.js";
//import stripHtml from 'string-strip-html';
const commerce = new Commerce(
  "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);
 

class Prod extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
      cart: {},
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
   
    handleAddToCart() {
     // console.log("2true")
    //  this.props.onAddToCart(this.props.product.id);
       commerce.cart.add(this.props.product.id, 1).then((item) => {
          this.setState({ cart: item.cart })
       //   console.log("3true");
         this.props.history.push('/Cartoption'); 
           
        }).catch((error) => {
          console.error('There was an error adding the item to the cart', error);
        });
       const { cart} = this.state;
       // console.log("4",cart);
    // window.open('/TestCart', '_blank');
      this.props.history.push('/Addcart', '_blank');
    }

  render() {
    const { product } = this.props
   // const { result } = stripHtml(product.description);
   
    return (
      
<div className="col-sm-6 col-lg-4"> 
  <div className="card shadow-sm bg-transparent h-shadow all-ts h-translatey-sm">
								 <img src={product.media.source} className="card-img-top" alt={product.name}/>
								<div className="card-body">
									{/* <span className="badge bg-info text-dark mb-2 fw-normal px-2 py-1">Health</span> */}
									<h4 className="mb-2">{product.name}</h4>
                  <p className="mb-4 op-07">Competently embrace dynamic intellectual capital.</p>
																	
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center bg-white py-3">
									<div>
										<h3 className="mb-0 h4 fw-semibold">{product.price.formatted_with_symbol}</h3>
										<span className="op-06">{product.category}</span>
									</div>
								 <NavLink to='/Cartoption'name="Add to cart"  className="product__btn button button-rounded "  onClick={this.handleAddToCart }>Add to Cart</NavLink>
               
								</div>
							</div>
              </div>
  );
  }
};
export default Prod;
Prod.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    handleAddToCart: PropTypes.func,
 };