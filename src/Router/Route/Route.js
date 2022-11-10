import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Addreview from "../../Pages/AddReview/Addreview";
import Allrecipe from "../../Pages/Allrecipe/Allrecipe";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Loginto from "../../Pages/Login/Loginto";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/Signup/Signup";
import Blog from "../../Shared/Blog/Blog";
import RecipeDetails from "../../Shared/RecipeDetails/RecipeDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/recipe')
            },
            {
                path: '/allrecipe',
                element: <Allrecipe></Allrecipe>,
                loader: () => fetch('http://localhost:5000/recipes')
            },
            {
                path: '/details/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoute>
                    <Addreview></Addreview>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
]);

export default router;