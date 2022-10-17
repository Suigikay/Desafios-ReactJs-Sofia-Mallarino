import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHg8OdZapJr4zzqq474460WxWpsOu6jQ4",
  authDomain: "sibila-sofia-mallarino.firebaseapp.com",
  projectId: "sibila-sofia-mallarino",
  storageBucket: "sibila-sofia-mallarino.appspot.com",
  messagingSenderId: "37105786849",
  appId: "1:37105786849:web:fc663e3cdf2a733dd43ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems(){
  const collectionRef = collection (firestore, "productos")
  let snapshotDB = await getDocs(collectionRef)

  let dataDocs = snapshotDB.docs.map((documento) => {
   let docFormateado = {...documento.data(), id:documento.id}
  return docFormateado
});
return dataDocs
}


export async function getSingleItems (idParams){
  const docRef = doc(firestore, "productos", idParams);
  const docSnapshot = await getDoc (docRef);

  return  { ...docSnapshot.data(), id : docSnapshot.id}

} 

export async function getItemsByCategory(catParams){
    const collectionRef = collection (firestore, "productos");
    const queryCategory = query (collectionRef, where ("category", "==", catParams));

    const snapshotDB = await getDocs (queryCategory);

    
  let dataDocs = snapshotDB.docs.map((documento) => {
   let docFormateado = {...documento.data(), id:documento.id}
  return docFormateado
});
return dataDocs
}


export default firestore;
