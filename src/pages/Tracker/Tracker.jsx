import React from "react";
import { Button } from "react-bootstrap";
import Header from "../../components/Header";
import Panel from "../../components/Panel";
import AddTrans from "../../components/AddTrans";
import AllTransictions from "../../components/AllTransictions";

const Tracker = () => {
  return (
    <div className="tracker p-6  md:grid grid-cols-3 gap-3">
      <div className="dispaly col-span-1">
        <Header />
        <Panel />
        <AddTrans />
      </div>
      <AllTransictions />
    </div>
  );
};

export default Tracker;
