import React from 'react'
import './styles/filterListStyle.css'


const FilterList = ({ suggestedList, setSearchInput }) => {

    const handleClick = id => setSearchInput(id)

    return (
    <article className='art_listFilter'>
        <ul className='filter_list1'>
            {
                suggestedList?.map(location => (
                    <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}
                    </li>
                ))
            }
        </ul>
    </article>
        
    )
}

export default FilterList