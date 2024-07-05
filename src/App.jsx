import "bootstrap-icons/font/bootstrap-icons.css";
//import CartProvider from './CartContext';
//STYLING
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//COMPONENTS
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";
//CONTEXT
import ShopContextProvider from "./Context/ShopContext.jsx";
//PAGES
import ByCategory from "./Pages/ByCategory.jsx";
import Cancel from "./Pages/Cancel";
import Cart from "./Pages/Cart";
import Collections from "./Pages/Collections.jsx";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Success from "./Pages/Success";
// PAGES
import ViewAll from "./Pages/ViewAll.jsx";
import "/css/main.min.css";
("");

function App() {
  return (
    <ShopContextProvider>
      <NavigationBar />
      <SearchBar />
      <Container className="container-fluid mw-100 p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewall" element={<ViewAll category="View All" />} />
          <Route
            path="/megapacks"
            element={<ShopCategory category="Mega Packs" />}
          />
          <Route path="/cutout" element={<ShopCategory category="Cutout" />} />
          <Route
            path="/flatvector"
            element={<ShopCategory category="Flat Vector" />}
          />
          {/* COLLECTIONS */}
          <Route
            path="/collections"
            element={<Collections category="Collections" />}
          />
          <Route
            path="/characters"
            element={<ByCategory category="Characters" />}
          />
          <Route path="/animals" element={<ByCategory category="Animals" />} />
          <Route path="/plants" element={<ByCategory category="Plants" />} />
          <Route
            path="/furniture"
            element={<ByCategory category="Furniture" />}
          />
          <Route
            path="/vehicles"
            element={<ByCategory category="Vehicles" />}
          />
          <Route
            path="/patterns"
            element={<ByCategory category="Patterns" />}
          />
          <Route
            path="/textures"
            element={<ByCategory category="Textures" />}
          />
          <Route path="/graphic" element={<ByCategory category="Graphic" />} />
          <Route path="/maps" element={<ByCategory category="Maps" />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Container>
      <Footer />
    </ShopContextProvider>
  );
}

export default App;
