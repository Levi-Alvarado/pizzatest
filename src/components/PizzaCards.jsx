import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cart from '../icons/cart';
import Eye from '../icons/eye';
import { toMoneyFormat, toPascalCase } from '../utils';
import { QuantityBox } from './QuantityBox';

const PizzaCards = ({ pizzasToShow }) => {
  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const showMore = (pizza) => {
    const pizzaId = pizza.id;
    navigate(`/pizza/${pizzaId}`);
  };

  const renderPizzas = (pizza) => {
    const findItem = cart.items.find((item) => item.id === pizza.id);

    return (
      <Card key={pizza.id} className='pizza-card'>
        <div className='pizza-img-container'>
          <Card.Img variant='left' src={pizza.img} />
        </div>
        <Card.Body>
          <Card.Title className='pizza-card-title'>{toPascalCase(pizza.name)}</Card.Title>
          <section className='pizza-card-text'>Ingredientes: {pizza.ingredients.map((x) => <p className='my-0 mx-3 text-start' key={x}>🍕 {x}</p>)}</section>
        </Card.Body>
        <Card.Footer className='text-center'>
          <h3 className='text-center my-2' style={{ fontFamily: 'serif' }}>{toMoneyFormat(pizza.price.toFixed(0))}</h3>
          <div className='pizza-card-buttons d-flex justify-content-between my-3'>
            {
              findItem ? <QuantityBox item={findItem} size={true} /> :
                <Button variant='primary' onClick={() => addToCart(pizza)}> Añadir <Cart className='mx-1' width='20' height='20' /> </Button>
            }
            <Button style={findItem && { transform: 'scale(0.8)', width: '200px' }} variant="primary" className='d-flex align-items-center' onClick={() => showMore(pizza)}> Ver más <Eye className='mx-1' width='20' height='20' /> </Button>
          </div>
        </Card.Footer>
      </Card>
    )
  };
  return (
    <div className='pizza-cards-container'>
      {pizzasToShow.map(renderPizzas)
      }
    </div >
  );
};

PizzaCards.propTypes = {
  pizzasToShow: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PizzaCards;
