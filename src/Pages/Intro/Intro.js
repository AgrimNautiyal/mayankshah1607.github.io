import React, { Component } from 'react';
import './Intro.css';
import down from './down.png'

export default class Intro extends Component{

    scroll = () =>{
        var element = document.getElementById("portfolio");
        element.scrollIntoView({block: 'start',behavior: 'smooth'})
    }

    componentDidMount(){
        const words = ["Software Developer","Machine Learning","DevOps","Open Source Ethusiast"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('word').innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect,500);
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('word').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        };

        typingEffect();
    }

    render(){
        return(
        <div id='home' className='flex flex-column items-center justify-center items-center vh-100'>
            <div className='white fw6 intro mb4'>Mayank Shah</div>
            <div class="flex">
	            <p class="header-sub-title" id="word"></p><p class="header-sub-title blink">|</p>
            </div>
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