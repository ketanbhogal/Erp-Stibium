import React from "react";

const Card = ({ title, image, description, footer }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
