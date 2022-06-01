import React from 'react'
import { Link } from 'react-router-dom';
import {Typography, Button, Card, CardActions, CardContent,CardMedia} from "@material-ui/core";
import useStyles from './styles'
const CartItem = ({item, onRemoveFromCart, onUpdateCartQty}) => {

    //const classes = useStyles();
    return (

        <>
      
						<td className="cart-product-remove">
							<span style={{cursor:'pointer'}} className="remove" title="Remove this item"><i className="icon-trash2" onClick={() => onRemoveFromCart(item.id)}></i></span>
						</td>

						<td className="cart-product-thumbnail">
							<img width="64" height="64" src={item.media.source} alt={item.name} />
						</td>

						<td className="cart-product-name">
							{item.name}
						</td>

						<td className="cart-product-price">
							<span className="amount">{item.price.formatted_with_symbol}</span>
						</td>

                        <td className="cart-product-quantity">
									<div className="quantity">
										<input type="button" defaultValue="-" className="minus"onClick={() => onUpdateCartQty(item.id, item.quantity -1)} />
										<input type="text" name="quantity" defaultValue={item.quantity} className="qty"/>
										<input type="button" defaultValue="+" className="plus" id="increase" onClick={() => onUpdateCartQty(item.id, item.quantity +1)} />
									</div>
								</td>

						{/* <td className="cart-product-quantity">
							<div className="quantity">
                           
                                
							<div className="value-button" id="decrease" onClick={() => onUpdateCartQty(item.id, item.quantity -1)} value="Decrease Value">-</div>
                                  <div className="qtyclass" >{item.quantity}</div>
								  <div className="value-button" id="increase" onClick={() => onUpdateCartQty(item.id, item.quantity +1)} value="Increase Value">+</div>
			 			
							</div> 
						</td> */}

						<td className="cart-product-subtotal">
							<span className="amount">{item.line_total.formatted_with_symbol}</span>
						</td>
				
      
        {/* <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant={"h4"}>{item.name}</Typography>
                <Typography variant={"h5"}>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type={"button"} size={"small"} onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type={"button"} size={"small"} onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button variant={"contained"} type={"button"} color={"secondary"} onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card> */}
        </>
    )
}
export default CartItem