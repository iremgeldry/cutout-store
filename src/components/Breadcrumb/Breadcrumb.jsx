import React from 'react'
import './Breadcrumb.scss'

function Breadcrumb(props) {

    const {product} = props;
    

    return (
        <>
        <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href={`/${product.category.toLowerCase().split(" ").join("")}`}>{product.category}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{product.title}</li>
                </ol>
        </nav>
            
        </>
    )
}

export default Breadcrumb
