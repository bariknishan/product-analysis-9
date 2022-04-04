import React from 'react';
import './Review.css';

const Review = (props) => {
    const{name,img,ratings,Details}=props.review
    return (
        <div className='review  mt-20'>
            <img src={img} alt="" />
            {/* <h2  className='text-1xl  '>id:{id}</h2> */}
            <h2 className='text-2xl  '>Name:{name}</h2>
            <h2 className='text-1xl  '>Ratings:{ratings}</h2>
            <h2 className='text-1xl  '>Details:{Details}</h2>
        </div>
    );
};

export default Review;