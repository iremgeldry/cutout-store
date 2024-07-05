import React, { useContext, useState } from "react";
import { Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { ShopContext } from "../../Context/ShopContext";
import "./NavigationBar.scss";

function NavigationBar() {
  const [menu, setMenu] = useState("");
  const cart = useContext(ShopContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      {/* NAVBAR */}

      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="px-5 py-4">
          <Container fluid className="p-0 m-0">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="/" className="fw-bold text-primary m-0">
              <i className="bi bi-balloon-heart"></i>
              StudioIrem
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="fw-bold text-primary"
                >
                  StudioIrem
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="fw-bold  text-primary">
                <Nav className="justify-content-evenly flex-grow-1 px-5 mx-5">
                  <Nav.Link href="/viewall">View All</Nav.Link>
                  <Nav.Link href="/megapacks">Megapacks</Nav.Link>
                  <Nav.Link href="/cutout">Cutout</Nav.Link>
                  <Nav.Link href="/flatvector">Flat Vector</Nav.Link>
                  <div className="dropmenu">
                    <Nav.Link href="/collections" className="dropbtn">
                      By Category{" "}
                      <i
                        className="bi bi-chevron-down ms-2"
                        id="dropdown_icon"
                      ></i>
                    </Nav.Link>

                    <Container className="megamenu">
                      <Row className="content">
                        <Col>
                          <Nav.Link href="#action3">Characters</Nav.Link>
                          <Nav.Link href="#action4">Animals</Nav.Link>
                          <Nav.Link href="#action5">Plants</Nav.Link>
                          <Nav.Link href="#action5">Furniture</Nav.Link>
                          <Nav.Link href="#action5">Vehicles</Nav.Link>
                        </Col>
                        <Col>
                          <Nav.Link href="#action5">Patterns</Nav.Link>
                          <Nav.Link href="#action5">Textures</Nav.Link>
                          <Nav.Link href="#action5">Graphics</Nav.Link>
                          <Nav.Link href="#action5">Top View</Nav.Link>
                          <Nav.Link href="#action5">Maps</Nav.Link>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="nav-icons">
              <a href="/login">
                <i className="bi bi-person"></i>
              </a>
              <a href="/cart" className="shopping-cart">
                <span className="count">{productsCount}</span>
                <i className="bi bi-bag"></i>
              </a>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;
