import { useContext } from "react";
import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext";
import Cart from "../icons/cart"

export const NavbarCart = () => {
    const { cart } = useContext(CartContext);
    const totalQty = cart.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
    return (
        <>
            <Link id="navbarCart" to='/carrito' relative="path">
                <Badge className="cart-items" bg="dark">{totalQty}</Badge>
                <Cart width="30" height="30" style={{ fill: '#000' }} />
            </Link>
        </>
    )
}
