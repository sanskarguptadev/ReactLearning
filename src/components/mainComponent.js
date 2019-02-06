import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../components/menu';
import DishDetails from '../components/dishdetail';
import {DISHES} from '../shared/dishes';

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto" href="/"> Resturant Confusion</NavbarBrand>
        </Navbar> 
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu> 
        <DishDetails dish = { this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
