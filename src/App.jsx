import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';

import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
