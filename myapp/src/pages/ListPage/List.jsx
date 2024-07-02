import React, { Suspense } from 'react'
import "./List.css"
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart.jsx'
import Map from '../../components/map/Map.jsx'
import { Await, useLoaderData } from 'react-router-dom'
const List = () => {
  const data = useLoaderData();
  return (
    <div className="list">
      <div className="listcontainer">
          <div className="wrapper">
            <Filter/>
            <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.postResponse}
            errorElement={<p>Error Loading posts !</p>}
            >
              {(postResponse) => 
                  postResponse.data.map(post=>(
                    <Cart key={post.id} item={post} />
                  ))
              }
            </Await>

            </Suspense>
          </div>
      </div>
      <div className="mapcontainer">
      <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.postResponse}
            errorElement={<p>Error Loading posts !</p>}
            >
              {(postResponse) => 
                <Map items={postResponse.data}/>
              }
            </Await>
      </Suspense>
      </div>
    </div>
  )
}

export default List
