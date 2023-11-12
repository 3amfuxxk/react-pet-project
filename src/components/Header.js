import React, { useState } from 'react' 
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price)) 
  return (<div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Total: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
      <h2>Nothing in cart</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>Aki</span>
            <div className='wrap-me'>
              <ul className='nav'>
                  <li>About us</li>
                  <li>Contacts</li>
                  <li>Personal account</li>
              </ul>
              <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            </div>

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                    showOrders(props) : showNothing()
                /* {props.orders.map(el => (
                  <Order key={el.id} item={el} />
                ))} */}
              </div>
            )}
        </div>
        <div className='presentation'>
                <img className='pres-logo' />
        </div>
    </header>
  )
}
