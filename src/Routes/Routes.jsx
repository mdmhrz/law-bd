import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyBookings from "../pages/MyBookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('lawyerData.json').then(res => res.json()),
                path: '/',
                Component: Home
            },
            {
                path: '/myBookings',
                Component: MyBookings
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/lawyerDetails/:id',
                loader: () => fetch('/lawyerData.json').then(res => res.json()),
                Component: LawyerDetails
            }
        ]
    },
]);