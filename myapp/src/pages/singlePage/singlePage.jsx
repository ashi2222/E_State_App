import React, { useContext, useState } from 'react'
import "./singlePage.css"
import "./Responsive_single_page.css"
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map.jsx'
import { Navigate, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext.jsx"
import DOMPurify from "dompurify"
import apiRequest from "../../lib/apiRequest.js"
const SinglePage = () => {
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext)
  const [saved , setSaved] = useState(post.isSaved);
  const navigate = useNavigate()
  const handleSave =async () => {
    setSaved((prev)=>!prev);
    if(!currentUser)
      {
        redirect("/login");
      }
    try{

      await apiRequest.post("/users/save" , {postId : post.id});

      

    }catch(err)
    {
      console.log(err);
      setSaved((prev)=>!prev);
    }
  }

  const handelSendMessage =async ()=>{
    try {
      await apiRequest.post("/chats",{receiverId : post.userId})
       navigate("/profile")
    } catch (error) {
      console.log(error);
    }
}

  
  //console.log(post);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">
                  ${post.price}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar || "/DH.png"}/>
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postDetail.desc)}}>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {
                  post.postDetail.utilities === "owner" ?
                  <p>Owner is Responsible</p> : <p>Tenant is Responsible</p>
                }
                
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {
                  post.postDetail.pet === "Allowed" ?
                  <p>Pet Allowed</p> : <p>Pet Not Allowed</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">
            Room Sizes
          </p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size}sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school} m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>{post.postDetail.bus} m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}  m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]}/>
          </div>
          <div className="buttons">
            <button onClick={handelSendMessage}>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button onClick={handleSave} style={{backgroundColor : saved ? "#fece51" : "white"}}>
            <img src="/save.png" alt=""/>
            {saved ? "Place Saved" : "Save the Place" }
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SinglePage
