import React from "react";
import { useState, useContext } from "react";
import "./CSS/ProductDisplay.scss";

import { ShopContext } from "../Context/ShopContext";
import { Button, Carousel } from "react-bootstrap";

function ProductDisplay(props) {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <div className="p-3 mt-5">
        <div className="product row row-cols-1 row-cols-sm-1">
          <div className="left col col-md-6 p-0">
            <Carousel data-bs-theme="dark" interval={null}>
              <Carousel.Item>
                <img alt="image" src={product.img} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="image" src={product.img2} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="image" src={product.img} />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="right col col-md-5 ">
            <div className="right-wrapper">
              <h1>{product.title}</h1>
              <span>€{product.price}</span>
              <div>
                <p>
                  <strong>
                    Flat vector exercise themed people silhouettes for your
                    architecture and design projects.
                  </strong>{" "}
                  <br />
                  <strong>File Type:</strong>Vector <br />
                  <strong>File Size:</strong>14,6 MB <br />
                  <strong>Format:</strong>AI, PDF, PNG <br />
                </p>
              </div>
              <div>
                <p>
                  <strong>Technical details:</strong> All vector drawings are
                  resizable. You can easily change the colors and patterns of AI
                  files in Adobe Illustrator or PDF files in Adobe Photoshop.
                  <br />
                  <br />
                  <strong>Software compatibility:</strong> Adobe Photoshop and
                  Illustrator CS3 or newer. Affinity Photo and Designer.
                  CorelDRAW. + PNG files are suitable with almost every graphic
                  software.
                  <br />
                  <br />
                  <strong>Content:</strong> This pack includes common style
                  recolorable and resizable people and animal scales with an
                  additional monochrome version. Suitable for any project.
                  <br />
                  <br />
                  <strong>About Vectors:</strong> People, furniture, plants, and
                  other scales are mostly used in interior / exterior collages
                  by architects and designers.
                </p>
              </div>

              {productQuantity > 0 ? (
                <>
                  <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <Button
                        onClick={() => cart.removeOneFromCart(product.id)}
                      >
                        -
                      </Button>
                      <span>{productQuantity}</span>
                      <Button onClick={() => cart.addOneToCart(product.id)}>
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="buttons">
                    <button
                      type="button"
                      className="button "
                      onClick={() => {
                        cart.addOneToCart(product.id);
                      }}
                    >
                      <i class="bi bi-bag"></i>
                      <p>ADD TO CART</p>
                    </button>
                    <button type="button" className="button">
                      <i class="bi bi-heart"></i>
                      <p>Add to Favorites</p>
                    </button>
                  </div>
                </>
              ) : (
                <div className="buttons">
                  <button
                    type="button"
                    className="button "
                    onClick={() => {
                      cart.addOneToCart(product.id);
                    }}
                  >
                    <i class="bi bi-bag"></i>
                    <p>ADD TO CART</p>
                  </button>

                  <button type="button" className="button">
                    <i class="bi bi-heart"></i>
                    <p>Add to Favorites</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
