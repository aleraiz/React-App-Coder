// import axios from 'axios';
import React , {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllItems, getCategoryItems } from '../../../service/firebase';


const ItemListContainer = () => {
  let {category} = useParams();

const [items, setitems] = useState([]);


useEffect( () => {
        // let requestDatos = getAllItems();
        let requestDatos = category? getCategoryItems(category) : getAllItems() ;

    requestDatos
    .then( (itemsPromise) =>{
        setitems(itemsPromise);
    })
},
  [category]);



  return (
    <>
    {<ItemList items={items}/> }
    </>
  ); 
};


export default ItemListContainer;