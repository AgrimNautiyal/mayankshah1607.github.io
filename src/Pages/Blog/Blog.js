import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import CardList from '../../Components/Card/CardList'
import data from './bloglist';

export default class Blog extends Component{

    render(){
        return(
            <div id='blog' className='flex flex-column white items-center container'>
                <div className='header mb4'>
                        <p className='fw6'>Blog</p>
                        <Divider className='divider'/>
                </div>
            <CardList mode='Read Now!' data={data}/><br/><br/><br/>

            <div class="footer">
            Designed and Developed by <span onClick={() => window.open('https://github.com/mayankshah1607')}><strong>Mayank</strong></span>
            </div>
            </div>
        );
    }
}