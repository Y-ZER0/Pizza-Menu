function OrderTime({ isOpen, currentHour }) {
  return (
    <p>
      {isOpen ? (
        <p>
          We're Currently Open at {currentHour} come visit us or order online
        </p>
      ) : (
        <p>We're Currently Closed at {currentHour}</p>
      )}
    </p>
  );
}

export default OrderTime;
