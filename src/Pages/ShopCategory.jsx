import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { productsArray } from "../assets/productStore";
import Item from "../components/Item/Item";
import "./CSS/ShopCategory.scss";

function ShopCategory(props) {
  return (
    <Container fluid className="p-5">
      <Row xs={1} sm={1} md={2} className="products">
        <Col lg={2} className="left col">
          <div className="accordion col-lg-12 col-xl-8" id="accordionFilter">
            <div className="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Filters
                </button>
                <hr />
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFilter"
              >
                <div className="accordion-body">
                  <div className="inputItem">
                    <input type="checkbox" id="1" value={1} />
                    <label htmlFor="1">animal</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="1">background</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="1">bundle</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="1">flat vector</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="1">furniture</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="1">icon</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="1">people</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="1">top view</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="1">vegetation</label>
                  </div>
                  <div className="inputItem">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="1">vehicle</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={10} className="right">
          <Row className="right1 w-100">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {props.category}
                </li>
              </ol>
            </nav>

            <div className="sortby ms-5">
              <label>Sort by:</label>
              <select
                className="form-select text-primary"
                aria-label="Default select example"
              >
                <option value="1">FEATURED</option>
                <option value="2">PRICE, LOW TO HIGH</option>
                <option value="3">PRICE, HIGH TO LOW</option>
                <option value="4">DATE, OLD TO NEW</option>
                <option selected value="4">
                  DATE, NEW TO OLD
                </option>
              </select>
            </div>
          </Row>

          {/* <div className=' list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-1'>
                        {productsArray.map((item,i)=>{
                            if (props.category === item.category){
                                return <Item key={i} id={item.id} name={item.name} img={item.img} img2={item.img2} price={item.price} title={item.title}/>
                            }
                            else{
                                return null;
                            }
                        })}
                    </div> */}

          <Row xs={1} sm={1} md={2} lg={3} xl={4} className="w-100">
            {productsArray.map((item) => {
              if (props.category === item.category) {
                return (
                  <Col key={item.id} className="mb-3">
                    <Item {...item} />
                  </Col>
                );
              } else {
                return null;
              }
            })}
          </Row>
          <Row className="w-100">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ShopCategory;

{
  /* <List catId={catId} maxPrice={maxPrice} sort={sort}/> */
}
