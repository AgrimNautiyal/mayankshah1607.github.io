import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import dp from './mayank.jpeg';
import './About.css';

export default class About extends Component{
        scroll = () =>{
                var element = document.getElementById("portfolio");
                element.scrollIntoView({behavior: 'smooth',block: "start"})
        }

    render(){
        return(
                <div id='about' className='flex flex-column white items-center justify-center vh-100 items-center container'>
                <div className='header dummy'>
                        <p id='this' className='fw6'>About Me</p>
                        <Divider className='divider'/>
                </div>
                <div><img className='br3 dp mv5' alt='#' src={dp}></img></div>
                <div className='w-70 f4'>
                        <p>
                                "Hi! I'm Mayank - a Computer Science student at VIT, Vellore, aspiring to become a Machine Learning engineer, with a profound interest in Natural Language Processing, Computer Vision and Data Science. Apart from that, I'm a full stack deveoper and an open source ethusiast."
                        </p>
                </div>
                </div>
        );
    }
}