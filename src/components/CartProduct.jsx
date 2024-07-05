import Button from "react-bootstrap/Button";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { getProductData } from "../assets/productStore";

//SHOPPING CART

function CartProduct(props) {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <img src={productData.img} alt="product-image" />
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>€{(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
}

export default CartProduct;
