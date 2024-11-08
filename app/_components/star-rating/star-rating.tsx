import { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseOver = (value: number) => {
    setHover(value);
  };

  const handleMouseOut = () => {
    setHover(0);
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseOut={handleMouseOut}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-colors duration-200 ${
              starValue <= (hover || rating) ? "text-warning" : "text-warning"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          //   <svg
          //     key={index}
          //     onClick={() => handleClick(starValue)}
          //     onMouseOver={() => handleMouseOver(starValue)}
          //     onMouseOut={handleMouseOut}
          //     xmlns="http://www.w3.org/2000/svg"
          //     className={`h-8 w-8 cursor-pointer transition-colors duration-200 ${
          //       starValue <= (hover || rating) ? "text-warning" : "text-gray"
          //     }`}
          //     fill="currentColor"
          //     viewBox="0 0 24 24"
          //   >
          //     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          //   </svg>
        );
      })}
    </div>
  );
};
