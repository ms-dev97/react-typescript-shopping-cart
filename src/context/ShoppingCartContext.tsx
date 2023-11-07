import { createContext, ReactNode, useState } from "react";

type shoppingCartContextType = {
    getItemQuantity: (id: number) => number,
    increaseItemQuantity: (id: number) => void,
    decreaseItemQuantity: (id: number) => void,
    removeItem: (id: number) => void
}

type cartItem = {
    id: number,
    quantity: number
}

export const shoppingCartContext = createContext({} as shoppingCartContextType);

export function ShoppingCartProvidor({children}: ReactNode) {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id == id)?.quantity || 0;
    }

    function increaseItemQuantity(id: number) {
        setCartItems(items => {
            if (items.find(item => item.id == id) == null) {
                return [...items, {id, quantity: 1}];
            } else {
                return items.map(item => item.id == id ? {...item, quantity: item.quantity++} : item);
            }
        });
    }

    function decreaseItemQuantity(id: number) {
        setCartItems(items => {
            if (items.find(item => item.id == id)?.quantity == 1) {
                return items.filter(item => item.id != id);
            } else {
                return items.map(item => item.id == id ? {...item, quantity: item.quantity--} : item);
            }
        });
    }

    function removeItem(id: number) {
        setCartItems(items => {
            return items.filter(item => item.id != id);
        });
    }

    return (
        <shoppingCartContext.Provider value={{
            cartItems,
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}