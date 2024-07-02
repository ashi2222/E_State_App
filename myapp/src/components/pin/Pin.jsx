import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Pin.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude , item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} />
            <div className="textContainer">
                <Link to = {`/${item.id}`} >{item.title}</Link>
                <span>{item.bedroom} bedroom</span>
                <b>${item.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin
