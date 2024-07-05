import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cats1 from "../assets/images/cats1.jpg";
import furniture1 from "../assets/images/furniture1.jpg";
import graphics1 from "../assets/images/graphics1.jpg";
import maps from "../assets/images/maps.jpg";
import pattern1 from "../assets/images/pattern1.jpg";
import peoplestanding1 from "../assets/images/peoplestanding1.jpg";
import plants1 from "../assets/images/plants1.jpg";
import texture from "../assets/images/texture.jpg";
import topview from "../assets/images/topview.jpg";
import vehicles1 from "../assets/images/vehicles1.jpg";
import "./CSS/Collections.scss";

function Collections() {
  return (
    <Container fluid className="p-5">
      <Row
        xs={1}
        sm={1}
        md={2}
        lg={3}
        xl={4}
        className="d-flex flex-wrap g-2 mb-2"
      >
        <Col>
          <Link to="/characters" className="categories">
            <img src={peoplestanding1} />
            <div className="cat-name">CHARACTERS</div>
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <img src={cats1} />
            <div className="cat-name">ANIMALS</div>
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <img src={plants1} />
            <div className="cat-name">PLANTS</div>
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <img src={furniture1} />
            <div className="cat-name">FURNITURE</div>
          </Link>
        </Col>
      </Row>
      <Row
        xs={1}
        sm={1}
        md={2}
        lg={3}
        xl={4}
        className="d-flex flex-wrap g-2 mb-2"
      >
        <Col>
          <Link to="/characters" className="categories">
            <img src={vehicles1} />
            <div className="cat-name">VEHICLES</div>
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <img src={pattern1} />
            <div className="cat-name">PATTERNS</div>
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <div className="cat-name">TEXTURES</div>

            <img src={texture} />
          </Link>
        </Col>
        <Col>
          <Link to="/characters" className="categories">
            <img src={graphics1} />
            <div className="cat-name">GRAPHIC</div>
          </Link>
        </Col>
      </Row>
      <Row
        xs={1}
        sm={1}
        md={2}
        lg={3}
        xl={4}
        className="d-flex flex-wrap g-2 mb-2"
      >
        <Col>
          <Link to="/characters" className="categories">
            <img src={topview} />
            <div className="cat-name">TOP VIEW</div>
          </Link>
        </Col>

        <Col>
          <Link to="/characters" className="categories">
            <img src={maps} />
            <div className="cat-name">MAPS</div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Collections;
