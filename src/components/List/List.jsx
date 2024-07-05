import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './List.scss'
import Card from '../Item/Item';

function List() {
  return (
    <Row sm={1} md={2} lg={3} xl={4} className=' list m-1'>
        {productsArray.map((item,i)=>(
          
              <Card key={i} id={item.id} name={item.name} img={item.img} img2={item.img2} price={item.price} title={item.title}/>
          
          ))}
    </Row>
  )
}

export default List



{/* <div className=' list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-1'>
        {productsArray.map((item,i)=>(
          
              <Card key={i} id={item.id} name={item.name} img={item.img} img2={item.img2} price={item.price} title={item.title}/>
          
          ))}
    </div> */}

