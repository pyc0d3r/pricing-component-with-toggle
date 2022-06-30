function Card({ name, price, index, children }) {
  return (
    <div className={`card card-${index}`} >
      <h2>{name}</h2>
      <h3>${price}</h3>
      {children}
      <button>Learn More</button>
    </div >
  )
};

export default Card;