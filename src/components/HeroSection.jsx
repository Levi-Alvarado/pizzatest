import './heroSection.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="publiRobada.webp" alt="publicidad de pizzas" />
      <div className="hero-content">
        <h1 className='mx-5'>¡Pizzería Mamma Mia!</h1>
        <p className='mx-5'>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

export default HeroSection;
