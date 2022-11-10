import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';

const ShowReview = ({ Singlereview }) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const { review, customerName, recipeName } = Singlereview;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
            <div className="card-body">
                <h2 className="card-title">Review About : {recipeName}</h2>
                <p>Review: {review}</p>
                <div>
                    <p>Reviewer Photo :</p>
                    <img src={user?.photoURL} alt="" />
                </div>

                <div className="card-actions justify-end">
                    <p>Reviewer Name: {customerName} </p>
                    <button className="btn btn-primary mr-5">Update Review</button>
                    <button className="btn btn-primary">Delete Review</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ShowReview;