import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/menu';
import {DISHES} from './shared/dishes';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto" href="/"> Resturant Confusion</NavbarBrand>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>  
      </div>
    );
  }
}

export default App;
