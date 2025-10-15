import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingCount = () => {
  const { feedbacks } = useContext(FeedbackContext);
  const avgFeedback = feedbacks
    .reduce((acc, curr) => acc + curr.rating / feedbacks.length, 0)
    .toFixed(2);
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-600 font-semibold">
        Total Reviews : {feedbacks.length}{" "}
      </h2>
      <h2 className="text-sm text-gray-600 font-semibold">
        Average Rating : {avgFeedback}
      </h2>
    </div>
  );
};

export default RatingCount;
