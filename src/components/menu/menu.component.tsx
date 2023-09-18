import Pizza from '../pizza/pizza.component.js';
import PizzaInterface from '../../interfaces/pizza.interface.js';

import pizzaData from '../../data.js';

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <div className='pizzas'>
        {pizzaData.map((pizza: PizzaInterface) => {
          const { id, name, ingredients, photoName, price } = pizza;
          return (
            <Pizza
              key={id}
              name={name}
              ingredients={ingredients}
              photoName={photoName}
              price={price}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Menu;
