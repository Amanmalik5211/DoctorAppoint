import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleSubmitReview = async e => {
    e.preventDefault();
    if (!rating || !reviewText) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, reviewText })
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success('Review submitted successfully');
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} className="mt-[5px]">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-700"
                    : "text-gray-500"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions.
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 h-[120px] rounded-md"
          rows="5"
          placeholder="Write your message here.."
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btnn flex items-center justify-center  min-w-[200px] py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? (
          <RingLoader size={25} color="#fff" />
        ) : (
          'Submit Feedback'
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;
