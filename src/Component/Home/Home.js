import React from 'react';
import pic from './images/main.jpg';
import './Home.css';
import UseReviews from '../../UseReviews/UseReviews';
// import Reviews from '../Reviews/Reviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviews, setReviews] = UseReviews();
    return (
        <div className='home-container mb-20'>
            <div className="header-container    mt-12">.

                <div className='text-area'>
                    <h1 className='header'>Visit The Wonderfull Saintmartin Island With Some One Special. <span className='text-blue-600'>Explore The area with Low Cost..</span></h1>
                    <p className='para'>St. Martin's Island  is a small island (area only 3 km2) in the northeastern   part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. </p>
                    <button className='btn'>See More..</button>
                </div>
                <div>
                    <img src={pic} alt="" />
                </div>
            </div>

            {/*/////////////////// review area /////////////////////////*/}

            <h1 className='text-5xl font-bold  mt-20 text-yellow-600  review-header'>Reviews..</h1>

            <div className="reveiws-container   mt-20  ">
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review} ></Review>)
                }
             
            </div>
          
            <Link to='/reviews' className='bg-blue-600 p-2 text-2xl rounded-md  '> See All Reviews...</Link>

            <div className="useReviws-container">
               
            </div>


        </div>


    );
};

export default Home;