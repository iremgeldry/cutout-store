import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';


import { productsArray } from '../ProductsStore';

function ProductCard(props) { //props.product is the product we are selling

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);



  return(
  <>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img}/>
      <Card.Body>
         <Card.Title>{productsArray.title}</Card.Title>
          <Card.Text>€{product.price}</Card.Text>
          { productQuantity > 0 ?
          <>
          <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
              <Col sm="6">
                  <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                  <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
              </Col>
          </Form>
          <Button variant="danger" className='my-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
          </>
          :
          <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
          }
          
      </Card.Body>



  </Card>
  
  
  
  
  </>
  
  
  
  )
  
  }
  
  
  export default ProductCard
  
  