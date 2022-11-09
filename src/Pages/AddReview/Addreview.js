import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';

const Addreview = () => {
    const recipe = useLoaderData();
    const { rating, total_view, cook, recipe_name, price, img_url, recipe_details, _id } = recipe;

    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const review = form.message.value;

        const reviews = {
            recipe: _id,
            recipeName: recipe_name,
            customerName: name,
            email,
            review
        }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review place succesflly')
                    form.reset();

                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='my-8'>

            <form onSubmit={handlePlaceOrder}>

                <h2 className='text-4xl text-center'>You are about to Review : <span className='font-semibold'>{recipe_name}</span></h2>
                <h4 className='text-3xl text-center'>Price : {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-ghost w-full " />

                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full input-ghost " />


                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full input-ghost" readOnly />
                </div>

                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <div className='text-center mt-5'>
                    <input className='btn ' type="submit" value="Add Your Review" />
                </div>

            </form>
        </div>
    );
};

export default Addreview;