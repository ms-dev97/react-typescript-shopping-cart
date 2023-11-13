import { useContext } from "react"
import { shoppingCartContext } from "../context/ShoppingCartContext"

type cartItem = {
    id: number,
    quantity: number,
    title: string,
    image: string,
    price: number
}

export default function CartItem({id, title, image, price, quantity}: cartItem) {
    const {removeItem} = useContext(shoppingCartContext);

    return (
        <div className="cart-item">
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <div className="title">
                    <span>{title}</span>
                    <small> (x{quantity})</small>
                </div>

                <div className="price">
                    <div className="unit-price">${price.toFixed(2)}</div>
                    <div className="left">
                        <div className="total-price">${(price * quantity).toFixed(2)}</div>
                        <div className="remove" onClick={() => removeItem(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}