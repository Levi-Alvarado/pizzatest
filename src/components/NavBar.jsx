import { Navbar, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavbarCart } from './NavbarCart';

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary justify-content-between bg-yellow'>
      <Container>
        <Navbar.Brand><Link to='/' className='navbarTitle'>🍕 Pizzería Mamma Mia!</Link></Navbar.Brand>
        <NavbarCart />
      </Container>
    </Navbar>
  );
};

export default NavBar;
