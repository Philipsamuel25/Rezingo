import React, {Component} from 'react'
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Commerce from "@chec/commerce.js";
import NavBar from '../components/NavBar/NavBar';

const commerce = new Commerce(
	"pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
	
  );
  
class Header extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		products: [],
	cart: {},
	isCartVisible: false,
	order: this.loadOrderFromLocalStorage() ?? {},
	  }
	 // this.handleClick = this.handleClick.bind(this);
	  this.handleAddToCart = this.handleAddToCart.bind(this); 
	  this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
	  this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
	  this.handleEmptyCart = this.handleEmptyCart.bind(this);
	  this.toggleCart = this.toggleCart.bind(this);
	  this.handleCaptureCheckout = this.handleCaptureCheckout.bind(this);
	  this.refreshCart = this.refreshCart.bind(this); 
	  //this.handleClick=this.handleClick.bind(this);
		
	}
   
	
	componentDidMount() {
	  this.fetchProducts();
	  this.fetchCart(); 
	  this.loadOrderFromLocalStorage();
	};
  
	loadOrderFromLocalStorage() {
	  if (window.localStorage.getItem('order_receipt')) {
		return JSON.parse(window.localStorage.getItem('order_receipt'));
	  }
	}
	toggleCart() {
	  const { cart,isCartVisible } = this.state;
	  console.log("asas",cart.total_items);
	  if(cart.total_items===0)
	  {
  
	  
	  this.setState({ 
		isCartVisible: !isCartVisible,
	  });
	}
	else
	{
  
	// this.props.history.push('/Cartdetails'); 
	   //this.handleClick();
	}
  }
  handleClick() {
	console.log("true")
	  this.props.history.push('/Cartdetails'); 
	   
	
  }
	fetchProducts() {
	  commerce.products.list().then((products) => {
		this.setState({ products: products.data });
	  }).catch((error) => {
		console.log('There was an error fetching the products', error);
	  });
	}
  
	fetchCart() {
	  commerce.cart.retrieve().then((cart) => {
		this.setState({ cart });
	  }).catch((error) => {
		console.error('There was an error fetching the cart', error);
	  });
	}
	 
	 
	handleAddToCart(productId, quantity) {
	   
	  //console.log("true")
	   commerce.cart.add(productId, quantity).then((item) => {
		this.setState({ cart: item.cart })
		//this.props.history.push('/Cartdetails'); 
		 
	  }).catch((error) => {
		console.error('There was an error adding the item to the cart', error);
	  });
	  //this.props.history.push('/Cart');
	   
	}
	 
	 
	 
	handleUpdateCartQty(lineItemId, quantity) {
	  commerce.cart.update(lineItemId, { quantity }).then((resp) => {
		this.setState({ cart: resp.cart })
	  }).catch((error) => {
		console.log('There was an error updating the cart items', error);
	  });
	}
	handleRemoveFromCart(lineItemId) {
	  commerce.cart.remove(lineItemId).then((resp) => {
		this.setState({
		  cart: resp.cart
		})
	  }).catch((error) => {
		console.error('There was an error removing the item from the cart', error);
	  });
	}
	handleEmptyCart() {
	  commerce.cart.empty().then((resp) => {
		this.setState({ cart: resp.cart })
	  }).catch((error) => {
		console.error('There was an error emptying the cart', error);
	  });
	}
  
	handleCaptureCheckout(checkoutTokenId, newOrder) {
	  commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
		// Save the order into state
		this.setState({
		  order,
		});
		// Clear the cart
		this.refreshCart();
		// Send the user to the receipt 
		this.props.history.push('/confirmation');
		// Store the order in session storage so we can show it again if the
		// user refreshes the page!
		window.sessionStorage.setItem('order_receipt', JSON.stringify(order));   
	  }).catch((error) => {
		console.log('There was an error confirming your order', error);
	  });
	};
	
	/**
	 * Refreshes to a new cart
	 * https://commercejs.com/docs/sdk/cart#refresh-cart
	 */
	 refreshCart() {
	  commerce.cart.refresh().then((newCart) => {
		this.setState({ 
		  cart: newCart,
		});
	  }).catch((error) => {
		console.log('There was an error refreshing your cart', error);
	  });
	};
	// renderCartNav() {
			
	// 		const { 
	// 			products, 
	// 			cart,
	// 		   isCartVisible,
	// 			order
	// 		  } = this.state;
	// 		  const newCart =  commerce.cart.retrieve();
	// 		  console.log(newCart.total_items,"gh")
	// 		  console.log(cart.total_items,"klk5");
	// 		return (
		 
	// 	<>
    //                         <IconButton component={Link} to={"/cart"} aria-label={"Show Cart items"} color={"inherit"}>
    //                             <Badge badgeContent={newCart.total_items} color={"secondary"}>
    //                                 <ShoppingCart/>                                    
    //                             </Badge>
    //                         </IconButton>
	// 	</>
	//   )
	// }
	  
	render() {
	  const { 
		products, 
		cart,
	   isCartVisible,
		order
	  } = this.state;	
  return (    
<>
<div id="top-bar" className="text-center bg-color-2" style={{zIndex:"999",background:"#fff"}}>
			<div className="container clearfix">
				<h4 className="mb-0 h6 fst-normal py-4">TRY CLASSES FREE FOR 30 DAYS ON THE REZINGO APP. DOWNLOAD TODAY. <a href="https://play.google.com/store/apps/details?id=com.cloudandbeyond.rezingohealthApp" target="_blank" className="color fw-bold border-bottom border-width-2 border-color font-secondary ms-2">GET THE APP</a><i className="icon-chevron-right icon-stacked text-smaller color"></i></h4>
			</div>
		</div>

<header id="header" className="full-header transparent-header dark">

	<div id="header-wrap"  >
		<div className="container">
			<div className="header-row justify-content-lg-between">
				<div id="logo" className="me-lg-0 border-end-0">
				<h3 className="standard-logo mt-3" style={{color:'#fff'}}><Link to="/">Rezingo</Link></h3>
					
				</div>
				<div className="header-misc" style={{color:'#fff'}}>

					<div id="top-search" className="header-misc-icon">
						<a href="#" id="top-search-trigger1">
							<i className="icon-line-search"></i><i className="icon-line-cross"></i></a>
					</div>
					
					<div className="header-misc-icon ps-4">
					<NavLink to='/Login'><i className="icon-user"></i></NavLink>
					</div>

					{/* <div className="side-panel-trigger header-misc-icon ps-4"> */}
					<div className="header-misc-icon ps-4">
					<NavBar totalItems={cart.total_items}/> 
					
					
								{/* <a href="#"><i className="icon-line-bag"></i><span className="top-cart-number">5</span></a> */}
							</div>				
				
				</div>
				<div id="primary-menu-trigger">
					<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
				</div>				
				<nav className="primary-menu not-dark">

<ul className="menu-container border-end-0">
	<li className="menu-item"><NavLink className="menu-link" to="/"><div>Home</div></NavLink></li>
	<li className="menu-item">

	<a className="menu-link" href="#content"><div>About Rezingo</div></a>
		{/* <NavLink to="/whoweare" className="menu-link"><div> About Rezingo</div> </NavLink> */}
	</li>
	<li className="menu-item">
		
		<a className="menu-link" href="#program"><div>Get Started</div></a>
	</li>
		
	<li className="menu-item">
	<a className="menu-link" href="#products"><div>Store</div></a>
	{/* <NavLink to="/Store" className="menu-link"><div> Store</div> </NavLink> */}
	</li>
	
	<li className="menu-item">
		<a className="menu-link" href="#footer"><div> Contact</div> </a>
	</li>
	
</ul>

</nav>

				<form className="top-search-form" action="#" method="get">
					<input type="text" name="q" className="form-control" defaultValue="" placeholder="Type &amp; Hit Enter.." autoComplete="off"/>
				</form>

			</div>
		</div>
	</div>
	<div className="header-wrap-clone"></div>
</header>

        </>
  );
    }
}
export default Header;
