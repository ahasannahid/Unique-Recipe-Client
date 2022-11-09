import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
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
                path: '/details/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    }
]);

export default router;