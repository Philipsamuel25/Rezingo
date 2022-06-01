import React from 'react';
import {Card, CardMedia,CardContent,CardActions, Typography,Badge, IconButton} from "@material-ui/core";
import {AddShoppingCart, Refresh} from "@material-ui/icons";
import {Link, useLocation} from 'react-router-dom'
 
import { stripHtml } from "string-strip-html";


import useStyles from './styles'
import { render } from '@testing-library/react';

const Product = ({product,onAddToCart,totalItems}) => {
	
    const classes = useStyles();
	const location = useLocation();
	const { result } = stripHtml(product.description);
	render()
{
	

}
    return (
<>
<div className="col-sm-4"> 
  <div className="card shadow-sm bg-transparent h-shadow all-ts h-translatey-sm">
								 <img src={product.media.source} className="card-img-top" alt={product.name}/>
								<div className="card-body">
									{/* <span className="badge bg-info text-dark mb-2 fw-normal px-2 py-1">Health</span> */}
									<h4 className="mb-2">{product.name}</h4>
                                   <p className="mb-4 op-07">{ result }</p>
																	
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center bg-white py-3">
									<div>
										<h3 className="mb-0 h4 fw-semibold">{product.price.formatted_with_symbol}</h3>
										<span className="op-06">{product.category}</span>
									</div>
								 <a name="Add to cart" href="/Cart"  className="product__btn button button-rounded" onClick={()=>onAddToCart(product.id, 1)}>Add to Cart</a>
								
							</div>
							</div>
              </div>
              </>

      

    )
}
export default Product