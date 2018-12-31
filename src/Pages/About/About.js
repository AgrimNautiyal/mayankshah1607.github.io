import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import './About.css';
import dp from './mayank.jpeg'
import img from './down.png'

export default class About extends Component{
        scroll = () =>{
                var element = document.getElementById("portfolio");
                element.scrollIntoView({behavior: 'smooth',block: "start"})
            }

    render(){
        return(
                <div id='about' className='flex flex-column white items-center justify-center items-center vh-100 container'>
                <div className='header'>
                        <p className='fw6'>About Me</p>
                        <Divider className='divider'/>
                </div>
                <div><img className='br3 dp mv4' alt='#' src={dp}></img></div>
                <div className='w-60 f4'>
                        <p>
                                "Hi! I'm Mayank. I'm a Computer Science student at VIT, Vellore, aspiring to become a Machine Learning engineer, with a profound interest in Natural Language Processing, Computer Vision and Data Science. Apart from that, I'm a full stack Web developer and an App developer."
                        </p>
                </div>
                <img className='dimg' src={img} alt='#' onClick={() => this.scroll()}></img>
                </div>
        );
    }
}