import React from 'react';
import UseReviews from '../../UseReviews/UseReviews';
import Review from '../Review/Review';
import './Reviews.css'


const Reviews = () => {
    const [reviews,setReviews]=UseReviews();

    return (
        <div  className='all-review-container'>
             <h1 className=" text-4xl text-red-600 font-bold  mt-10">Visitors Review(6)</h1>


            <div className="main-review  grid md:grid-cols-2 lg:grid-cols-3 ms-4 gap-7  ">

  {
      reviews.map(review=><Review
      
        key={review.id}
        review={review}
      ></Review>)
  }


            </div>
        </div>
    );
};

export default Reviews;