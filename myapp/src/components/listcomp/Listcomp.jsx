import React from 'react'
import Cart from "../Cart/Cart.jsx"
import {listData} from "../../lib/dummydata.js"
import "./listcomp.css"

const Listcomp = ({posts}) => {
  return (
    <div className='listcomp'>
      {
      posts.map(item => ( 
        <Cart key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Listcomp
