import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import AppContext from '../AppContext';
import { NavLink } from 'react-router-dom';


function Cart({author}) {
const style ={
  color : 'white',
  textDecoration: 'none'
}

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleIncrement = (title) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === title) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (title) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === title && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemove = (title) => {
    const updatedCartItems = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCartItems);
  };

  function handleOrder(){
    console.log(`${author} book order is placed, Successfully!!!`);
    //navigate('/order');
  }

  return (
    <div className='cart-page'>
      <header>
        <h1 className='cart-header'>BookShelf Cart</h1>
      </header>
      {cartItems.map((item) => (
        <div key={item.id} className='cart-item'>
          <h3 className='cart-title'>{item.title}</h3>
          <p className='cart-author'>{item.author}</p>
          
          <div className='cart-quantity'>
            <Button className='cart-button' onClick={() => handleIncrement(item.title)}>+</Button>
            <span className='cart-quantity-value'>{item.quantity}</span>
            <Button className='cart-button' onClick={() => handleDecrement(item.title)}>-</Button>
          </div>
          <div className='cart-remove-button'>
            <Button className='remove-cart' onClick={() => handleRemove(item.title)}>remove</Button>
          </div>
        </div>
      ))}
      <div className='order-section'>
        <footer><Button className='placed-cart' onClick={handleOrder}><NavLink to='/Order' style={style}>Placed Order</NavLink></Button></footer>
      </div>
    </div>
  );
}

export default Cart;
