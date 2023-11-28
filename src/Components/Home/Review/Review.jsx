import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();
const Review = () => {
  const [reviews, setReviews] = useState([]);
  // const [reviewLength, setReviewlength] = useState(2);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-16 mb-4 lg:text-5xl">
        Our Customer Reviews
      </h1>
      <div className="grid grid-cols lg:grid-cols-2 lg:w-10/12 w-9/12 mx-auto gap-5 my-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            data-aos={review.animate}
            className="card lg:card-side bg-gray-200  text-indigo-900 shadow-xl lg:h-52"
          >
            <figure className="p-4 lg:p-0">
              <img
                className=" lg:w-96 w-72 h-72 lg:h-52 rounded-md "
                src={review.img}
                alt={review.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.name}</h2>
              <div className="flex gap-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="text-yellow-500" />
              </div>

              <p>
                {review.reviews.slice(0, 110)}...{" "}
                <span className="font-bold">See more</span>
              </p>
              <p className="text-xl ">{review.time}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={reviewLength === reviews.length && "hidden"}>
        <button
          onClick={() => setReviewlength(reviews.length)}
          className="w-32 ml-44 lg:ml-[700px] my-10 btn btn-primary text-white text-xl"
        >
          See More
        </button>
      </div>{" "} */}
    </div>
  );
};

export default Review;
