import React, { Component } from "react";
import PropTypes from 'prop-types';

import Commerce from "@chec/commerce.js";
//import stripHtml from 'string-strip-html';
const commerce = new Commerce(
 "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);
 

class RecentlyProductItem extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
      cart: {},
        };
       // this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart() {
     // console.log("2true")
      this.props.onAddToCart(this.props.product.id, 1);
       /* commerce.cart.add(this.props.product.id, 1).then((item) => {
          this.setState({ cart: item.cart })
          console.log("3true");
         // this.props.history.push('/Cartdetails'); 
           
        }).catch((error) => {
          console.error('There was an error adding the item to the cart', error);
        });*/
       // const { cart} = this.state;
       // console.log("4",cart);
     // window.open('/Cartdetails', '_blank');
      this.props.history.push('/Cartdetails', '_blank');
    }

  render() {
    const { product } = this.props
   // const { result } = stripHtml(product.description);

    return (
<div className="entry col-12">

<div className="grid-inner row g-0">
              <div className="col-auto">
                <div className="entry-image">
                  <a href="store.html"><img src={product.media.source} alt={product.name}/></a>
                </div>
              </div>
              <div className="col ps-3">
                <div className="entry-title">
                  <h4><a href="store.html">{product.name}</a></h4>
                </div>
                <div className="entry-meta no-separator">
                  <ul>
                    <li className="color">{product.price.formatted_with_symbol}</li>
                    <li><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
  );
  }
};
export default RecentlyProductItem;
RecentlyProductItem.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    handleAddToCart: PropTypes.func,
 };