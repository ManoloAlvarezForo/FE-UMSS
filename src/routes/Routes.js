import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen/RestaurantsScreen';

export default function Routes() {
  return (
    <Switch>
      <Route component={HomeScreen} path="/" exact />
      <Route component={RestaurantsScreen} path="/restaurants" exact />
    </Switch>
  );
}
