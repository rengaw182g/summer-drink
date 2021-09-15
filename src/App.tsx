import React, { useEffect, useState } from 'react';
import Header from './components/header';
import api from './services/Api';
import './App.css';

function App() {

  const [product,setProduct] = useState([]);

  useEffect(()=>{
    async function listCoktails(){
    const result = await api.get('/search.php?f=a');
    setProduct(result);
    }
    listCoktails();
  },[]);

  return (
    <>
    <Header/>
    <ul>
      {product.map(item => 
        <li key={item.id}>{item.id}</li>
      )}
    </ul>
    </>
  );
}

export default App;
