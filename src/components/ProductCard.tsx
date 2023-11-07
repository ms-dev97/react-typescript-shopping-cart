import { useContext, useState } from "react";
import { product } from "../App";
import { shoppingCartContext } from "../context/ShoppingCartContext";

export default function ProductCard({id, title, price, image}: product) {
    const {getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem} = useContext(shoppingCartContext);
    
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="body">
                <div className="info">
                    <h3 className="name">{title}</h3>
                    <div className="price">${price}</div>
                </div>
                {getItemQuantity(id) == 0 ? (
                    <button className="atc" onClick={(): void => increaseItemQuantity(id, title, image, price)}>
                        Add to Cart
                    </button>
                ) : (
                    <>
                        <div className="in-cart">
                            <button className="update-quantity decrease" onClick={(): void => decreaseItemQuantity(id)}>
                                -
                            </button>

                            <p className="quantity">
                                <span>{getItemQuantity(id)}</span> in cart
                            </p>

                            <button className="update-quantity increase" onClick={(): void => increaseItemQuantity(id)}>
                                +
                            </button>
                        </div>

                        <button className="remove" onClick={() => removeItem(id)}>
                            Remove
                        </button>
                    </>
                )}
                
            </div>
            
        </div>
    );
}