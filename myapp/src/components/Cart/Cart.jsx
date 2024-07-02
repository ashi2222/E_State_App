import "./Cart.css"
import { Link } from 'react-router-dom'
const Cart = ({item}) => {
  return (
    <div className="cart">
        <Link to={`/${item.id}`} className="imgcontent">
          <img src={item.images[0]}/>
        </Link>
      
      <div className="cartcontent">
        <h3 class="head1">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h3>
        <p className="address">
          <img src="/pin.png"/>
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png"/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png"/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png"/>
            </div>
            <div className="icon">
              <img src="/chat.png"/>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
