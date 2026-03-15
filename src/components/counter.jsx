import { useDispatch, useSelector } from "react-redux";
import {
  decreaseByPayload,
  decrement,
  increaseByPayload,
  increment,
} from "../app/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const increaseCounter = () => {
    dispatch(increment());
  };

  const decreaseCounter = () => {
    dispatch(decrement());
  };

  const increaseByValue = () => {
    dispatch(increaseByPayload(value));
  };

  const decreaseByValue = () => {
    dispatch(decreaseByPayload(value));
  };

  return (
    <div>
      <h1>Counter: {count && <span>{count.value}</span>}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increaseCounter}>Increment</button>
        <button onClick={decreaseCounter}>Decrement</button>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increaseByValue}>Increase By Value</button>
        <button onClick={decreaseByValue}>Decrease By Value</button>
      </div>
    </div>
  );
};

export default Counter;
