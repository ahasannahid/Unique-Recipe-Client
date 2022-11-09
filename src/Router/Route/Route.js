import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Allrecipe from "../../Pages/Allrecipe/Allrecipe";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/Signup";
import RecipeDetails from "../../Shared/RecipeDetails/RecipeDetails";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
]);

export default router;