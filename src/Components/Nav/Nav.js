import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './Nav.css';

export default class Nax extends Component{
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      var element = document.getElementById(name);
      element.scrollIntoView({behavior: 'smooth',block: "start"})
    }
    render(){
        const { activeItem } = this.state
        return(
        <div className='pa2 div-menu'>
          <Menu secondary inverted className='menu'>
              <Menu.Menu position='left'>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='portfolio'
                active={activeItem === 'portfolio'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='blog'
                active={activeItem === 'blog'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='resume'
                active={activeItem === 'blog'}
                onClick={this.handleItemClick}
              />
              </Menu.Menu>
            </Menu>
          </div>
        );
    }
}