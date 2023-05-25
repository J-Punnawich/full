import React, { useEffect, useState } from 'react';

const ShoppingPage = () => {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/attractions').then(res=> res.json()).then(result => {console.log(result)
  setItems(result)})
   })



  return (
    <div>
      <h2>Attractions Page</h2>
      <h3>Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            

            <img src={item.coverimage} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.detail}</p>
            <p>{item.latitude}- {item.latitude} </p>
            
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default ShoppingPage;
