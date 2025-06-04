import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom"; // use "react-router-dom" not "react-router"

const Home = lazy(() => import("../pages/Home/Home"));
const MyBookings = lazy(() => import("../pages/MyBookings/MyBookings"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const LawyerDetails = lazy(() => import("../pages/LawyerDetails/LawyerDetails"));
const Root = lazy(() => import("../pages/Root/Root"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
import LoadingSpinner from "../components/LoadingSpinner/loadingSpinner";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/lawyerData.json').then(res => res.json()),
                path: '/',
                element: <Suspense fallback={<div><span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                    <span className="loading loading-ball loading-xl"></span></div>}>
                    <Home></Home>
                </Suspense>
            },
            {
                path: '/myBookings',
                loader: () => fetch('/lawyerData.json').then(res => res.json()),
                element: <Suspense fallback={LoadingSpinner}>
                    <MyBookings></MyBookings>
                </Suspense>
            },
            {
                path: '/blogs',
                loader: () => fetch('/blog.json'),
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