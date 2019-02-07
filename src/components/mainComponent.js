import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container,Nav, NavLink, Button, Form, FormControl} from 'reactstrap';
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
       
        <Navbar expand="md" sticky="top" color="light" light>
            <NavbarBrand href="#">Resturant Confusion</NavbarBrand>
            <Nav className="mr-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#Aboutus">About Us</NavLink>
            <NavLink href="#Contact">Contact</NavLink>
            </Nav>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu> 
        <DishDetails dish = { this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
