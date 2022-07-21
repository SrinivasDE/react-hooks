import React, { useState } from "react";

let finalData = [];

const ToDoApp = (props) => {
  const [todoData, setToDoData] = useState("");
  const [todoChangeData, setToDoChangeData] = useState([]);

  const dataChangeHandler = (e) => {
    setToDoData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    finalData.push(todoData);

    setToDoData("");
    setToDoChangeData(finalData)
  };
  console.log("final data", finalData);

  const clearData = (e) => {
    console.log("delete", e);
    finalData = finalData.filter((item) => {
      return item != e;
    });
    console.log("newData", finalData);
    // setToDoData("");
    setToDoChangeData(finalData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>001457
        <div>
          <div>
            <label>Input</label>
            <input
              type="text"
              value={todoData}
              onChange={dataChangeHandler}
            />
          </div>
          <div>
            <button type="submit">ADD</button>
          </div>
        </div>
      </form>
      {todoChangeData.map((item, index) => (
        <h3 key={index}>
          {item}
          <button type="submit" onClick={() => clearData(item)}>
            x
          </button>
        </h3>
      ))}
    </>
  );
};

export default ToDoApp;
