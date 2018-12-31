import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import './Portfolio.css'
import CardList from '../../Components/Card/CardList'
import data from './projects'
import img from './down.png'

export default class Portfolio extends Component{

    render(){
        return(
            <div id='portfolio' className='flex flex-column white items-center justify-center items-center vh-200 container'>
                <div className='header mb4'>
                        <p className='fw6'>My Portfolio</p>
                        <Divider className='divider'/>
                </div>
                <CardList data={data}/><br/><br/><br/>

            <div class="footer">
            Developed by <span onClick={() => window.open('https://github.com/mayankshah1607')}><strong>Mayank</strong></span>
            </div>
            </div>
        );
    }
}