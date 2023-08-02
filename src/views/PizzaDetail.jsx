import { useContext } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import pizzasData from '../data/pizzas.json';
import { toMoneyFormat, toPascalCase } from '../utils';
import './PizzaDetail.css'
const PizzaDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const pizza = pizzasData.find((pizza) => pizza.id === id);
  if (!pizza) {
    return navigate('/404');
  }

  return (
    <Card body className='my-3 mx-2 bg-yellow'>
      <Card.Body className='row align-items-center'>
        <section className='col-md-6 col-sm-12'>
          <Image fluid src={pizza.img} alt={pizza.name} />
        </section>
        <section className='col-xl-6 col-md-12 col-sm-12 d-flex flex-column gap-3'>
          <h1>{toPascalCase(pizza.name)}</h1>
          <div className='line' />
          <div>
            <p className='text-muted'>{pizza.desc}</p>
            <p className='text-muted'>Ingredientes: {pizza.ingredients.join(', ')}</p>
          </div>
          <h2 style={{ fontFamily: 'serif' }}>{toMoneyFormat(pizza.price.toFixed(2))}</h2>
          <Button className='button w-75' variant='dark' size='lg' onClick={() => addToCart(pizza)} >
            Agregar al carro
          </Button>
        </section>
      </Card.Body>
    </Card>
  );
};

export default PizzaDetail;
