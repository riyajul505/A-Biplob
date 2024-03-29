import { IoWarningOutline } from "react-icons/io5";
const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] space-y-6">
      <div className="">
        <IoWarningOutline className="text-7xl" /></div>
        <h1 className="text-5xl">Error 404</h1>
        <p className="text-xl">Server Error: Try Again Later</p>    </div>
  );
};

export default Error404;
