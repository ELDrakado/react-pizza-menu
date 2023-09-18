import PizzaInterface from '../../interfaces/pizza.interface.js';

function Pizza(props: PizzaInterface) {
  const { name, ingredients, photoName, price, soldOut } = props;

  if (soldOut) return null;

  return (
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>Price: {price} PESOS</span>
      </div>
    </li>
  );
}

export default Pizza;
