import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function Add(){
  const [count, setcount]=useState(0);

  function inc(){
    setcount(count+1);
  }

  function dec(){
    if(count<=0){
      return;
    }
    setcount(count-1);
  }
  return (
    <div>
      <button className='Add-count' onClick={inc}>+</button>
      <h3 style={{color:'silver-black'}}>Quantity: {count}</h3>
      <button className='remove-count' onClick={dec}>-</button>
      <Button className='Add-button1' variant="outline-success" onClick={()=>console.log('Added to the Cart!')}>Add to Chart</Button>{'   '}
      <Button className='Add-button2' variant="outline-success" onClick={()=>console.log('Your order is placed, Successfully!!!')}>Placed the order</Button>
    </div>
  )
}

export default Add;
