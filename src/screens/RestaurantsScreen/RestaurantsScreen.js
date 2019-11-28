import React from 'react';
import Restaurants from '../../components/Restaurant/Restaurants';
import { Link } from 'react-router-dom';

export default function RestaurantsScreen() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurantes</Link>
        </li>
      </ul>
      <Restaurants />
    </div>
  );
}
