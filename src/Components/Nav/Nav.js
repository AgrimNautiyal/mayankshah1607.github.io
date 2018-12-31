import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './Nav.css';

export default class Nax extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
        <div className='mv3 mh4 div-menu'>
        <Menu size='tiny' secondary inverted pointing className='menu'>
            <Menu.Menu position='right'>
            <Menu.Item
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='portfolio'
              active={activeItem === 'portfolio'}
              onClick={this.handleItemClick}
            />
            </Menu.Menu>
          </Menu>
          </div>
        );
    }
}