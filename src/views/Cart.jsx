import { useContext } from 'react';
import { Button, Card, Image, Table } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { QuantityBox } from '../components/QuantityBox';
import { toMoneyFormat, toPascalCase } from '../utils';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const MySwal = withReactContent(Swal)
  const buy = () => {
    MySwal.fire({
      title: <p>Gracias por su compra.</p>,
      icon: 'success'
      })
    clearCart()
    
  }

  return (
    <Card body className='my-3 mx-2 bg-yellow'>
      <Card.Body className='row align-items-center'>
        <h2>Carrito de Compras</h2>
        <div className='line' />
        <Table variant='warning' responsive striped>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Sub total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              cart.items.length === 0 &&
              <tr>
                <td colSpan={4} aria-colspan={3} className='w-100 text-center'>
                  <p className='my-0'>No hay productos en el carrito</p>
                </td>
              </tr>
            }

            {cart.items.map((item) => (
              <tr key={item.id}>
                <td className='d-flex align-items-center gap-3'>
                  <Image src={item.img} width={50} height={50} rounded />
                  <p className='my-0'>{toPascalCase(item.name)}<span className='text-muted small'> x {toMoneyFormat(item.price)}</span></p>
                </td>
                <td>
                  <p className='d-flex align-items-center my-0'>{toMoneyFormat(item.subtotal)}</p>
                </td>
                <td width={200}>
                  <QuantityBox item={item} />
                </td>
                <td>
                  <Button variant='danger' onClick={() => removeFromCart(item)}>🗑️</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='line' />
        <p>Total a pagar: {toMoneyFormat(cart.total)}</p>

        <Button className={cart.total > 0 ? 'Button w-25 mx-2' : 'Button w-25 disabled mx-2'} variant='dark' size='lg' onClick={clearCart}>Vaciar Carrito</Button>
        <Button className={cart.total > 0 ? 'Button w-25 mx-2' : 'Button w-25 disabled mx-2'} variant='success' size='lg' onClick={buy}>Comprar</Button>

      </Card.Body>
    </Card>
  );
};

export default Cart;
