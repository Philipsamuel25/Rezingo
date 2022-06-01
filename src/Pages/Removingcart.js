import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



class Removingcart extends Component {
	 
    constructor(props) {
        super(props);

        this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    handleUpdateCartQty(lineItemId, quantity) {
        this.props.onUpdateCartQty(lineItemId, quantity);
    }

    handleRemoveFromCart(lineItemId) {



		confirmAlert({
			customUI: ({ onClose }) => {
			  return (
				<div className='custom-ui'>
				  <h1>Remove item</h1>
				  <p>Are you sure you want to remove this item?</p>
				  <div className="button_wrap">
				  <button onClick={onClose}>Cancel</button>
				  <button
					onClick={() => {
						this.props.onRemoveFromCart(lineItemId);
					  onClose();
					}}
				  >
					Remove
					
				  </button>
				  </div>
				</div>
			  );
			}
		  });
        
    }
	 
    render() {
        const { item } = this.props;
        console.log(item,"item")
		
        return (

			
 
	 <div> 
			{item.map((item)=> (
				<table className="table cart mb-5">
				<thead>
					<tr>
						<th className="cart-product-remove">&nbsp;</th>
						<th className="cart-product-thumbnail">&nbsp;</th>
						<th className="cart-product-name">Product</th>
						<th className="cart-product-price">Unit Price</th>
						<th className="cart-product-quantity">Quantity</th>
						<th className="cart-product-subtotal">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr className="cart_item">
						<td className="cart-product-remove">
							<a href="#" className="remove" title="Remove this item"><i className="icon-trash2"></i></a>
						</td>

						<td className="cart-product-thumbnail">
							<a href="#"><img width="64" height="64" src={item.media.source} alt={item.name} /></a>
						</td>

						<td className="cart-product-name">
							<a href="#">{item.name}</a>
						</td>

						<td className="cart-product-price">
							<span className="amount">{item.line_total.formatted_with_symbol}</span>
						</td>

						<td className="cart-product-quantity">
							<div className="quantity">
							<div className="value-button" id="decrease" onClick={() => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)} value="Decrease Value">-</div>
                                  <div className="qtyclass" >{item.quantity}</div>
								  <div className="value-button" id="increase"onClick={() => this.handleUpdateCartQty(item.id, item.quantity + 1)} value="Increase Value">+</div>
			 			
							</div>
						</td>

						<td className="cart-product-subtotal">
							<span className="amount">$39.98</span>
						</td>
					</tr>
					
					<tr className="cart_item">
						<td colspan="6">
							<div className="row justify-content-between py-2 col-mb-30">
								<div className="col-lg-auto ps-lg-0">
									<div className="row">
										<div className="col-md-8">
											<input type="text" value="" className="sm-form-control text-center text-md-start" placeholder="Enter Coupon Code.." />
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<a href="#" className="button button-3d button-black m-0">Apply Coupon</a>
										</div>
									</div>
								</div>
								<div className="col-lg-auto pe-lg-0">
									<a href="store.html" className="button button-3d m-0">More Product</a>
									<a href="checkout.html" className="button button-3d mt-2 mt-sm-0 me-0">Proceed to Checkout</a>
								</div>
							</div>
						</td>
					</tr>
				</tbody>

			</table>
				// <div className="cart-body">
				// 	<div className="cart-divi">
				// 		<div className="cart-row">
				// 		<div><img src={item.media.source} alt={item.name}/></div>
				// 		<div className="cart_row_text">
				// 			<h4>
				// 			{item.name}
				// 			</h4>
							 
				// 			<div>
				// 				<span>{item.line_total.formatted_with_symbol}</span>
								 
				// 			</div>
							 
				// 		</div>
				// 		</div>
				// 		<div className="cart_add">
				// 			<div className="cart_plus">
				// 				<form>
				// 				  <div className="value-button" id="decrease" onClick={() => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)} value="Decrease Value">-</div>
                //                  <div className="qtyclass" >{item.quantity}</div>
				// 				  <div className="value-button" id="increase"onClick={() => this.handleUpdateCartQty(item.id, item.quantity + 1)} value="Increase Value">+</div>
				// 			</form>
				// 			</div>
				// 			<div className="cart_text" onClick={() => this.handleRemoveFromCart(item.id)} > 
				// 				<h4>Remove</h4>
				// 			</div>
				// 		</div>
				// 	</div>
				 
					 
				// </div>
			 
			 ))}
 

 </div>
 
        );
    };
};

export default Removingcart;

Removingcart.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {}
 };