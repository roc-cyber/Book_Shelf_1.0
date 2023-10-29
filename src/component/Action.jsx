import React from 'react'
import Header from './Header'



export default function Action() {
    function handleform(){
        return <h1>Thank you</h1>
    }
  return (
    <div>
      <Header />
      <div className='Action'>
        
        <form  onSubmit=''>
          <label>username</label>
          <input type='username' placeholder='Enter your name:'></input>

          <label>subject</label>
          <input type='subject' placeholder='Describe your subject'></input>

          <label>Complaint</label>
          <input type='Complain' placeholder='Enter your complain in 500 words'></input>
        </form>
        <button onClick={handleform}>Submit</button>
      </div>
      
    </div>
  )
}
