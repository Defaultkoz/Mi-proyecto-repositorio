import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from "react"; 
import React, { useState } from "react";
import "./prpoy.css";

const customIcon = new L.Icon({
  iconUrl: 'https://th.bing.com/th/id/OIP.WcumFfdAjiDVzRULmFZ05QAAAA?rs=1&pid=ImgDetMain', // Reemplaza con la URL de tu imagen
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto del icono que se ubicará en la posición del marcador
  popupAnchor: [1, -34], // Punto desde el cual se abrirá el popup relativo al icono
  shadowUrl: '', // Reemplaza con la URL de la sombra de tu imagen (opcional)
  shadowSize: [41, 41], // Tamaño de la sombra (opcional)
  shadowAnchor: [12, 41] // Punto de la sombra que se ubicará en la posición del marcador (opcional)
})


export const MapComponent = ({ pais }) => {
  const dataPais={
    updated: 0, country: "",
    countryInfo: {
      _id: 0, iso2: "", 
      iso3: "", 
      lat: 0, 
      long: 0, 
      flag: ""
    },
    cases: 0, todayCases: 0, deaths: 0, todayDeaths: 0,
    recovered: 0, todayRecovered: 0, active: 0, critical: 0,
    casesPerOneMillion: 0, deathsPerOneMillion: 0, tests: 0,
    testsPerOneMillion: 0, population: 0, continent: "",
    oneCasePerPeople: 0, oneDeathPerPeople: 0, oneTestPerPeople: 0,
    activePerOneMillion: 0, recoveredPerOneMillion: 0, criticalPerOneMillion: 0
  };
  const [data, setData] = useState(dataPais)

  
  useEffect(() => {
    if (pais) {
      console.log("Fetching data for:", pais);
      setLoading(true);
      fetch(`https://disease.sh/v3/covid-19/countries/${pais}`)
        .then(response => response.json())
        .then(data => {
          console.log("Data fetched:", data);
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        })
    
      }
  }, [pais]);

  
 
  const [loading, setLoading] = useState(true);

 

  const diferencia = parseFloat((data.cases - data.recovered) / data.cases * 100).toFixed(2);
  const position = [data.countryInfo.lat, data.countryInfo.long];

  if (loading) {
    console.log("Loading...");
    return <div>Cargando...</div>;
  }
  if (!data.countryInfo.lat || !data.countryInfo.long) {
    return <p>No se encuentra el país.</p>;
  }
  else{
  console.log("Rendering map with position:", position);
  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <ol>
            <li>Muertes: {data.deaths}</li>
            <li>Casos: {data.cases}</li>
            <li>Diferencia: {diferencia}%</li>
            <li>Recuperados: {data.recovered}</li>
          </ol>
        </Popup>
      </Marker>
    </MapContainer>
  );}
}

