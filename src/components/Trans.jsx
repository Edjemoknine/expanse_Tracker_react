import React from "react";

const Trans = ({ trans }) => {
  const { transactionType, transactionAmount, description } = trans;
  return (
    <li className="list_tracker">
      <h6>{description}</h6>
      <p className="flex items-center gap-2">
        {transactionAmount} * {""}
        <span
          className={
            transactionType === "income" ? "text-green-500" : "text-red-500"
          }
        >
          {transactionType}
        </span>
      </p>
    </li>
  );
};

export default Trans;
