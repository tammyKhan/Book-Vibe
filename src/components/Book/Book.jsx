import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex  gap-6">
          {tags.map((tag) => (
            <button className="btn btn-xs bg-gray-100 text-green-500">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          
        </h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge">{category}</div>
          <div className="badge  gap-2">
            {rating}
            <div className="rating ">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-green-200 border-2 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
