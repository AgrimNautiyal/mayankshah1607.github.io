import React from 'react';
import Card from './Card';
import './Card.css';


const CardList = (props) => {
    const cards = props.data.map((user,i) => {
        return <Card mode={props.mode} title={user.title} desc={user.desc} link={user.link}/>
    })
    return (
        <div className='cardholder flex flex-wrap justify-center w-60'>
            {cards}
        </div>
    );
}

export default CardList;