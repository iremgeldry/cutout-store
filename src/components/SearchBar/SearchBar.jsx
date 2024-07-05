import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productsArray } from "../../assets/productStore";
import "./SearchBar.scss";

function SearchBar() {
  //SEARCH BAR
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = productsArray.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <Container className="search-bar-container">
        <Container className="input-wrapper">
          <input
            type="text"
            placeholder="Search for more..."
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <i className="bi bi-search" id="searchBtn"></i>
            ) : (
              <i className="bi bi-x-lg" id="clearBtn" onClick={clearInput}></i>
            )}
          </div>
        </Container>
        {filteredData.length != 0 && (
          <Container className="result-canvas animate__animated animate__slideInUp p-0">
            <Row xs={1} sm={1} md={2} className=" w-100 m-0 p-0">
              <Col md={3} className="popular">
                <p>Popular searches</p>
                <hr className="mb-3" />
              </Col>
              <Col md={9} className="products">
                <p>Products</p>
                <hr className="mb-3" />
                <Row
                  xs={1}
                  sm={1}
                  md={2}
                  lg={3}
                  xl={4}
                  className="dataResult d-flex flex-wrap w-100"
                >
                  {filteredData.slice(0, 8).map((item) => {
                    return (
                      <Col xs={12}>
                        <Link className="dataItem" to={`/product/${item.id}`}>
                          <img src={item.img} />
                          <p>{item.title}</p>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <button className="m-0 p-0">View all {wordEntered} products</button>
          </Container>
        )}
      </Container>
    </>
  );
}

export default SearchBar;

{
  /* <div className="search-bar-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search for more..."
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <i className="bi bi-search" id="searchBtn"></i>
            ) : (
              <i className="bi bi-x-lg" id="clearBtn" onClick={clearInput}></i>
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="result-canvas animate__animated animate__slideInUp">
            <div className="row w-100 m-0 p-0">
              <div className="col-9 col-xs-12 products">
                <p>Products</p>
                <hr className="mb-3" />
                <div className="dataResult d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                  {filteredData.slice(0, 8).map((item) => {
                    return (
                      <a className="dataItem" href={`/product/${item.id}`}>
                        <img src={item.img} />
                        <p>{item.title}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-3 col-xs-12 popular">
                <p>Popular searches</p>
                <hr className="mb-3" />
              </div>
            </div>
            <button>View all {wordEntered} products</button>
          </div>
        )}
      </div> */
}
