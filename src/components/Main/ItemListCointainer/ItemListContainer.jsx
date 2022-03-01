// import axios from 'axios';
import React , {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

// const ItemListContainer = ( )=> {

//   const getData = async () =>{
//     try {
//       const response = await axios.get("http://hp-api.herokuapp.com/api/characters");
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData()
//   }, []);

//   return <h1>Item List container</h1>
  

// }



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
    "category": "prendas",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 4,
    "name": "Body",
    "category": "prendas",
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
    "category": "prendas",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 10,
    "name": "Camisa abotonada",
    "category": "prendas",
    "price": 2990,
    "stock": 8,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/prenda11.png?raw=true"
  }]

function obtenerDatosDB(categoryid) {
    let error = false;

    return new Promise( (resolve,reject) =>{
        setTimeout(
            () => {
              if(categoryid){
              let resultado = DBproducts.filter( (items) =>{
                console.log(items, categoryid);
                return items.category === categoryid
              })
              resolve(resultado)
            }else resolve(DBproducts)
            },
              1000);
        if(error) {
            reject(new Error('Error en la promesa') )
        }
    });
}


const ItemListContainer = () => {
  let {categoryid} = useParams();

const [items, setitems] = useState([]);

useEffect( () => {
        let requestDatos = obtenerDatosDB(categoryid);

    requestDatos
    .then( (itemsPromise) =>{
        setitems(itemsPromise);
    })
    .catch( (errorMsg) => {
        console.log(errorMsg);
    })
    .finally( ()=> {
        // console.log('Promesa terminada');
    });


},[categoryid])


  return (
    <>
        <ItemList items={items}/>
    </>
  ); 
};


export default ItemListContainer;