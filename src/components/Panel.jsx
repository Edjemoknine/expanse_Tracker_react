import React from "react";
import { useSelector } from "react-redux";
import UseGeTransc from "../hooks/UseGeTransc";

const Panel = () => {
  const { transaction } = useSelector((store) => store.tracker);
  const { user } = useSelector((store) => store.tracker);

  const { TransactionsTs } = UseGeTransc();
  // console.log(TransactionsTs);
  const { balance, expense, income } = TransactionsTs;
  return (
    <div>
      <h2 className="text-center mb-6">
        {user.displayName} <br /> Expanse Tracker
      </h2>
      <div className="flex items-start mb-3 justify-between">
        <div className="balance gap-2 flex items-center">
          <h4>Blance :</h4>
          <span
            className={
              balance <= 0 ? "text-blue-950 font-bold" : "text-blue-500"
            }
          >
            ${balance}
          </span>
        </div>
        <div className="summary">
          <div className="income flex gap-2 items-center">
            <h6>Income :</h6>
            <span className="text-green-400">${income}</span>
          </div>
          <div className="expense flex gap-2 items-center">
            <h6>Expense :</h6>
            <span className="text-red-600">${expense}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
