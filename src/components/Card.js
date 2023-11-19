import React from 'react'
import "./Card.css"

function Card({ src, title, desc, price }) {
    return (
        <div className='card'>

            <img src={src} alt="" />
            <div className='card_info'>
                <h2>{title}</h2>
                <h4>{desc}</h4>
                <h3>{price*10}-{price*10+1000} / night</h3>
            </div>
        </div>
    )
}

export default Card