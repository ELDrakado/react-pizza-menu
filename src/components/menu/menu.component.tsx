import Pizza from '../pizza/pizza.component.js';
import PizzaInterface from '../../interfaces/pizza.interface.js';

import pizzaData from '../../data.js';

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza: PizzaInterface) => {
            return (
              <Pizza
                key={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

export default Menu;
