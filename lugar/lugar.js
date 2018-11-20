const axios = require('axios');

const getLugarLatLng = async(direccion)=>{

  let encodedUrl = encodeURI(direccion);

  console.log("lugar.js::encodedUrl = " + encodedUrl);

  //llamada a axios
  let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU`)
  if(respuesta.data.status=="ZERO_RESULTS"){
    throw new Error(`No hay resultados para la ciudad ${direccion}`);
  }
  let location = respuesta.data.results[0];
  let coordenadas = location.geometry.location;
  console.log('Direccion:',location.formatted_address);
  console.log('Latitud:',coordenadas.lat);
  console.log('Longitud:',coordenadas.lng);

  return{
    direccion: location.formatted_address,
    lat: coordenadas.lat,
    lng: coordenadas.lng
  }
}

module.exports = {
  getLugarLatLng
}
