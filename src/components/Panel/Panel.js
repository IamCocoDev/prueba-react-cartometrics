import React, { useContext, useState } from 'react';
import './Panel.css'
import { ParcelContext } from '../../context/ParcelContext';

function Panel() {
  const [BuyOut, setBuyOut] = useState(true)



  const [NewBuyer, setNewBuyer] = useState({
    name: '',
    phone: 0,
    email: '',
    price: 0,
  });

  const { Info, setInfo, PostParcel} = useContext( ParcelContext )
  
  const handleOnClick = (e) => {
    e.preventDefault();
    setBuyOut(false)
  }

  function handleChange(e) {
    setNewBuyer({
      ...NewBuyer, [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit= (e) => {
    e.preventDefault();
    setBuyOut(true)
    setInfo({})
    PostParcel(NewBuyer)
  }


  return (
      BuyOut === true ?
      <div className={!Info.price ? 'panelBoxHiden' : 'panelBox' }>
        <span>REFCAT</span>
        <h3>{Info && Info.refcat}</h3>
        <span>Contact</span>
        <h3>{Info && Info.contacto}</h3>
        <span>Last Visit</span>
        <h3>{Info && Info.lastVisit}</h3>
        <span>Description</span>
        <h3>{Info && Info.description}</h3>
        <span>Price</span>
        <h3>{Info && Info.price}</h3>
        <button onClick={handleOnClick}>Invest In</button>
      </div>
        : 
        <div className={BuyOut === true ? 'panelBoxHiden2' : 'panelBox2' }>
          
          <form className='form1' onSubmit={handleOnSubmit}>
              <span>Name and Last Name </span>
              <input onChange={handleChange} name='name' required></input>
              <span>Email</span>
              <input onChange={handleChange} name='email' required></input>
              <span>Phone</span>
              <input onChange={handleChange} name='phone' required></input>
              <span>Amout To Pay</span>
              <input onChange={handleChange} name='price' required></input>
              <input className='button' type="submit" value='Finish Your Purchase'/>
          </form>
          
        </div>
  )
}

export default Panel
