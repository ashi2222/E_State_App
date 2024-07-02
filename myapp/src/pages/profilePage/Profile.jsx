import React, { Suspense, useContext } from 'react'
import Listcomp from "../../components/listcomp/Listcomp"
import "./Profile.css"
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { Await, Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Cart from '../../components/Cart/Cart'
const Profile = () => {

  const data = useLoaderData();

  const {updateUser, currentUser} = useContext(AuthContext);


  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      const res =await apiRequest.post("/auth/logout");
      // localStorage.removeItem("user");
      updateUser(null)
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>Avatar:  
              <img src={currentUser.avatar || "/DH.png"}
              alt=""/>
            </span>
            <span>Username : <b>{currentUser.username}</b> </span>
            <span>Email : <b>{currentUser.email}</b> </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.postResponse}
            errorElement={<p>Error Loading posts !</p>}
            >
              {(postResponse) => 
                <Listcomp posts={postResponse.data.userPosts}/>
              }
            </Await>

            </Suspense>
          
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.postResponse}
            errorElement={<p>Error Loading posts !</p>}
            >
              {(postResponse) => 
                <Listcomp posts={postResponse.data.savedPosts}/>
              }
            </Await>

            </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
        <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.chatResponse}
            errorElement={<p>Error Loading chats !</p>}
            >
              {(chatResponse) => 
                <Chat chats={chatResponse.data}/>
              }
            </Await>

            </Suspense>
        </div>
      </div>
    </div>
    
  )
}

export default Profile
