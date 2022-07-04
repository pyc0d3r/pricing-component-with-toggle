import { useRef, useEffect } from "react";

function Card({ name, price, index, children, isMonthly }) {
  const priceRef = useRef(null);

  useEffect(() => {
    priceRef.current.classList.toggle('card-price-monthly');
    priceRef.current.classList.toggle('card-price-annual');
  });

  return (
    <div className={`card card-${index}`} >
      <h2>{name}</h2>
      <h3 ref={priceRef} className="card-price-monthly">
        <span className="dollar-sign">$</span>
        <span className="price">{price}</span>
      </h3>
      {children}
      <button>Learn More</button>
    </div >
  )
};

export default Card;