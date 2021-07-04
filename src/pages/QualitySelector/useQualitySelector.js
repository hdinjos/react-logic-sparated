import { useState } from "react";

const useQualitySelector = () => {
  const [value, setValue] = useState(5);
  const [message, setMessage] = useState("");

  const onClickPlus = () => {
    if (value < 10) {
      setValue(value + 1);
      setMessage("");
    } else {
      setMessage("Max!");
    }
  };

  const onClickMinus = () => {
    if (value > 0) {
      setValue(value - 1);
      setMessage("");
    } else {
      setMessage("Min!");
    }
  };
  return { onClickPlus, onClickMinus, value, message };
};

export default useQualitySelector;
