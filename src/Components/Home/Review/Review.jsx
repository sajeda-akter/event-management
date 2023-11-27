import { useEffect, useState } from "react";


const Review = () => {
  const [reviews,setReviews]=useState([])
  const [reviewLength,setReviewlength]=useState(4)

  useEffect(()=>{
    fetch('reviews.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
    return (
       <div>
        <h1 className="text-3xl font-bold text-center mt-16 mb-4 lg:text-5xl">Our Customer Reviews</h1>
         <div className="grid grid-cols lg:grid-cols-2 lg:w-10/12 w-9/12 mx-auto gap-5 my-12">
           {
            reviews.slice(0,reviewLength).map(review=>
              <div key={review.id} className="card lg:card-side bg-gray-200  text-indigo-900 shadow-xl lg:h-52">
              <figure className="p-4 lg:p-0"><img className=" lg:w-96 w-72 h-72 lg:h-52 rounded-md " src={review.img} alt={review.name}/></figure>
              <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.reviews.slice(0,110)} see more...</p>
              
              </div>
            </div>)
           }
    
        </div>
        <button>See More</button>
       </div>
    );
};

export default Review;