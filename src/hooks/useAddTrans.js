import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../config/firebase";

const useAddTrans = () => {
  const addTransiction = async ({ id, desc, amount, type }) => {
    await addDoc(collection(db, "transaction"), {
      userId: id,
      description: desc,
      transactionAmount: amount,
      transactionType: type,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransiction };
};

export default useAddTrans;
