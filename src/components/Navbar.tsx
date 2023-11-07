import { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    return (
        <>
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        Store
                    </li>
                </ul>
                
                <div onClick={() => setCartOpen(true)}>
                    cart
                </div>

                {cartOpen && <Cart />}
            </nav>
        </>
    );
}