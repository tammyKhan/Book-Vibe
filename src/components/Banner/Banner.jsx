import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
        <div className="hero bg-base-200 min-h-screen my-10 px-20 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className='space-y-8'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookShelf</h1>
          
          <button className="btn bg-lime-500 text-white">View the list</button>
        </div>
      </div>
      </div>
  );
};

export default Banner;