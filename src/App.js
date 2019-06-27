import React, { Component } from 'react';

import RestList from './restList';
import RestTypeList from './restTypeList';

import 'bulma/css/bulma.css';

const restaurants = {
  "mediterranean": {
      "Mediterranean Grill": [
          "hummus", "tabouli", "dolmas"
      ],
      "Yalla": [
          "hummus wrap", "tabouli wrap", "dolmas"
      ],
      "Nik's": [
          "spanakopita", "gyro", "dolmas"
      ]
  },
  "american": {
      "Chik fil a": [
          "chicken biscuit", "chicken sandwich", "chicken salad"
      ],
      "Mary Mac's Tea Room": [
          "biscuit", "fried chicken", "mashed potatoes"
      ],
      "Jersey Mike's": [
          "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
      ]
  },
  "mexican": {
      "Elmyriachi": [
          "tacos", "burritos", "cheese dip"
      ],
      "Mezcalito's Cantina": [
          "tortas", "tamales", "cheese dip"
      ],
      "Matador": [
          "cheese dip", "cheese dip", "cheese dip"
      ]
  }
}

class App extends Component {
  state = {
    cuisine: {}
  }

  handleClick = async (e, style) => {
    e.preventDefault();
    console.log("this is first item", style)
    //const restaurantList = restaurants[restaurant]
    //console.log(restaurantList)
    this.setState({
      cuisine: restaurants[style]
    })
  }



  render() {
  const { cuisine } = this.state;
  return (
    <div>
      {Object.keys(restaurants).map((foodStyle, ind) => 
      <button key={foodStyle+ind} onClick={(e) => this.handleClick(e, foodStyle)}>
        <h3>{foodStyle}</h3>
      </button>
      )}
      <RestTypeList restaurants={cuisine} />
    </div>
  )
  }
}

export default App;

{/* <div>
{Object.keys(restaurants).map((restaurant,ind) => 
  <button key={restaurant+ind} onClick={(e) => this.handleClick(e, restaurant)}>{restaurant}</button>
)}
<button onClick={(e) => this.handleClick(e)}>Medi</button>
<button>American</button>
<button>Mexican</button>
<RestTypeList restaurants={restaurants} />
</div> */}