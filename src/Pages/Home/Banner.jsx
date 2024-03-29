import React from "react";
import { Link } from "react-router-dom";
import photo from '../../assets/girl to of books.png';

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-[#f3f3f3] rounded-lg relative">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={photo}
          className="max-w-[350px] h-[400px] rounded-lg absolute right-20 bottom-0"
        />
        <div className=" space-y-4 flex flex-col justify-center items-center absolute left-0">
          <h1 className="text-[56px] text-[#131313] font-bold text-center w-1/2">Books to freshen up your bookshelf</h1>
          
          <Link to={'/listed-books'}><button className="btn btn-primary text-xl font-bold text-white bg-[#23BE0A] border-none text-center">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
