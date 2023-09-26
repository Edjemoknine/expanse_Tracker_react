import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { GetAllT } from "../container/TrackerSlice/TrackerSlice";

const UseGeTransc = () => {
  let unsubscribe;
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState([]);
  const { user } = useSelector((store) => store.tracker);
  const [TransactionsTs, setTransactionToatls] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  });

  const gatTransactions = async () => {
    try {
      const reftran = collection(db, "transaction");
      const queryTransc = query(reftran, where("userId", "==", user.uid));

      unsubscribe = onSnapshot(queryTransc, (snapshot) => {
        let docs = [];
        let TotalIncome = 0;
        let TotalExpense = 0;
        snapshot.forEach((doc) => {
          let data = doc.data();
          docs = [...docs, { ...doc.data(), id: doc.id }];
          if (data.transactionType === "income") {
            TotalIncome += parseInt(data.transactionAmount);
          } else {
            TotalExpense += parseInt(data.transactionAmount);
          }
        });

        let balance = TotalIncome - TotalExpense;
        setTransactionToatls({
          balance: balance,
          income: TotalIncome,
          expense: TotalExpense,
        });
        setTransaction(docs);
        dispatch(GetAllT(docs));
      });
    } catch (error) {
      console.log(error);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    gatTransactions();
  }, []);

  return { transaction, TransactionsTs };
};

export default UseGeTransc;
