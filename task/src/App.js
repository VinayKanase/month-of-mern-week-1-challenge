import { useEffect, useState } from 'react';
import "./css/App.css";
import Logo from "./assets/logo.png";
import Card from "./Components/Card";
import productData from "./productData";

function App() {
  const [products, setProducts] = useState(productData);
  const [cartTotal, setCartTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let cartCountTotal = 0, subTotal = 0;
    products.forEach((product) => {
      cartCountTotal += product.cartCount;
      subTotal += (product.price * product.cartCount);
    });
    setCartTotal(cartCountTotal);
    setSubTotal(subTotal);
  }, [products])

  function handleQuantityChange(event) {
    let elementClicked = event.target;
    let cardIndex = elementClicked.offsetParent.dataset.cardindex;
    let tempProducts = products;
    if (elementClicked.classList.contains("Btn1")) {
      if (products[cardIndex - 1].cartCount === 0) {
        tempProducts[cardIndex - 1].cartCount = 1;
        setProducts([...tempProducts]);
      } else {
        tempProducts[cardIndex - 1].cartCount = 0;
        setProducts([...tempProducts]);
      }
    } else if (elementClicked.classList.contains("BtnType2")) {
      if (elementClicked.firstChild.classList.contains("Plus")) {
        tempProducts[cardIndex - 1].cartCount = products[cardIndex - 1].cartCount + 1;
        setProducts([...tempProducts]);
      } else if ((products[cardIndex - 1].cartCount - 1) >= 0) {
        tempProducts[cardIndex - 1].cartCount = products[cardIndex - 1].cartCount - 1;
        setProducts([...tempProducts]);
      }
    }
  }
  return (
    <div className="App">
      <header className="AppHeader">
        <nav className="AppNav">
          <div className="AppLogo">
            <img src={Logo} alt="VK Products Logo" />
          </div>
          <button className="AppNavCartBtn">
            <span className="ShoppingCart"></span>
            <span>{cartTotal}</span>
          </button>
        </nav>
      </header>
      <main>
        <div className="AppCardWrapper">
          {products.map((data) => <Card data={data} key={data.id} handleQuantityChange={handleQuantityChange} />)}
        </div>
        <div className="AppTotal">
          SubTotal: <span>₹ {subTotal}
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
