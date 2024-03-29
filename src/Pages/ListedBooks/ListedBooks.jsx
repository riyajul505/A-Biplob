import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { loadFromLocalStorage } from "../../Utils/loadFromLocalStorage";
import { TabsDefault } from "./TabsDefault";

const ListedBooks = () => {
  const readListt = loadFromLocalStorage("ReadList");
  const wishListt = loadFromLocalStorage("WishList");

  const readData = loadFromLocalStorage("ReadList");
  const wishData = loadFromLocalStorage("WishList");


  const [readList, setReadList] = useState(readListt);
  const [wishList, setWishList] = useState(wishListt);

  const handleRatingFilter = () =>{
    const lolo = readData.sort((a,b)=>{
      if(a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    })
    setReadList(lolo);

    const lolo2 = wishData.sort((a,b)=>{
      if(a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    })
    setWishList(lolo2);
  }
  const handlePagesFilter = () => {

    const lolo = readData.sort((a,b)=>{
      if(a.total_pages < b.total_pages) return 1;
      if (a.total_pages > b.total_pages) return -1;
      return 0;
    })
    setReadList(lolo);
    const lolo2 = wishData.sort((a,b)=>{
      if(a.total_pages < b.total_pages) return 1;
      if (a.total_pages > b.total_pages) return -1;
      return 0;
    })
    setWishList(lolo2);

  }
  const handlePublishedFilter = () =>{
    const lolo = readData.sort((a,b)=>{
      if(a.year_of_publishing < b.year_of_publishing) return 1;
      if (a.year_of_publishing > b.year_of_publishing) return -1;
      return 0;
    })
    setReadList(lolo);
    const lolo2 = wishData.sort((a,b)=>{
      if(a.year_of_publishing < b.year_of_publishing) return 1;
      if (a.year_of_publishing > b.year_of_publishing) return -1;
      return 0;
    })
    setWishList(lolo2);
  }

  return (
    <>
      {/* from daisy */}
      <div className="flex flex-col justify-center items-center">
      <div className="w-full"><h1 className="text-center p-2 text-2xl font-bold bg-[#f4f5f7] mb-5">Books</h1></div>
        <div className="dropdown">
          
          <div tabIndex={1} role="button" className="btn m-1 bg-[#23BE0A] text-white">
            Sort By <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[40] menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li onClick={handleRatingFilter}>
              <a>Rating</a>
            </li>
            <li onClick={handlePagesFilter}>
              <a>Number of Pages</a>
            </li>
            <li onClick={handlePublishedFilter}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-auto mt-5">
        <div className="w-full">
          <TabsDefault wishList={wishList} readList={readList} />
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
