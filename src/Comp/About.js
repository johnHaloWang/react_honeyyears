import React, {useState, useEffect } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'



function About() {
  // var data = require('../data/example.json');
  // var data2 =  JSON.parse(data);
  // console.log(data2); 
  useEffect(()=>{
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () =>{
      const items = await require('../data/example.json');
      console.log(items.items);
      setItems(items.items);
  }
  return (
    <div>
      <h1>About Page</h1>
      {
        items.map(item => (
          <h1 key={item.id}> {item.id}</h1>
        )
        )
      }
    </div>
  );
}

export default About;