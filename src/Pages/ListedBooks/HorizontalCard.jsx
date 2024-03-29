import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function HorizontalCard({ data }) {
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
  return (
    <Card className="w-full h-[40vh] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="card-image"
            className="h-auto w-[180px] bg-center bg-cover shadow-2xl"
          />
        </div>
      </CardHeader>
      <CardBody className="pt-0">
        <Typography
          variant="h6"
          color="gray"
          className="mb-2 text-2xl font-bold  text-black"
        >
          {book_name}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-[#131313CC] text-base font-medium"
        >
          <span>By:</span> {author}
        </Typography>
        <Typography color="gray" className="mb-2 font-normal">
          <span className="font-bold text-black mr-2">Tag </span>
          {tags.map((i, idx) => (
            <span
              className="mr-2 px-4 py-2 bg-[#23BE0A0D] rounded-3xl font-medium text-[#23BE0A]"
              key={idx}
            >
              #{i}
            </span>
          ))}
          <span className="text-[#131313CC] flex items-center">
            <CiLocationOn />
            Year of publishing {year_of_publishing}
          </span>
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-base font-medium flex gap-2"
        >
          <span className="flex items-center gap-1"> <FaRegNewspaper /> Pages: {total_pages}
          </span>
          <span className="flex items-center gap-1">
            <IoPeopleOutline />
            Publisher: {publisher}
          </span>
        </Typography>
        <div><hr /></div>
        <Typography
          variant="h4"
          color="blue-gray"
          className=" mt-6 text-base font-medium"
        >
          <span className="px-4 py-2 bg-[#328EFF26] rounded-3xl font-medium text-[#328EFF]">Category: {category}</span> <span className="px-4 py-2 bg-[#FFAC3326] rounded-3xl font-medium text-[#FFAC33]">Rating: {rating}</span> <Link to={`/book-details/${book_id}`}><span className="px-4 py-2 bg-[#23BE0A] rounded-3xl font-medium text-white">View Details</span></Link> 
        </Typography>
      </CardBody>
    </Card>
  );
}
