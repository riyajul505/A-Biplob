import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadFromLocalStorage } from "../../Utils/loadFromLocalStorage";
import { saveToLocalStorage } from "../../Utils/saveToLocalStorage";

const DynamicDetails = () => {
  const books = useLoaderData();
  const { book_id } = useParams();
  const id = parseInt(book_id);
  const newData = books.find((i) => i.book_id === id);
  const {
    book_name,
    author,
    image,
    review,
    total_pages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
  } = newData;

  const handleReadButton = () => {
    saveToLocalStorage(newData,'ReadList');
  }
  const handleWishlistButton = () => {
    const readList = loadFromLocalStorage('ReadList');
    const finding = readList.find(item => item.book_id == newData.book_id)
    if(!finding){
      saveToLocalStorage(newData,'WishList');
    }
    else{
      toast.warning('Data Already in ReadList')
    }
    
  }

  return (
    // <div>
    //       <h1>{book_name}</h1>
    //     <p>By: {author}</p>
    //     <hr />
    //     <p>{category}</p>
    //     <p>Review: {review}</p>
    //     <br />
    //     <br />
    //     <p>Tags: {tags.map((item,idx) => <span key={idx}>{item}</span>)}</p>
    //     <hr />
    //     <p>Number of pages: {total_pages}</p>
    //     <p>publisher: {publisher}</p>
    //     <p>Year of publishing: {year_of_publishing}</p>
    //     <p>Rating: {rating}</p>
    // </div>
    <>
      <Helmet>
        <title>this is Dynamic Details</title>
      </Helmet>
      <Card className="w-full h-[80vh] flex-row flex-grow">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="pt-0">
          <Typography variant="h6" color="gray" className="mb-2 text-[#131313] text-4xl font-bold">
            {book_name}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-2 text-xl font-medium text-[#131313CC]">
            By: {author}
          </Typography>
          <hr />
          <Typography variant="h4" color="blue-gray" className="mt-[10px] mb-[10px] text-xl font-medium text-[#131313CC]">
            {category}
          </Typography>
          <div><hr/></div>
          <Typography color="gray" className="mb-4 mt-3 font-normal">
            <span className="text-[#131313] font-bold">Review: </span><span className="text-[#131313B3]">{review}</span>
          </Typography>
          <Typography color="gray" className="mb-4 font-normal">
            <span className="text-[#131313] font-bold mr-2">Tag </span>
            {tags.map((i, idx) => (
              <span className="mr-2 font-medium text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] rounded-[30px]" key={idx}>
                #{i}
              </span>
            ))}
          </Typography>
          <div className=" mb-[23px]"><hr /></div>
          <div className="grid grid-cols-2 w-[70%]">
            <Typography color="gray" className="mb-4 font-normal text-[#131313B3] ">
              Number of pages:
            </Typography>
            <Typography color="gray" className="mb-4 font-semibold text-black">
              {total_pages}
            </Typography>
            <Typography color="gray" className="mb-2 font-normal">
              Publisher:
            </Typography>
            <Typography color="gray" className="mb-2 font-semibold text-black">
              {publisher}
            </Typography>
          </div>
          <div className="grid grid-cols-2 w-[70%]">
            <Typography color="gray" className="mb-2 font-normal">
              Year of Publishing:
            </Typography>
            <Typography color="gray" className="mb-2 font-semibold text-black">
              {year_of_publishing}
            </Typography>
            <Typography color="gray" className="mb-2 font-normal">
              Rating:
            </Typography>
            <Typography color="gray" className="mb-2 font-semibold text-black">
              {rating}
            </Typography>
          </div>

          <div className="">
            <Button onClick={handleReadButton} className="mr-2 border-[#1313134D]" variant="outlined">
              Read
            </Button>
            <Button className="bg-[#50B1C9]" onClick={handleWishlistButton}>Wishlist</Button>
            <ToastContainer />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default DynamicDetails;
