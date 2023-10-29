import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';


function Add({key,title,author,price}){
  const style = {
    textDecoration: 'none', // Remove the underline
    color: 'white', // Change the link color
  }
  
  //const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(AppContext);

  function handleAddToCart() {
    // Check if the book is already in the cart
    const bookInCart = cartItems.find((item) => item.title === title);

    if (bookInCart) {
      // Update the quantity of the existing book
      const updatedCartItems = cartItems.map((item) => {
        if (item.title === title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // Add a new book to the cart
      setCartItems([...cartItems, { title, author, price, quantity: 1 }]);
    }
  }
  
  

  function handleOrder(){
    console.log(`${author} book order is placed, Successfully!!!`);
    //navigate('/order');
  }

  
  return (
    <div className='addbutton'>
      <Button className='Add-button1' variant="outline-success" onClick={handleAddToCart}><NavLink to='/cart' style={style}>🛒 Add to Cart</NavLink></Button>{'   '}
      <Button className='Add-button2' variant="outline-success" onClick={handleOrder}><NavLink to='/Order' style={style}>Buy Now 🔥</NavLink></Button>
    </div>
  )
}

export default Add;
