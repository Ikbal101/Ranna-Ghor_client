import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import Terms from "../pages/Shared/Terms/Terms";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Chefs from "../layouts/Chefs/Chefs"
import Details from "../pages/Details/Details/Details";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement:<NotFoundPage></NotFoundPage>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "terms",
                element: <Terms></Terms>,
            },
        ],
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ":id",
                element: <Chefs></Chefs>,
                loader: ({ params }) =>
                    fetch(` https://b7a10-chef-recipe-hunter-server-side-webabdulla.vercel.app/categories/${params.id}`),
            },
        ],
    },
    
    {
        path:"about",
        element:<About></About>
    },
    {
        path:"blog",
        element:<Blog></Blog>
    },

    {
        path: 'news', 
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: 'details/:id',
                element: <PrivateRoute> <Details></Details></PrivateRoute>,
                loader: async ({params}) => {
                    const response = await fetch(` https://b7a10-chef-recipe-hunter-server-side-webabdulla.vercel.app/chefDetails/${params.id}`);
                    const data = await response.json();
                    console.log(data);
                    return data;
                }
            }
        ]
    },
    // {
    //     path: 'news', 
    //     element: <NewsLayout></NewsLayout>,
    //     children: [
    //         {
    //             path: 'details/:id',
    //             element:<PrivateRoute> <Details></Details></PrivateRoute>,
    //             loader: ({params}) => fetch(` https://b7a10-chef-recipe-hunter-server-side-webabdulla.vercel.app/chefDetails/${params.id}`)
    //         }
    //     ]
    // },
   
    {
        path: "login",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
    {
        path: "register",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
