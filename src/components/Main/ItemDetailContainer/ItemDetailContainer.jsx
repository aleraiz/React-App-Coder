import React , {useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getItems } from '../../../service/firebase';


// const DBproducts = [{

//   }]

// function getItem(idProduct) {
//     let error = false;

//     return new Promise( (resolve,reject) =>{
//         setTimeout(
//             () => {
//                 let product = DBproducts.find( (product) =>{
//                     return product.id === Number(idProduct);
//                 });
//                 resolve(product);
//             },
//         1000);
//         if(error) {
//             reject(new Error('Error en la promesa') )
//         }
//     });
// }


const ItemDetailContainer = () => {

  // const {nombre} = useContext(CarritoContext)
  // console.log(nombre)
  
const [item, setitem] = useState();
const {id} = useParams();
const [isloading,setisloading] = useState(true);

useEffect( () => {
        let requestDatos = getItems(id);


    requestDatos
    .then( (itemsPromise) =>{
        setitem(itemsPromise);
        console.log(itemsPromise);
        console.log(id);
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