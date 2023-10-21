import React from "react";
import UI from './UI';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Order from "./Order";
import Cart from "./Cart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UI />}/>
        <Route path="/Order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
