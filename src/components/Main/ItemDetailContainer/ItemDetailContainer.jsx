import React , {useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const DBproducts = [{
    "id": 1,
    "name": "Bufanda tipo chal",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/bufanda.png?raw=true"
  }, {
    "id": 2,
    "name": "Cinturon",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 1990,
    "stock": 10,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/cinturon1.png?raw=true"
  }, {
    "id": 3,
    "name": "Jeans",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 4,
    "name": "Body",
    "category": "superiores",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 2990,
    "stock": 7,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/prenda4.png?raw=true"
  }, {
    "id": 5,
    "name": "Sandalias",
    "category": "zapatos",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 4990,
    "stock": 9,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/zap4.png?raw=true"
  }, {
    "id": 6,
    "name": "Sombrero panameño",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/sombrero3.png?raw=true"
  }, {
    "id": 7,
    "name": "Cinturon",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 1990,
    "stock": 11,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/cinturon5.png?raw=true"
  }, {
    "id": 8,
    "name": "Bufanda tipo chal",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 990,
    "stock": 5,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/bufanda.png?raw=true"
  }, {
    "id": 9,
    "name": "Jeans",
    "category": "accesorios",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 3990,
    "stock": 4,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/pant1.png?raw=true"
  }, {
    "id": 10,
    "name": "Camisa abotonada",
    "category": "superiores",
    "description": "Acá va la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto la descripción del producto",
    "price": 2990,
    "stock": 8,
    "imageUrl": "https://github.com/aleraiz/js-EntregaFinal/blob/master/img/prenda11.png?raw=true"
  }]

function getItem(idProduct) {
    let error = false;

    return new Promise( (resolve,reject) =>{
        setTimeout(
            () => {
                let product = DBproducts.find( (product) =>{
                    return product.id === Number(idProduct);
                });
                resolve(product);
            },
        1000);
        if(error) {
            reject(new Error('Error en la promesa') )
        }
    });
}


const ItemDetailContainer = () => {

  // const {nombre} = useContext(CarritoContext)
  // console.log(nombre)
  
const [item, setitem] = useState();
const {id} = useParams();
const [isloading,setisloading] = useState(true);

useEffect( () => {
        let requestDatos = getItem(id);

    requestDatos
    .then( (itemsPromise) =>{
        setitem(itemsPromise);
    })
    .catch( (errorMsg) => {
        console.log(errorMsg);
    })
    .finally( ()=> {
        setisloading(false);
        console.log('Promesa terminada');
    });


},[])


  return (
    <>
    {isloading ? <h1>Cargando...</h1> : <ItemDetail item={item}/> }
    </>
  ); 
};


export default ItemDetailContainer;