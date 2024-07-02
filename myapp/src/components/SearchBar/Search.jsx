import React from 'react'
import "./Search.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Search = () => {
  const [query , setQuery] = useState({
    type:"buy",
    city:"",
    minPrice:0,
    maxPrice:100000000,
  })
  const switchType = (val) => {
    setQuery(prev=> ({...prev , type:val}));
  }
  const handleChange = (e) => {

    setQuery(prev=> ({...prev , [e.target.name] : e.target.value }));

  }
  return (
    <div class="search">
      <div class="type">
        <button onClick={()=> switchType("buy")} className={query.type === "buy" ? "button-active" : "" }>Buy</button>
        <button onClick={()=> switchType("rent")} className={query.type === "rent" ? "button-active" : "" }>Rent</button>
      </div>
      <form>
        <input type="text" name="city" placeholder="City" onChange ={handleChange}/>
        <input 
        type="number"
        name="maxPrice"
        min={0}
        max={1000000000}
        placeholder="Max Price"
        onChange ={handleChange}
        />
        <input 
        type="number"
        name="minPrice"
        min={0}
        max={1000000000}
        placeholder="Min Price"
        onChange ={handleChange}
        />
        <Link to={`/list?type=${query.type}&city=${query.city}&maxPrice=${query.maxPrice}&minPrice=${query.minPrice}`}>
          <button>
            <img src="/search.png" height="24px" width="24px"/>
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Search
