import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';



function Add({key,author}){
  const style = {
    textDecoration: 'none', // Remove the underline
    color: 'white', // Change the link color
  }
  const [count, setcount]=useState(0);
  //const navigate = useNavigate();

  function inc(){
    setcount(count+1);
  }

  function dec(){
    if(count<=0){
      return;
    }
    setcount(count-1);
  }

  function handleOrder(){
    console.log(`${author} book order is placed, Successfully!!!`);
    //navigate('/order');
  }
  return (
    <div>
      <button className='Add-count' onClick={inc}>+</button>
      <h5 style={{color:'silver-black'}}>Quantity: {count}</h5>
      <button className='remove-count' onClick={dec}>-</button>{' '}
      <Button className='Add-button1' variant="outline-success" onClick={()=>alert(`Total ${count} of the ${author} books has been added to your Cart!`)}><NavLink to='/cart' style={style}>Add to Cart</NavLink></Button>{'   '}
      <Button className='Add-button2' variant="outline-success" onClick={handleOrder}><NavLink to='/Order' style={style}>Buy Now 🔥</NavLink></Button>
    </div>
  )
}

export default Add;
