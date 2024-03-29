import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import ContactUs from "../Pages/Contact-us/ContactUs";
import Error404 from "../Pages/ErrorPage/Error404";
import DynamicDetails from "../Pages/Home/DynamicDetails";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import Root from "../Root/Root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404/>,
    children : [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/listed-books',
            element: <ListedBooks/>,
        },
        {
            path: '/pages-to-read',
            element: <PagesToRead/>,
        },
        {
            path: '/book-details/:book_id',
            loader : () => fetch('/data.json'),
            element: <DynamicDetails/>,
        },
        {
            path: '/about',
            element: <About/>,
        },
        {
            path: '/contact-us',
            element: <ContactUs></ContactUs>,
        },


    ]
  },
]);

export default router;
