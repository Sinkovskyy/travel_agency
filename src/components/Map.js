import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';
import {useState,useEffect} from "react";
// import 'leaflet/dist/leaflet.css';
function Map()
{

    const [resize,setResize] = useState(isPCResolution());

    function isPCResolution()
    {
        const size = 800;
        if(window.innerWidth > size)
        {
            return true;
        }
        return false;
    }


    function handleResize()
    {
        setResize(isPCResolution());
    }


    useEffect(() => {
        
        window.addEventListener("resize",handleResize)

        return () => {
            window.removeEventListener("resize",handleResize);
        }
    });

    return(
        <MapContainer 
        center={[-8.409518, 115.188919]} 
        zoom={9} 
        scrollWheelZoom={false}
        key={resize}
        dragging={resize}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-8.409518, 115.188919]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>
                   The best place on the Earth!
                </Popup>
            </Marker>

            </MapContainer>

    );
    
    
}


export default Map;