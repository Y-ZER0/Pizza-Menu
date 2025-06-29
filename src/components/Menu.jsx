import Pizza from "./Pizza";
import pizzaData from "../data";
import "../styling/Menu.css";

function Menu() {
  const pizzas = pizzaData;
  return (
    <section className="menu">
      <div>
        <h2 className="menu-title">Our menu</h2>
      </div>
      {pizzas.length > 0 ? (
        <>
          {/* React fragment : allows to return multiple elements */}
          <p className="menu-description">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <div className="menu-pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza
                key={index}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="menu-description">No pizzas available</p>
      )}
    </section>
  );
}

export default Menu;
