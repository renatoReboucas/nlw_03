import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

//mapa
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../assets/map.marker.svg'

export default function OrphanagesMap() {
  // console.log(process.env.REACT_APP_MAPBOX_TOKEN);
  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      
      <Map
        center={[23.6990438,-46.6529385]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanages" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}
