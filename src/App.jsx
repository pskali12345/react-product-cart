import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 129999,
    category: "Laptop",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 4999,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "iPhone",
    price: 69999,
    category: "Smartphone",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 8999,
    category: "Wearable",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">

      {/* Header */}
      <header className="navbar">
        <div className="logo">
          Shop<span>Zone</span>
        </div>

        <div className="cart-badge">
          🛒 Cart <strong>{cart.length}</strong>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="hero-small">WELCOME TO SHOPZONE</p>

          <h1>
            Discover Products
            <br />
            You’ll Love.
          </h1>

          <p className="hero-text">
            Quality electronics and accessories at great prices.
          </p>

          <a href="#products" className="shop-button">
            Shop Now
          </a>
        </div>

        <div className="hero-icon">
          🛍️
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products-section">

        <div className="section-title">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>
        </div>

        <div className="products">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-info">

                <span className="category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <span className="price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    + Add
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Cart */}
      <section className="cart-section">

        <div className="cart-header">
          <div>
            <p>YOUR ITEMS</p>
            <h2>Shopping Cart</h2>
          </div>

          <span className="cart-count">
            {cart.length} Items
          </span>
        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">
            🛒
            <h3>Your cart is empty</h3>
            <p>Add some products to get started.</p>
          </div>

        ) : (

          <div className="cart-content">

            <div className="cart-items">

              {cart.map((item, index) => (

                <div className="cart-item" key={index}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span className="free">FREE</span>
              </div>

              <hr />

              <div className="total-row">
                <span>Total</span>
                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>
              </div>

              <button className="checkout-button">
                Proceed to Checkout →
              </button>

            </div>

          </div>

        )}

      </section>

      <footer>
        <p>© 2026 ShopZone • React Product Store</p>
      </footer>

    </div>
  );
}

export default App;