import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import ShowReview from "./ShowReview";


const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
           
                <div>
                    <h2 className="text-3xl text-center">You Have {reviews.length} Reviews</h2>
                    <div className="overflow-x-auto w-full grid grid-cols-3 my-4">

                        {
                            reviews.map(review => <ShowReview
                                key={review._id}
                                singlereview={review}
                                handleDelete={handleDelete}
                            ></ShowReview>)
                        }
                    </div>
                </div>

        </div>
    );
};

export default MyReview;