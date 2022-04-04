import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='bolgs-container    m-4  grid md:grid-cols-2 lg:grid-cols-2 ms-4 gap-7 mt-20        '>
           
             <div className='context-area bg-gray-400  rounded-md  p-4  '>

           <h1 className='text-4xl font-bold'>What is context API?</h1>

           <p className='text-2xl mt-4  '><span className='font-bold'>Answer:</span> Context API provides a way to share values between component  without having to explcitly pass a props through every level of the tree. <br />
           Context is
           
            designed to share data "global" for a tree react components. Such as the current authenticated user ,theme aur prefered language. By using this we can make dark theme for our websites.
           </p>

             </div>

             <div className='seymentic-area bg-gray-400  rounded-md  p-4   '>

           <h1 className='text-4xl font-bold  '>Difference Between Inline and Block element Element ?</h1>

           <p className='text-2xl mt-4 '><span className=' font-bold'> Inline element: </span> Inline elements can begin within a line of the HTML Element and its never starts a new line for the HTML. Inline elements can break  among the lines.</p> <br />

           <p className='text-2xl mt-4 '><span className=' font-bold'> Block element: </span> Blocks element can not begine within a line of the HTML element and it always starts the line of HTML. Block elements can not break among the line .</p>

             </div>


        </div>
    );
};

export default Blogs;