import PizzaInterface from '../../interfaces/pizza.interface.js';

function Pizza(props: PizzaInterface) {
  const { name, ingredients, photoName, price } = props;
  return (
    <div className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>Price: {price} PESOS</span>
      </div>
    </div>
  );
}

export default Pizza;
