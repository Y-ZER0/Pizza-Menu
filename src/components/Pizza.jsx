// props object destructed into function parameters
function Pizza({ photoName, name, ingredients, price, soldOut }) {
  return (
    <div className="pizza">
      <img
        className="pizza-img"
        style={soldOut ? { filter: "grayscale(100%)" } : undefined} // setting style conditionally
        src={`${process.env.PUBLIC_URL}/${photoName}`}
        alt={name}
      />
      <h2 className="pizza-name">{name}</h2>
      <p className="pizza-ingredients">{ingredients}</p>
      <p className="pizza-price">${price}</p>
      <p className={soldOut ? "sold-out" : ""}>
        {soldOut ? "Sold Out" : "Available"} {/* setting text conditionally */}
      </p>
    </div>
  );
}

export default Pizza;
