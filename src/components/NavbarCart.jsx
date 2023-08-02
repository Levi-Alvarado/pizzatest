import { useContext } from 'react';
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext';
import Cart from '../icons/cart'
import { toMoneyFormat } from '../utils';

export const NavbarCart = () => {
    const { cart } = useContext(CartContext);
    const totalQty = cart.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
    return (
        <div className='d-flex gap-3 align-items-center justify-content-center'>
            <Link id='navbarCart' to='/carrito' relative='path'>
                <Badge className='cart-items' bg='dark'>{totalQty}</Badge>
                <Cart width='30' height='30' style={{ fill: '#000' }} />
            </Link>
            <p className='pt-1 h5'>
                {toMoneyFormat(cart.total)}
            </p>
        </div>
    )
}
