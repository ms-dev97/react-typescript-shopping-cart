type cartItem = {
    id: number,
    quantity: number,
    title: string,
    image: string,
    price: number
}

export default function CartItem({id, title, image, price, quantity}: cartItem) {
    return (
        <div className="cart-item">
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <div>
                    <div>
                        <span>{title}</span>
                        {quantity > 1 && <span>{quantity}</span>}
                    </div>
                    <div>{price}</div>
                </div>

                <div>
                    <div>{price * quantity}</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}