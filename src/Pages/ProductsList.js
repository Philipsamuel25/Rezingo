import PropTypes from 'prop-types';
import ProgList from './ProgList';
import React, {useState, useEffect} from 'react'

import {commerce} from "../lib/commerce";
import Products from '../components/Products/Products';
import Productdetail from './Productdetail'
const ProductsList = () => {

	// const commerce = new Commerce(
	// 	"pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
	//   );
    const  [products, setProducts] = useState([]);
    const [cart,setCart] = useState({});
    // const [order,setOrder] = useState({})
    // const [errorMessage, setErrorMessage] = useState('')

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart =async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId,quantity);
        setCart(cart);
    }
    // const refreshCart = async ()=>{
    //     const newCart = await commerce.cart.refresh();

    //     setCart(newCart);
    // }

    // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    //     try {
    //         const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

    //         setOrder(incomingOrder);

    //         refreshCart();
    //     } catch (error) {
    //         setErrorMessage(error.data.error.message);

    //     }
    // };

    // const handleUpdateCartQty = async (productId, quantity) => {
    //     const {cart} = await commerce.cart.update(productId, {quantity});

    //     setCart(cart);
    // }

    // const handleRemoveFromCart = async (productId) => {
    //     const {cart} = await commerce.cart.remove(productId);

    //     setCart(cart);
    // }

    // const handleEmptyCart = async () => {
    //     const {cart} = await commerce.cart.empty();
    //     setCart(cart);
    // }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[]);


// class ProductsList extends Component { 
	 
     
  
    return (
		<>
		<section className='content section'>
				<div className="container content-wrap" id="program">
    <div className="products" > 
		<div className="container row clearfix">
		<ProgList/>
		<ul className="pagination mt-5 pagination-circle justify-content-center">
						<li className="page-item disabled"><a className="page-link" href="#"><i className="icon-angle-left"></i></a></li>
						<li className="page-item active"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item"><a className="page-link" href="#">4</a></li>
						<li className="page-item"><a className="page-link" href="#">5</a></li>
						<li className="page-item"><a className="page-link" href="#"><i className="icon-angle-right"></i></a></li>
					</ul>
</div></div></div></section>

<section className='content'>
					<div className="promo parallax promo-full bottommargin-lg" style={{backgroundImage: 'url(images/3.jpg)'}} data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
					<div className="container clearfix">
						<div className="row align-items-center">
							<div className="col-12 col-lg">
								<h3>Get <span>30%</span> off on orders of $29 or more. Use Coupon: <span>SHOP30</span></h3>
								{/* <span>Sale available on selected Designer Brands that include Drinks, Food product, Accessories &amp; Watches.</span> */}
							</div>
							<div className="col-12 col-lg-auto mt-4 mt-lg-0">
								<a href="/#Productdetail" className="button button-large button-circle m-0">Start Shopping</a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="container content-wrap" id="products">
    <div className="products"> 
		<div className="container row clearfix">

	

		<Products products={products}
                      onAddToCart={handleAddToCart}/>
			{/* {products.map((product) =>(
			<Prod
			key={product.id}
			product={product}
			{...this.props}
		/>
	))} */}
                
		{/* <div className="row justify-content-center col-mb-50">
					<div className="col-sm-6 col-lg-4">
					              <div className="fancy-title title-border">
								  <h4>Recently Arrived</h4>
										</div>
								<div className="posts-sm row col-mb-30" id="recent-shop-list-sidebar">		
							{products.map((product) => (
									<RecentlyProductItem
										key={product.id}
										product={product}
										
									/>
								))}
								</div>
						</div>
						<div className="col-sm-6 col-lg-4">
					              <div className="fancy-title title-border">
								  <h4>Popular Products</h4>
										</div>
								<div className="posts-sm row col-mb-30" id="recent-shop-list-sidebar">		
							{products.map((product) => (
									<PopularProductItem
										key={product.id}
										product={product}
										
									/>
								))}
								</div>
						</div>
						<div className="col-sm-6 col-lg-4">
					              <div className="fancy-title title-border">
								  <h4>Recommended for You</h4>
										</div>
								<div className="posts-sm row col-mb-30" id="recent-shop-list-sidebar">		
							{products.map((product) => (
									<RecommendedProductItem
										key={product.id}
										product={product}
										
									/>
								))}
								</div>
						</div>	
						 	
					</div>			 */}
						 
				</div>			 
						 <div className="clear"></div>
						 {/* <div className="line"></div> */}
</div>	</div>
</section>
</>
  )
}


export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  onAddToCart: PropTypes.func,
};