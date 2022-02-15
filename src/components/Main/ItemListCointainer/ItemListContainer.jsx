import React , {useState, useEffect} from 'react'
import ItemList from './ItemList';

const DBproducts = [{
    "id": 1,
    "name": "Bufanda tipo chal",
    "category": "accesorios",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/bufanda.png?raw=true"
  }, {
    "id": 2,
    "name": "Cinturon",
    "category": "accesorios",
    "price": 1990,
    "stock": 10,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/cinturon1.png?raw=true"
  }, {
    "id": 3,
    "name": "Jeans",
    "category": "accesorios",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 4,
    "name": "Body",
    "category": "superiores",
    "price": 2990,
    "stock": 7,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/prenda4.png?raw=true"
  }, {
    "id": 5,
    "name": "Sandalias",
    "category": "zapatos",
    "price": 4990,
    "stock": 9,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/zap4.png?raw=true"
  }, {
    "id": 6,
    "name": "Sombrero panameño",
    "category": "accesorios",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/sombrero3.png?raw=true"
  }, {
    "id": 7,
    "name": "Cinturon",
    "category": "accesorios",
    "price": 1990,
    "stock": 11,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/cinturon5.png?raw=true"
  }, {
    "id": 8,
    "name": "Bufanda tipo chal",
    "category": "accesorios",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/bufanda.png?raw=true"
  }, {
    "id": 9,
    "name": "Jeans",
    "category": "accesorios",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 10,
    "name": "Camisa abotonada",
    "category": "superiores",
    "price": 2990,
    "stock": 8,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/prenda11.png?raw=true"
  }]

function obtenerDatosDB() {
    let error = false;

    return new Promise( (resolve,reject) =>{
        setTimeout(
            () => {resolve(DBproducts) },
        1000);
        if(error) {
            reject(new Error('Error en la promesa') )
        }
    });
}


const ItemListContainer = () => {

const [items, setitems] = useState([]);

useEffect( () => {
        let requestDatos = obtenerDatosDB();

    requestDatos
    .then( (itemsPromise) =>{
        setitems(itemsPromise);
    })
    .catch( (errorMsg) => {
        console.log(errorMsg);
    })
    .finally( ()=> {
        console.log('Promesa terminada');
    });


},[])


  return (
    <>
        <ItemList items={items}/>
    </>
  ); 
};


export default ItemListContainer;