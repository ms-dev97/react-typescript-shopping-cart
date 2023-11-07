import { useContext } from "react"
import { shoppingCartContext } from "../context/ShoppingCartContext"
import CartItem from "./CartItem";

export default function Cart() {
    const {cartItems} = useContext(shoppingCartContext);

    return (
        <div className="cart">
            <div className="overlay"></div>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </div>
    );
}