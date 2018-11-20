const axios = require('axios');

const getClima = async (lat,lng)=>{
  let apikey = "343434342342434"; //esto hay que obtenerlo
  let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&long=${lng}&units=metric&appid=${apikey}`);
  return respuesta.data.main.temp;
}

module.expors = {
  getClima
}
