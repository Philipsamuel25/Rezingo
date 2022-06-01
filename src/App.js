import React, {useState, useEffect} from 'react'
import {commerce} from "./lib/commerce";
import { Cart, Checkout,NavBar} from './components';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Store from './components/Products/Store';
//cart page 
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './account/Login'
import Progdetails from './Pages/Progdetails';
import Profile from './user/Profile';
import Register from './account/Register';
import ForgotPassword from './users/AddEdit';
// import LoginConfirmation from './Pages/LoginConfimation';
import Practice from './Pages/Practice';

import Sendmail from './Pages/sendmail';


//aaaa
import Testapi from './Pages/Testapi';

import { useRecoilValue } from 'recoil';

import { authAtom } from './_state';
import { Nav, Alert, PrivateRoute } from './_components';
import { history } from './_helpers';

import { Users } from './users';
import { Account } from './account';
import { render } from '@testing-library/react';
import NavItem from 'rsuite/esm/Nav/NavItem';




const App = () => {
    const  [products, setProducts] = useState([]);
    const [cart,setCart] = useState({});
    const [order,setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')


   //login page elements
   const auth = useRecoilValue(authAtom);


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
    const refreshCart = async ()=>{
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);

        }
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[]);

  

    return (
      
        <div className={'app-container' + (auth ? ' bg-light' : '')}>
        <Router history={history}>
            
      

            <Header totalItems={cart.total_items}/>

            <Switch>



           <Route exact path={"/Testapi"}>
               <Testapi />
               </Route>


                <PrivateRoute exact path="/Profile" component={Profile}/>
                <PrivateRoute path="/users" component={Users} />
                <Route path="/account" component={Account} />
                <Route exact path={"/"}>
                    <Home />
                    {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
                </Route>
                <Route exact path={"/cart"}>
                    <Cart cart={cart}
                          handleUpdateCartQty ={handleUpdateCartQty}
                          handleRemoveFromCart = {handleRemoveFromCart}
                          handleEmptyCart = {handleEmptyCart}
                    />
                </Route>
                <Route exact path={"/Progdetails"}>
               
               <Progdetails />
           </Route>
           <Route exact path={"/Practice"}>
               
               <Practice />
           </Route>

                <Route exact path={"/Store"}>
               
                    <Store products={products} onAddToCart={handleAddToCart}/>
                </Route>

                <Route exact path={"/Login"}>
               
               <Login />
           </Route>
           <Route exact path={"/Register"}>
               
               <Register />
           </Route> 
           
           <Route exact path={"/Sendmail"}>
               
               <Sendmail />
           </Route>

                <Route exact path={'/checkout'}>
                    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </div>
      

    )
}
export default App