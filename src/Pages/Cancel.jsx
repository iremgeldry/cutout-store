import React from "react";
import { Container } from "react-bootstrap";
function Cancel() {
  return (
    <>
      <Container className="text-center p-5">
        <h1>Sorry to see you canceled your Stripe payment!</h1>
      </Container>
    </>
  );
}

export default Cancel;
