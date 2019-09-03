import React from 'react';
import './Card.css'


const Card = (props) => {
    return(
        <div className='card tc black br2 ma3 grow bw2 shadow-5 container flex flex-column items-center justify-center'>
            <p className='ph3 pv4 heading fw7'>{props.title}</p>
            <p className='pa3 desc'>{props.desc}</p>
            <a className='mb4 fw6 link' href={props.link}>{props.mode}</a>
        </div>
    );

}


export default Card;
