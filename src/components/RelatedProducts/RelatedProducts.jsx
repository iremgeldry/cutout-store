import React from 'react'
import { productsArray } from '../../assets/productStore';
import Item from '../Item/Item';
import './RelatedProducts.scss'


function RelatedProducts() {
    return (
        <>
            <div className="relatedproducts">
                
                <h1 className="mt-5 align-content-center w-100">You may also like</h1>
                
                <div className=" relatedproducts-item row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {productsArray.map((item,i) => {
                        return <Item key={i} id={item.id} name={item.name} img={item.img} img2={item.img2} price={item.price} title={item.title}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts
