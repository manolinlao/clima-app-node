const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
  direccion:{
    alias:'d',
    desc:'Dirección de la ciudad para obtener el clima',
    demand:true
  }
}).argv;

let getInfo = async(direccion)=>{
  try{
    let coordenadas = await lugar.getLugarLatLng(direccion);
    let temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng);

    return `El clima en ${coordenadas.direccion} es de ${temperatura}`;
  }catch(error){
    return `No se pudo determinar el clima en ${direccion}`;
  }
}

console.log(`Obteniendo clima para ${argv.direccion}`);
getInfo(argv.direccion)
  .then(mensaje=>console.log(mensaje))
  .catch(error=>console.log(error));
