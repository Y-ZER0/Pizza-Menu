import "../styling/Footer.css";
import OrderTime from "./OrderTime";

function Footer() {
  const openHour = 12;
  const closeHour = 22;

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer>
      <OrderTime isOpen={isOpen} currentHour={currentHour} />
      <p>Copyright © 2025</p>
      <button>Order</button>
    </footer>
  );
}

export default Footer;
