import React, { useEffect, useState } from "react";
import UseGeTransc from "../hooks/UseGeTransc";
import Trans from "./Trans";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useSelector } from "react-redux";

const Transiction = () => {
  const { transaction } = UseGeTransc();
  // const { transaction } = useSelector((store) => store.tracker);
  // console.log(transaction);
  return (
    <div className="col-span-2 ">
      <h1>Transaction</h1>
      <div className="border rounded-md p-1 transaction_container">
        {transaction.map((trans) => {
          return <Trans key={trans.id} trans={trans} />;
        })}
      </div>
    </div>
  );
};

export default Transiction;
