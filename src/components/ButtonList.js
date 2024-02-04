import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Lionel Messi",
  ];
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
