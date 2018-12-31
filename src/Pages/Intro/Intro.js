import React, { Component } from 'react';
import './Intro.css';
import down from './down.png'

export default class Intro extends Component{

    scroll = () =>{
        var element = document.getElementById("about");
        element.scrollIntoView({behavior: 'smooth'})
    }

    render(){
        return(
        <div className='flex flex-column items-center justify-center items-center vh-100'>
            <div className='white fw6 intro mb4'>Mayank Shah</div>
            <div className='white fw5 mb4 intro-desc'>Machine Learning Engineer | Full Stack Developer</div>
            <div className='flex flex-row'>
            <span onClick={() => window.open('https://www.facebook.com/mayank.shah1607')} 
            class="socicon-facebook white pa2 bw1 ba br4 ma2"></span>

            <span onClick={() => window.open('https://github.com/mayankshah1607')} 
            class="socicon-github white pa2 bw1 ba br4 ma2"></span>

            <span onClick={() => window.open('https://www.linkedin.com/in/mayankshah1607')} 
            class="socicon-linkedin white pa2 bw1 ba br4 ma2"></span>

            <span onClick={() => window.open('https://medium.com/@mayankshah_85820')} class="socicon-medium white pa2 bw1 ba br4 ma2"></span>

            <span onClick={() => window.open('https://www.quora.com/profile/Mayank-Shah-51')} 
            class="socicon-quora white pa2 bw1 ba br4 ma2"></span>

            <span onClick={() => window.open('https://www.instagram.com/mayankshah__/')} 
            class="socicon-instagram white pa2 bw1 ba br4 ma2"></span>
            </div><br/>
            <img className='down' src={down} alt='#' onClick={() => this.scroll()}></img>
         </div>
        );
    }
}   