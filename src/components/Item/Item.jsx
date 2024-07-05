import React from "react";
import { Link } from "react-router-dom";
import FormatCurrency from "../../utilities/formatCurrency";
import "./Item.scss";

function Item(props) {
  return (
    <>
      <Link
        to={`/product/${props.id}`}
        className="imagelink animate__animated animate__fadeIn"
      >
        <div className="product-image ">
          {props.isNew && <span>New Item</span>}
          <img
            src={props.img}
            alt="image"
            className="mainImg"
            onClick={(e) => window.scrollTo(0, 0)}
          />
          <img src={props.img2} alt="image2" className="secondImg " />
        </div>

        <div className="product-info">
          <h2>{props.title}</h2>
          <div className="prices">
            <FormatCurrency price={props.price} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Item;

// OLD VARIANT

{
  /* <Link to={`/product/${props.id}`} onClick={(e) => window.scrollTo(0, 0)}>
        <Card className="h-100 animate__animated animate__fadeIn">
          <div className="product-image ">
            // {props.isNew && <span>New Item</span>}
            <Card.Img
              variant="top"
              src={props.img}
              style={{ objectFit: "cover" }}
              className="mainImg"
            />
            // <Card.Img
            //   variant="top"
            //   src={props.img2}
            //   style={{ objectFit: "cover" }}
            //   className="secondImg "
            // />
          </div>

          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex flex-column justify-content-center align-items-center">
              <span className="fs-6 mb-2">{props.title}</span>
              <span className="ms-2 fs-6">
                {<FormatCurrency price={props.price} />}
              </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link> */
}
