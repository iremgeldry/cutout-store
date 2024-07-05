import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem/CartItem";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.scss";

function Cart() {
  const cart = useContext(ShopContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  //STRIPE SETTINGS
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <>
      {productsCount > 0 ? (
        <>
          <Container fluid className="p-5">
            <Row>
              <Col md={8} className="cart-left mb-3">
                <Card className="card mb-4 h-100 w-100">
                  <Card.Header className="card-header py-3 ">
                    <h5 className="mb-0">
                      {productsCount} Products in your cart
                    </h5>
                  </Card.Header>

                  <Row className="p-5">
                    {cart.items.map((currentProduct, idx) => (
                      <CartItem
                        key={idx}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                      />
                    ))}
                  </Row>

                  <Row className="mb-4 mb-lg-0 p-4">
                    <div>
                      <p>
                        <strong>We accept</strong>
                      </p>
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        height="30px"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg"
                        alt="PayPal"
                      />
                    </div>
                  </Row>
                </Card>
              </Col>

              <Col md={4} className="cart-right mb-3">
                <Card className="card mb-4 h-100 w-100">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <p className="mb-0">Products</p>
                        <span>€{cart.getTotalCost().toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <p className="mb-0">Shipping</p>
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>
                            <p>Total amount</p>
                          </strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>€{cart.getTotalCost().toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block mb-2 w-100"
                      onClick={checkout}
                    >
                      Go to checkout
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block w-100"
                    >
                      <a
                        href="/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Continue Shopping
                      </a>
                    </button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Container className="px-5">
          <div className="empty-cart row">
            <div className="col left">
              <h1>Shopping Cart</h1>
            </div>
            <div className="col right">
              <p>There are no items in your cart!</p>
              <a href="/">Start Shopping!</a>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Cart;

{
  /* <>
      {productsCount > 0 ? (
        <>
          <Container fluid className="p-5">
            <Row>
              <Col md={8} className="cart-left mb-3">
                <div className="card mb-4 h-100 ">
                  <div className="card-header py-3 ">
                    <h5 className="mb-0">
                      {productsCount} Products in your cart
                    </h5>
                  </div>

                  <Row>
                    {cart.items.map((currentProduct, idx) => (
                      <div>
                        <CartItem
                          key={idx}
                          id={currentProduct.id}
                          quantity={currentProduct.quantity}
                        />
                      </div>
                    ))}
                  </Row>

                  <Row className="mb-4 mb-lg-0 p-4">
                    <div>
                      <p>
                        <strong>We accept</strong>
                      </p>
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        height="30px"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg"
                        alt="PayPal"
                      />
                    </div>
                  </Row>
                </div>
              </Col>

              <Col md={4} className="cart-right mb-3">
                <div className="card mb-4 h-100">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>€{cart.getTotalCost().toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>€{cart.getTotalCost().toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block mb-2 w-100"
                      onClick={checkout}
                    >
                      Go to checkout
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block w-100"
                    >
                      <a
                        href="/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Continue Shopping
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Container className="px-5">
          <div className="empty-cart row">
            <div className="col left">
              <h1>Shopping Cart</h1>
            </div>
            <div className="col right">
              <p>There are no items in your cart!</p>
              <a href="/">Start Shopping!</a>
            </div>
          </div>
        </Container>
      )}
    </> */
}
