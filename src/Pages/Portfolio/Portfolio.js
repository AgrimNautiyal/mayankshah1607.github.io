import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import './Portfolio.css'
import CardList from '../../Components/Card/CardList'
import data from './projects';

export default class Portfolio extends Component{

    render(){
        return(
            <div id='portfolio' className='flex flex-column white items-center container'>
                <div className='header mb4'>
                        <p className='fw6'>Portfolio</p>
                        <Divider className='divider'/>
                </div>
            <CardList mode='Find out!' data={data}/><br/><br/><br/>
            </div>
        );
    }
}