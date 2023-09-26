import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAddTrans from "../hooks/useAddTrans";
import { useSelector } from "react-redux";

const AddTrans = () => {
  const { user } = useSelector((store) => store.tracker);
  const { addTransiction } = useAddTrans();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  const handleSublit = (e) => {
    e.preventDefault();
    const { uid } = user;
    addTransiction({ id: uid, desc: description, amount: amount, type: type });
    setAmount(0);
    setDescription("");
    setType("expense");
  };
  return (
    <Form onSubmit={handleSublit}>
      <Form.Group className="flex flex-col gap-3">
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Description"
        />
        <Form.Control
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          value={amount}
          placeholder="Amount"
        />
        <div className="flex gap-4 justify-center">
          <div className="flex gap-2 cursor-pointer justify-center">
            <Form.Label htmlFor="expense">Expense</Form.Label>
            <input
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
              type="radio"
              id="expense"
              value={"expense"}
            />
          </div>
          <div className=" cursor-pointer flex gap-2  justify-center">
            <Form.Label htmlFor="income">Income</Form.Label>
            <input
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
              type="radio"
              id="income"
              value={"income"}
            />
          </div>
        </div>
        <Button type="submit">Add Transiction</Button>
      </Form.Group>
    </Form>
  );
};

export default AddTrans;
