import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useStyles from './styles'
import CartItem from "./CartItem/CartItem";

const Cart = ({cart,handleRemoveFromCart,handleUpdateCartQty}) => {
     //const classes = useStyles()
	
		
    const EmptyCart = () => (
		<center>
        <div variant={"subtitle1"}>You have no items in your shopping cart. <br/>
            <Link to={"/"}>Start adding some</Link>
        </div></center>
    );

    const FilledCart = () => (
            <>
<div className="modal fade" id="reviewFormModal" tabIndex="-1" role="dialog" aria-labelledby="reviewFormModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="reviewFormModalLabel">Proceed to Checkout</h4>
                                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="row mb-0" id="template-reviewform" name="template-reviewform" action="#" method="post">

                                        <div className="col-12">
                                            <label htmlFor="template-reviewform-name">Already Having Account?</label>
                                            <div className="input-group">
												<a href="/Checkout" className="button button-3d m-0">Checkout</a>
                                        </div>
                                        </div>
										<div className="col-12">
                                            <label htmlFor="template-reviewform-name">Click here to Login</label>
                                            <div className="input-group">
											<a href="/Login" className="button button-3d m-0">Login</a>
											</div>
                                        </div>
										{/* <div className="col-6">
                                            <button className="button button-3d m-0" type="submit" id="template-reviewform-submit" name="template-reviewform-submit" value="submit">Checkout</button>
                                        </div>                          */}
										
                                    </form>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div> */}
                            </div>
                        </div>
                    </div>


<section id="page-title" className="page-title-parallax page-title-dark page-title-center include-header include-topbar skrollable skrollable-between" style={{background: 'url(images/page.jpg) 0px 46.2177% / cover no-repeat', padding: '160px 0px', margintop: '-128px'}} data-center="background-position: 0px 50%;" data-top-bottom="background-position:0px 0%;">

<div className="container clearfix">
    <h1>Shopping Cart</h1>
</div>

<div className="video-wrap" style={{position: 'absolute', top: '0', left:'0', height: '100%', zindex:'1'}}>
        <div className="video-overlay" style={{background: 'rgba(0,0,0,0.6)'}}></div>
    </div>

</section>
<section id="page-title">

			<div className="container clearfix">
				<h1>Shopping Cart</h1>
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="/#">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
				</ol>
			</div>

		</section>
        <section id="content">
			<div className="content-wrap">
				<div className="container">
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
				
				

					{/* <Grid container spacing={3}> */}
                    {cart.line_items.map((item) => (
                        // <Grid item xs={12} sm={4} key={item.id}>

						<tr className="cart_item" key={item.id}>
						
                            <CartItem item={item} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateCartQty} />
							</tr>
                        // </Grid>
                    ))}
                {/* </Grid> */}

						{/* <td className="cart-product-remove">
							<a href="#" className="remove" title="Remove this item"><i className="icon-trash2"></i></a>
						</td>

						<td className="cart-product-thumbnail">
							<a href="#"><img width="64" height="64" src={item.id} alt={item.name} /></a>
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
						</td> */}
				
					<tr className="cart_item">
						<td colSpan="6">
							<div className="row justify-content-between py-2 col-mb-30">
								<div className="col-lg-auto ps-lg-0">
									<div className="row">
										<div className="col-md-8">
											<input type="text"  className="sm-form-control text-center text-md-start" placeholder="Enter Coupon Code.." />
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<a href="#" className="button button-3d button-black m-0">Apply Coupon</a>
										</div>
									</div>
								</div>
								<div className="col-lg-auto pe-lg-0">

								{/* <div className={classes.cardDetails}> */}
                    {/* <Typography variant={"h4"}>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography> */}
                    
                        {/* <Button className={classes.emptyButton} size={"large"} type={"button"} variant={"contained"} color={"secondary"} onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>

                        <Button component={Link} to={'/checkout'} className={classes.checkoutButton} size={"large"} type={"button"} variant={"contained"} color={"primary"}>
                            Checkout
                        </Button> */}
                   
                {/* </div> */}


									<NavLink to={'./#products'} className="button button-3d m-0">More Product</NavLink>
								 <NavLink to={'/checkout'} className="button button-3d mt-2 mt-sm-0 me-0">Proceed to Checkout</NavLink> 
									{/* <button className="button button-3d mt-2 mt-sm-0 me-0" onClick={redirect}>Proceed to Checkout</button> */}
									{/* <a href="#" data-bs-toggle="modal" data-bs-target="#reviewFormModal" className="button button-3d mt-2 mt-sm-0 me-0">Proceed to Checkout</a> */}

								
								</div>
							</div>
						</td>
					</tr>
				</tbody>

			</table>
				
			 
					<div className="row col-mb-30">
						<div className="col-lg-6">
							<h4>Calculate Shipping</h4>
							<form className="row">
								<div className="col-12 form-group">
									<select className="sm-form-control" defaultValue={'United States (US)'}>
										<option value="AX">&#197;land Islands</option>
										<option value="AF">Afghanistan</option>
										<option value="AL">Albania</option>
										<option value="DZ">Algeria</option>
										<option value="AD">Andorra</option>
										<option value="AO">Angola</option>
										<option value="AI">Anguilla</option>
										<option value="AQ">Antarctica</option>
										<option value="AG">Antigua and Barbuda</option>
										<option value="AR">Argentina</option>
										<option value="AM">Armenia</option>
										<option value="AW">Aruba</option>
										<option value="AU">Australia</option>
										<option value="AT">Austria</option>
										<option value="AZ">Azerbaijan</option>
										<option value="BS">Bahamas</option>
										<option value="BH">Bahrain</option>
										<option value="BD">Bangladesh</option>
										<option value="BB">Barbados</option>
										<option value="BY">Belarus</option>
										<option value="PW">Belau</option>
										<option value="BE">Belgium</option>
										<option value="BZ">Belize</option>
										<option value="BJ">Benin</option>
										<option value="BM">Bermuda</option>
										<option value="BT">Bhutan</option>
										<option value="BO">Bolivia</option>
										<option value="BQ">Bonaire, Saint Eustatius and Saba</option>
										<option value="BA">Bosnia and Herzegovina</option>
										<option value="BW">Botswana</option>
										<option value="BV">Bouvet Island</option>
										<option value="BR">Brazil</option>
										<option value="IO">British Indian Ocean Territory</option>
										<option value="VG">British Virgin Islands</option>
										<option value="BN">Brunei</option>
										<option value="BG">Bulgaria</option>
										<option value="BF">Burkina Faso</option>
										<option value="BI">Burundi</option>
										<option value="KH">Cambodia</option>
										<option value="CM">Cameroon</option>
										<option value="CA">Canada</option>
										<option value="CV">Cape Verde</option>
										<option value="KY">Cayman Islands</option>
										<option value="CF">Central African Republic</option>
										<option value="TD">Chad</option>
										<option value="CL">Chile</option>
										<option value="CN">China</option>
										<option value="CX">Christmas Island</option>
										<option value="CC">Cocos (Keeling) Islands</option>
										<option value="CO">Colombia</option>
										<option value="KM">Comoros</option>
										<option value="CG">Congo (Brazzaville)</option>
										<option value="CD">Congo (Kinshasa)</option>
										<option value="CK">Cook Islands</option>
										<option value="CR">Costa Rica</option>
										<option value="HR">Croatia</option>
										<option value="CU">Cuba</option>
										<option value="CW">Cura&Ccedil;ao</option>
										<option value="CY">Cyprus</option>
										<option value="CZ">Czech Republic</option>
										<option value="DK">Denmark</option>
										<option value="DJ">Djibouti</option>
										<option value="DM">Dominica</option>
										<option value="DO">Dominican Republic</option>
										<option value="EC">Ecuador</option>
										<option value="EG">Egypt</option>
										<option value="SV">El Salvador</option>
										<option value="GQ">Equatorial Guinea</option>
										<option value="ER">Eritrea</option>
										<option value="EE">Estonia</option>
										<option value="ET">Ethiopia</option>
										<option value="FK">Falkland Islands</option>
										<option value="FO">Faroe Islands</option>
										<option value="FJ">Fiji</option>
										<option value="FI">Finland</option>
										<option value="FR">France</option>
										<option value="GF">French Guiana</option>
										<option value="PF">French Polynesia</option>
										<option value="TF">French Southern Territories</option>
										<option value="GA">Gabon</option>
										<option value="GM">Gambia</option>
										<option value="GE">Georgia</option>
										<option value="DE">Germany</option>
										<option value="GH">Ghana</option>
										<option value="GI">Gibraltar</option>
										<option value="GR">Greece</option>
										<option value="GL">Greenland</option>
										<option value="GD">Grenada</option>
										<option value="GP">Guadeloupe</option>
										<option value="GT">Guatemala</option>
										<option value="GG">Guernsey</option>
										<option value="GN">Guinea</option>
										<option value="GW">Guinea-Bissau</option>
										<option value="GY">Guyana</option>
										<option value="HT">Haiti</option>
										<option value="HM">Heard Island and McDonald Islands</option>
										<option value="HN">Honduras</option>
										<option value="HK">Hong Kong</option>
										<option value="HU">Hungary</option>
										<option value="IS">Iceland</option>
										<option value="IN">India</option>
										<option value="ID">Indonesia</option>
										<option value="IR">Iran</option>
										<option value="IQ">Iraq</option>
										<option value="IM">Isle of Man</option>
										<option value="IL">Israel</option>
										<option value="IT">Italy</option>
										<option value="CI">Ivory Coast</option>
										<option value="JM">Jamaica</option>
										<option value="JP">Japan</option>
										<option value="JE">Jersey</option>
										<option value="JO">Jordan</option>
										<option value="KZ">Kazakhstan</option>
										<option value="KE">Kenya</option>
										<option value="KI">Kiribati</option>
										<option value="KW">Kuwait</option>
										<option value="KG">Kyrgyzstan</option>
										<option value="LA">Laos</option>
										<option value="LV">Latvia</option>
										<option value="LB">Lebanon</option>
										<option value="LS">Lesotho</option>
										<option value="LR">Liberia</option>
										<option value="LY">Libya</option>
										<option value="LI">Liechtenstein</option>
										<option value="LT">Lithuania</option>
										<option value="LU">Luxembourg</option>
										<option value="MO">Macao S.A.R., China</option>
										<option value="MK">Macedonia</option>
										<option value="MG">Madagascar</option>
										<option value="MW">Malawi</option>
										<option value="MY">Malaysia</option>
										<option value="MV">Maldives</option>
										<option value="ML">Mali</option>
										<option value="MT">Malta</option>
										<option value="MH">Marshall Islands</option>
										<option value="MQ">Martinique</option>
										<option value="MR">Mauritania</option>
										<option value="MU">Mauritius</option>
										<option value="YT">Mayotte</option>
										<option value="MX">Mexico</option>
										<option value="FM">Micronesia</option>
										<option value="MD">Moldova</option>
										<option value="MC">Monaco</option>
										<option value="MN">Mongolia</option>
										<option value="ME">Montenegro</option>
										<option value="MS">Montserrat</option>
										<option value="MA">Morocco</option>
										<option value="MZ">Mozambique</option>
										<option value="MM">Myanmar</option>
										<option value="NA">Namibia</option>
										<option value="NR">Nauru</option>
										<option value="NP">Nepal</option>
										<option value="NL">Netherlands</option>
										<option value="AN">Netherlands Antilles</option>
										<option value="NC">New Caledonia</option>
										<option value="NZ">New Zealand</option>
										<option value="NI">Nicaragua</option>
										<option value="NE">Niger</option>
										<option value="NG">Nigeria</option>
										<option value="NU">Niue</option>
										<option value="NF">Norfolk Island</option>
										<option value="KP">North Korea</option>
										<option value="NO">Norway</option>
										<option value="OM">Oman</option>
										<option value="PK">Pakistan</option>
										<option value="PS">Palestinian Territory</option>
										<option value="PA">Panama</option>
										<option value="PG">Papua New Guinea</option>
										<option value="PY">Paraguay</option>
										<option value="PE">Peru</option>
										<option value="PH">Philippines</option>
										<option value="PN">Pitcairn</option>
										<option value="PL">Poland</option>
										<option value="PT">Portugal</option>
										<option value="QA">Qatar</option>
										<option value="IE">Republic of Ireland</option>
										<option value="RE">Reunion</option>
										<option value="RO">Romania</option>
										<option value="RU">Russia</option>
										<option value="RW">Rwanda</option>
										<option value="ST">S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option>
										<option value="BL">Saint Barth&eacute;lemy</option>
										<option value="SH">Saint Helena</option>
										<option value="KN">Saint Kitts and Nevis</option>
										<option value="LC">Saint Lucia</option>
										<option value="SX">Saint Martin (Dutch part)</option>
										<option value="MF">Saint Martin (French part)</option>
										<option value="PM">Saint Pierre and Miquelon</option>
										<option value="VC">Saint Vincent and the Grenadines</option>
										<option value="SM">San Marino</option>
										<option value="SA">Saudi Arabia</option>
										<option value="SN">Senegal</option>
										<option value="RS">Serbia</option>
										<option value="SC">Seychelles</option>
										<option value="SL">Sierra Leone</option>
										<option value="SG">Singapore</option>
										<option value="SK">Slovakia</option>
										<option value="SI">Slovenia</option>
										<option value="SB">Solomon Islands</option>
										<option value="SO">Somalia</option>
										<option value="ZA">South Africa</option>
										<option value="GS">South Georgia/Sandwich Islands</option>
										<option value="KR">South Korea</option>
										<option value="SS">South Sudan</option>
										<option value="ES">Spain</option>
										<option value="LK">Sri Lanka</option>
										<option value="SD">Sudan</option>
										<option value="SR">Suriname</option>
										<option value="SJ">Svalbard and Jan Mayen</option>
										<option value="SZ">Swaziland</option>
										<option value="SE">Sweden</option>
										<option value="CH">Switzerland</option>
										<option value="SY">Syria</option>
										<option value="TW">Taiwan</option>
										<option value="TJ">Tajikistan</option>
										<option value="TZ">Tanzania</option>
										<option value="TH">Thailand</option>
										<option value="TL">Timor-Leste</option>
										<option value="TG">Togo</option>
										<option value="TK">Tokelau</option>
										<option value="TO">Tonga</option>
										<option value="TT">Trinidad and Tobago</option>
										<option value="TN">Tunisia</option>
										<option value="TR">Turkey</option>
										<option value="TM">Turkmenistan</option>
										<option value="TC">Turks and Caicos Islands</option>
										<option value="TV">Tuvalu</option>
										<option value="UG">Uganda</option>
										<option value="UA">Ukraine</option>
										<option value="AE">United Arab Emirates</option>
										<option value="GB">United Kingdom (UK)</option>
										<option value="US" >United States (US)</option>
										<option value="UY">Uruguay</option>
										<option value="UZ">Uzbekistan</option>
										<option value="VU">Vanuatu</option>
										<option value="VA">Vatican</option>
										<option value="VE">Venezuela</option>
										<option value="VN">Vietnam</option>
										<option value="WF">Wallis and Futuna</option>
										<option value="EH">Western Sahara</option>
										<option value="WS">Western Samoa</option>
										<option value="YE">Yemen</option>
										<option value="ZM">Zambia</option>
										<option value="ZW">Zimbabwe</option>

									</select>
								</div>
								<div className="col-6 form-group">
									<input type="text" className="sm-form-control" placeholder="State / Country" />
								</div>

								<div className="col-6 form-group">
									<input type="text" className="sm-form-control" placeholder="PostCode / Zip" />
								</div>
								<div className="col-12 form-group">
									<button className="button btn-danger button-3d m-0">Update Totals</button>
								</div>
							</form>
						</div>

						<div className="col-lg-6">
							<h4>Cart Totals</h4>

							<div className="table-responsive">
								<table className="table cart cart-totals">
									<tbody>
										<tr className="cart_item">
											<td className="cart-product-name">
												<strong>Cart Subtotal</strong>
											</td>

											<td className="cart-product-name">
												<span className="amount">{cart.subtotal.formatted_with_symbol}</span>
											</td>
										</tr>
										<tr className="cart_item">
											<td className="cart-product-name">
												<strong>Shipping</strong>
											</td>

											<td className="cart-product-name">
												<span className="amount">Free Delivery</span>
											</td>
										</tr>
										<tr className="cart_item">
											<td className="cart-product-name">
												<strong>Total</strong>
											</td>

											<td className="cart-product-name">
												<span className="amount color lead"><strong>{cart.subtotal.formatted_with_symbol}</strong></span>
											</td>
										</tr>
									</tbody>

								</table>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>


                {/* <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateCartQty} />
                        </Grid>
                    ))}
                </Grid> */}
                {/* <div className={classes.cardDetails}> */}
                    {/* <Typography variant={"h4"}>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography> */}
                    {/* <div>
                        <Button className={classes.emptyButton} size={"large"} type={"button"} variant={"contained"} color={"secondary"} onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>

                        <Button component={Link} to={'/checkout'} className={classes.checkoutButton} size={"large"} type={"button"} variant={"contained"} color={"primary"}>
                            Checkout
                        </Button>
                    </div> */}
                {/* </div> */}
            </>
    );

    if ( !cart.line_items) return<div><center className="mt-20">Loading ....</center></div>
    return (
       <div>
           {/* <div className={classes.toolbar}/> */}
           {/* <Typography className={classes.title}> Your Shopping Cart</Typography> */}
           {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
       </div>
    )
}
export default Cart