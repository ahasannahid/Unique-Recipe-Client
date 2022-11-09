import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipeDetails = useLoaderData();
    console.log(recipeDetails);
    const { rating, total_view, cook, recipe_name, price, img_url, recipe_details, _id } = recipeDetails;

    

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl mb-5'>Details About <span className="font-semibold">{recipe_name}</span></h1>

                <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>How to make: {recipe_details}</p>
                    </div>
                    <div className='flex justify-between bg-slate-300'>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                        <p>Rating: {rating}</p>
                        <p>View: {total_view}</p>
                    </div>
                    <div className='text-center'>Instructor: {cook?.name}</div>
                </div>
            </div>
            <h1 className='text-4xl my-5 text-center text-info'>Review About {recipe_name}</h1>
            <Link to={`/addreview/${_id}`}>
                <button className="btn btn-primary mt-10">Add Review</button>
            </Link>

        </div>
    );
};

export default RecipeDetails;