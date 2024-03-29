import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { FaRegStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  const {
    book_id,
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
  } = data;
  // console.log(data)
  return (
    <>
      <Link to={`/book-details/${book_id}`}>
        <Card className=" overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none flex justify-center items-center"
          >
            <img
              src={image}
              className="w-[326px] h-[230px] bg-contain bg-center "
              alt={`${book_name} photo`}
            />
          </CardHeader>
          <div className="flex">
            {tags.map((item, idx) => (
              <p
                className="px-[7px] py-[3px] border  bg-[#23BE0A0D] text-[#23BE0A] mt-5 mr-2 ml-2 rounded-[30px]"
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
          <CardBody>
            <Typography
              className="text-2xl font-bold"
              variant="h4"
              color="blue-gray"
            >
              {book_name}
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-medium text-base text-[#131313CC] mb-4"
            >
              By: {author}
            </Typography>
            <hr />
          </CardBody>
          <CardFooter className="flex pt-0 items-center justify-between font-medium text-[#131313CC]">
            <div className="flex items-center space-x-3">
              <div className="">{category}</div>
            </div>
            <Typography className="font-normal flex justify-center items-center gap-2">
              {rating} <FaRegStar />
            </Typography>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default BookCard;
