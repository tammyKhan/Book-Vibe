import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerImg from '../../assets/books.jpg'


const BookDetail = () => {

  const {bookId} = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find(book => book.bookId === id);

  const { image} = book;

  return (
    <div className="hero bg-base-200 min-h-screen my-12 px-20 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={book.image}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className='space-y-8'>
          <h1 className="text-3xl font-bold">{book.bookName}</h1>
          
          <button className="btn text-lime-400 btn-outline mr-4 ">Read</button>
          <button className="btn bg-lime-500 text-white">WishList</button>
        </div>
      </div>
      </div>
  );
};

export default BookDetail;