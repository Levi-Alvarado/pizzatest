import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Minus } from '../icons/minus';
import { Plus } from '../icons/plus';

export const QuantityBox = ({ item, size }) => {
    const { removeItemFromCart, addToCart } = useContext(CartContext);
    return (
        <div className="qty-box" style={size && { transform: 'scale(0.8)' }}>
            <div className="input-group">
                <button type="button" data-type="minus" className="btn btn-dark btn-square" onClick={() => removeItemFromCart(item)}>
                    <Minus />
                </button>
                <input type="text" name="quantity" value={item.quantity} className="touchspin text-center form-control" readOnly />
                <button type="button" data-type="plus" className="btn btn-dark btn-square" onClick={() => addToCart(item)}>
                    <Plus />
                </button>
            </div>
        </div>
    )
}

QuantityBox.propTypes = {
    item: PropTypes.object.isRequired,
    size: PropTypes.bool,
};
