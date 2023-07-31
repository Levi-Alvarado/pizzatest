
import PizzaCards from '../components/PizzaCards';
import HeroSection from '../components/HeroSection';
import pizzasData from '../data/pizzas.json';

const Home = () => {
  const pizzasToShow = pizzasData;

  return (
    <main className='bg-dark'>
      <HeroSection />
      <section className='my-5'>
        <PizzaCards pizzasToShow={pizzasToShow} />
      </section>
    </main>
  );
};

export default Home;
