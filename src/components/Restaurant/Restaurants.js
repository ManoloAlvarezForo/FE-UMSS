import React from "react";
import "./Restaurants.css";
import { TextField, Button } from "@material-ui/core";
import restaurantsData from './RestaurantData';

function RestaurantList({ restaurants }) {
  return restaurants.map(restaurant => {
    return (
      <div
        key={restaurant.id}
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10px 20px",
          padding: "5px",
          borderRadius: "5px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        }}
      >
      <img src={restaurant.image} alt="Logo" width={140} height={140} />
        <div style={{ diplay: "flex", flexDirection: "column", marginLeft: '20px' }}>
          <div
            style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "20px 0" }}
          >
            {restaurant.name}
          </div>
          <div>{restaurant.address}</div>
        </div>
      </div>
    );
  });
}

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      query: ""
    };
  }

  onChangeHandle = value => {
    const foundRestaurants = restaurantsData.filter(restaurant =>
      restaurant.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      query: value,
      restaurants: foundRestaurants
    });
  };

  render() {
    const { restaurants, query } = this.state;

    return (
      <div className="rest-list">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            style={{ margin: "10px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="dense"
            value={query}
            onChange={e => this.onChangeHandle(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onClickHandle}
            >
              Buscar
            </Button>
          </div>
        </div>
        <RestaurantList restaurants={restaurants} />
      </div>
    );
  }
}

export default Restaurants;
