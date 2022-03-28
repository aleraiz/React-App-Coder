import React , {useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getItems } from '../../../service/firebase';


const ItemDetailContainer = () => {
  
const [item, setitem] = useState();
const {id} = useParams();
const [isloading,setisloading] = useState(true);

useEffect( () => {
        let requestDatos = getItems(id);


    requestDatos
    .then( (itemsPromise) =>{
        setitem(itemsPromise);
    })
    .catch( (errorMsg) => {
        console.log(errorMsg);
    })
    .finally( ()=> {
        setisloading(false);
    });


},[])


  return (
    <>
    {isloading ? <h1>Cargando...</h1> : <ItemDetail item={item}/> }
    </>
  ); 
};


export default ItemDetailContainer;