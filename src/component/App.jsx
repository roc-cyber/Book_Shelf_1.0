import React from "react";
import UI from './UI';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Order from "./Order";
import Cart from "./Cart";
import About from "./About";
import Action from "./Action";
import Contact from './Contact';
import Error from "./Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UI />} />
          <Route path='/About' element={<About />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<Error />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
