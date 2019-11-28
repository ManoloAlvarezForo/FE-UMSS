import React from 'react';
import Home from '../../components/Home/Home';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
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
      <Home />
    </div>
  );
}
