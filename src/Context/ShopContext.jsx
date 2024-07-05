import { createContext, useCallback, useEffect, useState } from "react";
import { productsArray } from "../assets/productStore";

export const ShopContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {},
});

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  const getProductQuantity = useCallback(
    (id) => {
      const quantity = cartItems.find((product) => product.id === id)?.quantity;
      return quantity || 0;
    },
    [cartItems]
  );

  const addOneToCart = useCallback(
    (id) => {
      setCartItems((currentItems) => {
        const item = currentItems.find((product) => product.id === id);
        if (!item) {
          return [...currentItems, { id, quantity: 1 }];
        } else {
          return currentItems.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        }
      });
    },
    [setCartItems]
  );

  const removeOneFromCart = useCallback(
    (id) => {
      setCartItems((currentItems) => {
        const item = currentItems.find((product) => product.id === id);
        if (item?.quantity === 1) {
          return currentItems.filter((product) => product.id !== id);
        } else {
          return currentItems.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
        }
      });
    },
    [setCartItems]
  );

  const deleteFromCart = useCallback(
    (id) => {
      setCartItems((currentItems) =>
        currentItems.filter((product) => product.id !== id)
      );
    },
    [setCartItems]
  );

  const getProductData = useCallback((id) => {
    return productsArray.find((product) => product.id === id);
  }, []);

  const getTotalCost = useCallback(() => {
    return cartItems.reduce((totalCost, cartItem) => {
      const productData = getProductData(cartItem.id);
      if (productData) {
        totalCost += productData.price * cartItem.quantity;
      }
      return totalCost;
    }, 0);
  }, [cartItems, getProductData]);

  const contextValue = {
    items: cartItems,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductData,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShoppingCartProvider;
