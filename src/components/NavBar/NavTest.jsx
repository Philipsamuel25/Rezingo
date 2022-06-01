import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link,NavLink, useLocation} from 'react-router-dom'
//import logo from '../../assets/commerce.png'
import useStyles from './styles';
const NavTest = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    console.log(totalItems,"kllk");
    return (
        <>
        <div id="top-bar" className="text-center bg-color-2">
			<div className="container clearfix">
				<h4 className="mb-0 h6 fst-normal py-4">TRY CLASSES FREE FOR 30 DAYS ON THE REZINGO APP. DOWNLOAD TODAY. <a href="#" className="color fw-bold border-bottom border-width-2 border-color font-secondary ms-2">GET THE APP</a><i className="icon-chevron-right icon-stacked text-smaller color"></i></h4>
			</div>
		</div>

<header id="header" className="full-header transparent-header dark">

	<div id="header-wrap"  >
		<div className="container">
			<div className="header-row justify-content-lg-between">
				<div id="logo" className="me-lg-0 border-end-0">
				<h3 className="standard-logo mt-4" style={{color:'#fff'}}><Link to="/">Rezingo</Link></h3>
					{/* <!--<a href="#" className="standard-logo" >GymLogo</a>
					<a href="#" className="retina-logo" >GymLogo</a> --> */}
				</div>
				<div className="header-misc" style={{color:'#fff'}}>

					<div id="top-search" className="header-misc-icon">
						<a href="#" id="top-search-trigger">
							<i className="icon-line-search"></i><i className="icon-line-cross"></i></a>
					</div>
					
					<div className="header-misc-icon ps-4">
					<NavLink to='/Login'><i className="icon-user"></i></NavLink>
					</div>

					{/* <div className="side-panel-trigger header-misc-icon ps-4"> */}
					<div className="header-misc-icon ps-4">
                        <div className={classes.button}>
                            <IconButton component={Link} to={"/cart"} aria-label={"Show Cart items"} color={"inherit"}>
                                <Badge badgeContent={totalItems} color={"secondary"}>
                                    <ShoppingCart/>                                    
                                </Badge>
                            </IconButton>
                        </div>
					
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
           {/* <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}> */}
                {/* <Toolbar>
                    <Typography component={Link} to={"/"} variant={"h6"} className={classes.title} color="inherit">
                        <img src={logo} alt={"Commerce.js"} height={"25px"} className={classes.image}/>
                        Commerce.js
                    </Typography> */}
                    {/* <div className={classes.grow}/> */}
                    
                {/* </Toolbar> */}
           {/* </AppBar> */}
        </>
    )
}
export default NavTest