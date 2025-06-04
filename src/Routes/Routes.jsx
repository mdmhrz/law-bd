import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom"; // use "react-router-dom" not "react-router"
import GlobalSpinner from "../components/GlobalSpinner/GlobalSpinner";

const Home = lazy(() => import("../pages/Home/Home"));
const MyBookings = lazy(() => import("../pages/MyBookings/MyBookings"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const LawyerDetails = lazy(() => import("../pages/LawyerDetails/LawyerDetails"));
const Root = lazy(() => import("../pages/Root/Root"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));



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
                element: <Suspense fallback={<GlobalSpinner></GlobalSpinner>}>
                    <Home></Home>
                </Suspense>
            },
            {
                path: '/myBookings',
                loader: () => fetch('/lawyerData.json').then(res => res.json()),
                element: <Suspense fallback={<GlobalSpinner></GlobalSpinner>}>
                    <MyBookings></MyBookings>
                </Suspense>
            },
            {
                path: '/blogs',
                loader: () => fetch('/blog.json'),
                element: <Suspense fallback={<GlobalSpinner></GlobalSpinner>}><Blogs></Blogs></Suspense>
            },
            {
                path: '/lawyerDetails/:id',
                loader: () => fetch('/lawyerData.json').then(res => res.json()),
                element: <Suspense fallback={<GlobalSpinner></GlobalSpinner>}><LawyerDetails></LawyerDetails></Suspense>
            }
        ]
    },
]);