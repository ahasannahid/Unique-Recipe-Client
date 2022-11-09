import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../../src/assets/banner.jpg'
import RecipeCard from '../../Shared/RecipeCard/RecipeCard';


const Home = () => {
    const recipes = useLoaderData();
    return (
        <div>
            <img src={banner} alt="" className='h-1/2' />
            <div>
                <h1 className='text-5xl font-semibold text-center my-10'>You get some recipe here</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        recipes.map(recipe => <RecipeCard
                        key={"recipe._id"}
                        recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;