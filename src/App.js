import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useEffect, useState, useCallback, useContext } from "react";
import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";
import Cart from "./components/Cart/Cart";
import ProductsList from "./components/ProductsList/ProductsList";

/* Data structure
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
*/

function App() {
  const cartCtx = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProductsHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Something happened...");
      }

      const data = await response.json();

      const transformedProducts = data.map((productData) => {
        return {
          id: productData.id,
          title: productData.title,
          key: productData.id,
          price: productData.price,
          description: productData.description,
          category: productData.category,
          image: productData.image,
        };
      });
      setProducts(transformedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = "<p>Found no products.</p>";

  if (products.length > 0) {
    content = <ProductsList products={products} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isloading) {
    content = <p>Loading...</p>;
  }
  return (
    <CartProvider>
      <div className="container">
        <div className="row px-2 py-4">
          <div className="col-sm-12 text-center px-2">
            <div className="card text-center">
              <div className="card-header">React Shopping Cart</div>
              <div className="card-body">
                <h5 className="card-title">
                  React Shopping Cart Example with Reducer & LocalStorage
                </h5>
              </div>
              <div className="card-footer text-muted"></div>
            </div>

            {/* <h1>React+Redux Shopping Cart Example with LocalStorage</h1> */}
          </div>
        </div>
        <div className="row">
          <h2 className="col-sm-4 order-light mr-2">Cart</h2>
          <h2 className="col-sm-8 order-light ml-2">Products</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 border order-light mr-2">
            <Cart localStorage={cartCtx.localStorageItems} />
          </div>
          <div className="col-sm-8">{content}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <div className="card text-center">
            <div className="card-header text-center">
              React Shopping Cart Example with Reducer & LocalStorage
            </div>
            <div className="card-body">
              <h5 className="card-title">Made By</h5>
              <p className="card-text">Yehuda Udi Melamed</p>
              <div className="row">
                <a
                  href="https://www.linkedin.com/in/yehudamelamed/"
                  className="btn btn-primary col-sm-3 offset-3"
                >
                  Yehuda Melamed LinkedIn
                </a>
                <a
                  href="https://github.com/jadeye/react-shopping-cart"
                  className="btn btn-primary col-sm-3"
                >
                  Source code available on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
