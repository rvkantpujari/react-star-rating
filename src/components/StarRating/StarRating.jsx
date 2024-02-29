import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

export default function StarRating({numOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (currIndex) => {
        (rating === currIndex) ? setRating(0) : setRating(currIndex);
    }

    const handleMouseEnter = (currIndex) => {
        setHover(currIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <div className='container'>
            <h1 className='heading'>Star Rating</h1>
            <div>
                {
                    [...Array(numOfStars)].map((_, index) => {
                        index += 1; // To start indexing from 1
                        return <FaStar 
                                key={index} 
                                className={index <= (rating || hover) ? 'active' : 'inactive'}
                                onClick={() => handleClick(index)} 
                                onMouseEnter={() => handleMouseEnter(index)} 
                                onMouseLeave={() => handleMouseLeave()}
                                size={40}
                            />;
                    })
                }
            </div>
        </div>
    )
}
