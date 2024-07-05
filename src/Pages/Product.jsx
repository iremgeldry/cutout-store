import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import "./CSS/Product.scss";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { productsArray } from "../assets/productStore";

function Product() {
  const { productId } = useParams();
  const product = productsArray.find((e) => e.id === productId);

  return (
    <>
      <div className="px-5">
        <Breadcrumb product={product} />
        <ProductDisplay product={product} />
        <ProductDetail />
        <RelatedProducts />
      </div>
    </>
  );
}

export default Product;
