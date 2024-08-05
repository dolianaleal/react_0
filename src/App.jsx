import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pag/itemListContainer/ItemListContainer";
import Cart from "./pag/cart/Cart";
import ItemDetailContainer from "./pag/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Checkout from "./pag/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import CheckoutFormik from "./pag/checkoutFormik/CheckoutFormik";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route path="*" element={<h1> 404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
