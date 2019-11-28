import React from 'react';
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

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  getPosts = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson;
      });
  };

  async componentDidMount() {
    const newPosts = await this.getPosts();
    this.setState({
      posts: newPosts
    });
  }

  onClickHandle = (email, password) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson;
      });
  };

  render() {
    const { posts } = this.state;
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
            <Button
              variant="contained"
              color="primary"
              onClick={this.onClickHandle}
            >
              Login
            </Button>
          </div>
        </div>
        <RestaurantList restaurants={posts} />
      </div>
    );
  }
}

export default Restaurants;
