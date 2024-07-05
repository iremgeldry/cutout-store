import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./CartItem.scss";
import { ShopContext } from "../../Context/ShopContext";

function CartItem(props) {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = cart.getProductData(id);

  return (
    <>
      <Container className="w-100 mb-5">
        <Row xs={1} sm={1} md={4} className="align-items-start">
          <Col className=" mb-lg-0">
            <Link
              to={`/product/${props.id}`}
              className="bg-image hover-overlay hover-zoom ripple rounded w-100"
              data-mdb-ripple-color="light"
            >
              <img
                src={productData.img}
                className="w-100 h-100"
                alt={productData.title}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </Link>
          </Col>

          <Col className=" mb-lg-0 text-center">
            <Link href={`/product/${props.id}`}>
              <p>
                <strong>{productData.title}</strong>
              </p>
            </Link>
            <p>€{productData.price}</p>

            {/* <button
              type="button"
              className="btn btn-danger btn-sm mb-2"
              title="Move to the wish list"
            >
              <i className="bi bi-heart-fill"></i>
            </button> */}
          </Col>

          <Col className=" mb-lg-0 text-center flex-column justify-content-center">
            <p>
              <strong>Quantity</strong>
            </p>
            <div className="d-flex mb-1 align-items-center w-100 justify-content-center">
              <button
                onClick={() => cart.removeOneFromCart(id)}
                className="btn btn-primary btn-sm me-2"
              >
                -
              </button>

              <div>
                <span>{quantity}</span>
              </div>

              <button
                onClick={() => cart.addOneToCart(id)}
                className="btn btn-primary btn-sm ms-2"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm me-1 mb-2"
              title="Remove productData"
              onClick={() => cart.deleteFromCart(id)}
            >
              Remove
            </button>
          </Col>
          <Col className=" mb-lg-0 text-center flex-column justify-content-center d-none d-md-block">
            <p className="text-center w-100">
              <strong>Total</strong>
            </p>
            <p className="text-center w-100">
              <strong>€{(quantity * productData.price).toFixed(2)}</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CartItem;

{
  /* <Container className="w-100 mb-5">
        <Row xs={1} sm={1} md={4} className="align-items-start">
          <Col className="mb-4 mb-lg-0">
            <Link
              to={`/product/${props.id}`}
              className="bg-image hover-overlay hover-zoom ripple rounded w-100"
              data-mdb-ripple-color="light"
            >
              <img
                src={productData.img}
                className="w-100 h-100"
                alt={productData.title}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </Link>
          </Col>

          <Col className="mb-4 mb-lg-0 text-center">
            <Link href={`/product/${props.id}`}>
              <p>
                <strong>{productData.title}</strong>
              </p>
            </Link>
            <p>€{productData.price}</p>
          </Col>

          <Col className="mb-4 mb-lg-0 text-center flex-column justify-content-center">
            <p>
              <strong>Quantity</strong>
            </p>
            <div className="d-flex mb-1 align-items-center w-100 justify-content-center">
              <button
                onClick={() => cart.removeOneFromCart(id)}
                className="btn btn-primary btn-sm me-2"
              >
                -
              </button>

              <div>
                <span>{quantity}</span>
              </div>

              <button
                onClick={() => cart.addOneToCart(id)}
                className="btn btn-primary btn-sm ms-2"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm me-1 mb-2"
              title="Remove productData"
              onClick={() => cart.deleteFromCart(id)}
            >
              Remove
            </button>
          </Col>
          <Col className="mb-4 mb-lg-0 text-center flex-column justify-content-center">
            <p className="text-center w-100">
              <strong>Total</strong>
            </p>
            <p className="text-center w-100">
              <strong>€{(quantity * productData.price).toFixed(2)}</strong>
            </p>
          </Col>
        </Row>
      </Container> */
}
