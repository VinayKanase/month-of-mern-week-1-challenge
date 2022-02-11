import "../css/Card.css";

function Card({ data, handleQuantityChange }) {
 return (
  <div className="Card">
   <img src={data.imageUrl} alt="" />
   <div data-cardindex={data.id} className="CardContent">
    <div className="Row">
     <div className="Details">
      <span>{data.name}</span>
     </div>
     <div className="Price">Rs. {data.price}</div>
    </div>
    <div className="CardDescription">
     {data.description}
    </div>
    <div className="CardButtons">
     <button onClick={handleQuantityChange} className="Btn1">
      {data.cartCount > 0 ? "Remove from Cart" : "Add to Cart"}
     </button>
     <div className="Quantity">
      <button onClick={handleQuantityChange} className="BtnType2">
       <span className="Plus"></span>
      </button>
      <span>{data.cartCount}</span>
      <button onClick={handleQuantityChange} className="BtnType2">
       <span className="Minus"></span>
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Card;