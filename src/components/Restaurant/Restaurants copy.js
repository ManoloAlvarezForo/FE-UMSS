import React, { useState, useEffect } from 'react';
import './Restaurants.css';
import { TextField, Button } from '@material-ui/core';

function RestaurantList({ restaurants }) {
  return restaurants.map(restaurant => {
    return (
      <div
        key={restaurant.id}
        style={{
          margin: '10px 0',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
        }}
      >
        <div
          style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}
        >
          {restaurant.title}
        </div>
        <div>{restaurant.body}</div>
      </div>
    );
  });
}

export default function Restaurants() {
  //   const restaurants = [
  //     { id: 1, name: 'La Plaxe', address: 'Loreto' },
  //     { id: 2, name: 'Los Agachados', address: 'Zona Sur' },
  //     { id: 3, name: 'Anticuchino', address: 'Quillacollo' },
  //     { id: 4, name: 'La Horuga', address: '12 de Septiembre' }
  //   ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setPosts(myJson);
      });
  }, [posts]);

  return (
    <div className="rest-list">
      <div
        style={{ maxWidth: '20%', display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          style={{ margin: '10px' }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
        />
        <TextField
          style={{ margin: '10px' }}
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          margin="dense"
        />
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
      <RestaurantList restaurants={posts} />
    </div>
  );
}
