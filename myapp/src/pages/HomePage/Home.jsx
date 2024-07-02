import React, { useContext } from 'react'
import "./Home.css"
import "./Responsive_Home.css"
import Search from '../../components/SearchBar/Search'
import { AuthContext } from '../../context/AuthContext'
const Home = () => {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="home">
      <div className="txtcontainer">
        <div class="Wrapper">
          <h1 className="head">Find Real Estate and Your Dream Apartment</h1>
          <p className="para">Discover your perfect sanctuary with Dream Home – where every house feels like home. Experience luxury living and unmatched comfort in the heart of your dream location. Find your dream home today and start living the life you've always imagined.</p>
        <Search/>
        <div className="box">
          <div className="box1">
            <h1 className="box-head-1">16+</h1>
            <h2 className="box-head-2">Year of experience</h2>
          </div>
          <div className="box1">
            <h1 className="box-head-1">200+</h1>
            <h2 className="box-head-2">Awards</h2>
          </div>
          <div className="box1">
            <h1 className="box-head-1">1900+</h1>
            <h2 className="box-head-2">Property Ready</h2>
          </div>
        </div>
      </div>
      </div>
      <div className="imgcontainer">
        <img src="/bg_2.jpg" alt="" className="img" />
      </div>
    </div>
  )
}

export default Home
