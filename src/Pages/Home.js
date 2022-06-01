import Features from './Features';
import ProductsList from './ProductsList';
import Commerce from "@chec/commerce.js";
import AppPreview from './AppPreivew';
import Whoweare from './Whoweare';
import React, {useState, useEffect} from 'react'

const commerce = new Commerce(
  "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
);
 
const Home = () =>  {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     products: [],
  // cart: {},
  // isCartVisible: false,
  // order: this.loadOrderFromLocalStorage() ?? {},
  //   }
  //  // this.handleClick = this.handleClick.bind(this);
  //   this.handleAddToCart = this.handleAddToCart.bind(this); 
  //   this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
  //   this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  //   this.handleEmptyCart = this.handleEmptyCart.bind(this);
  //   this.toggleCart = this.toggleCart.bind(this);
  //   this.handleCaptureCheckout = this.handleCaptureCheckout.bind(this);
  //   this.refreshCart = this.refreshCart.bind(this); 
  //   //this.handleClick=this.handleClick.bind(this);
      
  // }
 
  
  // componentDidMount() {
  //   this.fetchProducts();
  //   this.fetchCart(); 
  //   this.loadOrderFromLocalStorage();
  // };

  // loadOrderFromLocalStorage() {
  //   if (window.localStorage.getItem('order_receipt')) {
  //     return JSON.parse(window.localStorage.getItem('order_receipt'));
  //   }
  // }
  // toggleCart() {
  //   const { cart,isCartVisible } = this.state;
  //   console.log("asas",cart.total_items);
  //   if(cart.total_items===0)
  //   {

    
  //   this.setState({ 
  //     isCartVisible: !isCartVisible,
  //   });
  // }
  // else
  // {

  // this.props.history.push('/Cartdetails'); 
     //this.handleClick();
//   }
// // }
// handleClick() {
//   console.log("true")
//     this.props.history.push('/Cartdetails'); 
     
  
// }
//   fetchProducts() {
//     commerce.products.list().then((products) => {
//       this.setState({ products: products.data });
//     }).catch((error) => {
//       console.log('There was an error fetching the products', error);
//     });
//   }

//   fetchCart() {
//     commerce.cart.retrieve().then((cart) => {
//       this.setState({ cart });
//     }).catch((error) => {
//       console.error('There was an error fetching the cart', error);
//     });
//   }
   
   
  // handleAddToCart(productId, quantity) {
     
  //   //console.log("true")
  //    commerce.cart.add(productId, quantity).then((item) => {
  //     this.setState({ cart: item.cart })
      
  //     //this.props.history.push('/Cartdetails'); 
       
  //   }).catch((error) => {
  //     console.error('There was an error adding the item to the cart', error);
  //   });
  //   //this.props.history.push('/Cart');
     
  // }
   
   
   
  // handleUpdateCartQty(lineItemId, quantity) {
  //   commerce.cart.update(lineItemId, { quantity }).then((resp) => {
  //     this.setState({ cart: resp.cart })
  //   }).catch((error) => {
  //     console.log('There was an error updating the cart items', error);
  //   });
  // }
  // handleRemoveFromCart(lineItemId) {
  //   commerce.cart.remove(lineItemId).then((resp) => {
  //     this.setState({
  //       cart: resp.cart
  //     })
  //   }).catch((error) => {
  //     console.error('There was an error removing the item from the cart', error);
  //   });
  // }
  // handleEmptyCart() {
  //   commerce.cart.empty().then((resp) => {
  //     this.setState({ cart: resp.cart })
  //   }).catch((error) => {
  //     console.error('There was an error emptying the cart', error);
  //   });
  // }

  // handleCaptureCheckout(checkoutTokenId, newOrder) {
  //   commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
  //     // Save the order into state
  //     this.setState({
  //       order,
  //     });
  //     // Clear the cart
  //     this.refreshCart();
  //     // Send the user to the receipt 
  //     this.props.history.push('/confirmation');
  //     // Store the order in session storage so we can show it again if the
  //     // user refreshes the page!
  //     window.sessionStorage.setItem('order_receipt', JSON.stringify(order));   
  //   }).catch((error) => {
  //     console.log('There was an error confirming your order', error);
  //   });
  // };
  
  /**
   * Refreshes to a new cart
   * https://commercejs.com/docs/sdk/cart#refresh-cart
   */
  //  refreshCart() {
  //   commerce.cart.refresh().then((newCart) => {
  //     this.setState({ 
  //       cart: newCart,
  //     });
  //   }).catch((error) => {
  //     console.log('There was an error refreshing your cart', error);
  //   });
  // };
  // renderCartNav() {
  //   const { cart, isCartVisible } = this.state;


    // return (
       
    //   <></>
//       <div className="nav">
        
//         {cart.total_items===0 ?
       
      
//         <div className="nav__cart" onClick={this.toggleCart}>
//           {!isCartVisible ? (
//             <button className="nav__cart-open"   >
//               <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83"/>
//               {cart !== null ? <span>{cart.total_unique_items}</span> : ''}
//             </button>
//             ) : (
//               <button className="nav__cart-close">
//                 <FontAwesomeIcon size="1x" icon="times" color="white"/>
//               </button>
//             )}
//         </div> 
        
//  :
//  <div className="nav__cart"  >
//    <Link target="_blank"
//  className="cart__btn-checkout"
//  to="/Cartdetails"  
// >
//           {!isCartVisible ? (

//             <button className="nav__cart-open"   >
//               <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83"/>
//               {cart !== null ? <span>{cart.total_unique_items}</span> : ''}
//             </button>
//             ) : (
//               <button className="nav__cart-close">
//                 <FontAwesomeIcon size="1x" icon="times" color="white"/>
//               </button>
//             )}
//             </Link>
//         </div> 
//          }
 

  
//       </div>
     
           
          
  //   )
  // }
    
 
    // const { 
    //   products, 
    //   cart,
    //  isCartVisible,
    //   order
    // } = this.state;

    const  [, setProducts] = useState([]);
    const [,setCart] = useState({});
    //const [order,setOrder] = useState({})
    //const [errorMessage, setErrorMessage] = useState('')

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    // const handleAddToCart =async (productId, quantity) => {
    //     const {cart} = await commerce.cart.add(productId,quantity);
    //     setCart(cart);
    // }
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

  return (
    
    <div className="app">
        <Features/>     
      <Whoweare/> 
     
      
      <ProductsList  />
      <AppPreview/>
        </div>
  )
  }

export default Home;