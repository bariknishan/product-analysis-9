import React from 'react';
import './Review.css';

const Review = (props) => {
    const{id,name,img,ratings,Details}=props.review
    return (
        <div className='review  mt-20'>
            <img src={img} alt="" />
            <h2>id:{id}</h2>
            <h2>Name:{name}</h2>
            <h2>Ratings:{ratings}</h2>
            <h2>Details:{Details}</h2>
        </div>
    );
};

export default Review;