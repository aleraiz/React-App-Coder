// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq0zxg_Onk4lC3MUXsvwpv57Y05TuF23g",
  authDomain: "ecommerce-ar-9926c.firebaseapp.com",
  projectId: "ecommerce-ar-9926c",
  storageBucket: "ecommerce-ar-9926c.appspot.com",
  messagingSenderId: "684417288927",
  appId: "1:684417288927:web:1f7701b02a6a27e600f76a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

export async function getAllItems() {
  try {
    const myCollection = collection(db, "items");
    const itemsCollection = await getDocs(myCollection);
    const result = itemsCollection.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function getCategoryItems(category) {
  try {
    const myCollection = collection(db, "items");

    const Q = query(myCollection, where("category", "==", category));

    const docsInCollection = await getDocs(Q);

    const result = docsInCollection.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function getItems(productid) {
  try {
    const data = collection(db, "items");
    const itemRef = doc(data, productid);

    let resultDoc = await getDoc(itemRef);
    return { ...resultDoc.data(), id: resultDoc.id };
  } catch (err) {
    console.log(err);
  }
}

export async function generateOrder(orderData, idNumeroOrden) {
  try {
    const micoleccion = collection(db, "orders");
    const order = await addDoc(micoleccion, orderData);
    alert(`El formulario se ha enviado. El id de su compra es: ${order.id} `);
    return (idNumeroOrden = order.id);
  } catch (error) {
    console.error("Error enviando los datos:", error);
  }
}
