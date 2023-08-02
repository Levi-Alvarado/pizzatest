import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';

import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import NavBar from './components/NavBar';
import Page404 from './views/404';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<PizzaDetail />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
