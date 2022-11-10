import React from 'react';

const AddService = () => {

    const handleAddService =(event) => {

        event.preventDefault();
        const form = event.target;

        const recipe_name = form.recipe_name.value;
        const price = form.price.value;
        const img_url = form.photoURL.value;
        const recipe_details  = form.details.value;

        const service = {
            recipe_name,
            price,
            img_url,
            recipe_details           
        }

        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Add Service succesflly')
                form.reset();
            }
        })
        .catch (error => console.error(error))
    }
    

    return (
        <form onSubmit={handleAddService}>              
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='recipe_name' type="text" placeholder="Recipe Name" className="input input-bordered input-ghost w-full " />

                    <input name='price' type="number" placeholder="Price" className="input input-bordered input-ghost w-full " />

                    <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered w-full input-ghost " />
                </div>

                <textarea name='details' className="textarea textarea-bordered h-24 w-full" placeholder="Recipe Details" required></textarea>

                <div className='text-center mt-5'>
                    <input className='btn ' type="submit" value="Add Your Recipe" />
                </div>

            </form>
    );
};

export default AddService;