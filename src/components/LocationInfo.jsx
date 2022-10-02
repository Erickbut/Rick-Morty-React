import React from 'react'
import './styles/cardLocation.css'


const LocationInfo = ({location}) => {
    return (
        <article className='card1'>
            <h3 className='title1'>Planet: </h3>
            <h2 className=' title_planet'>{location?.name}</h2>
            <ul className='card_list1'>
                <li className='card_item1'><span className='card_span1' >Type: </span>{location?.type}</li>
                <li className='card_item1'><span className='card_span1'>Dimension: </span>{location?.dimension}</li>
                <li className='card_item1'><span className='card_span1'>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo