import React, { useState } from "react";

const UndoRedo = () => {
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);

  const handleUndo = () => {
    const newText = text.slice(0, -1);
    const slicedText = text.slice(-1);

    setText(newText);
    setTextArr((prev) => [...prev, slicedText]);
  };
  const handleRedo = () => {
    const arrCopy = [...textArr];
    const slicedValue = arrCopy.pop();
    setText((prev) => prev + slicedValue);
    setTextArr(arrCopy);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setTextArr([]);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <div>
        <button onClick={handleUndo} disabled={!text.length}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={!textArr.length}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default UndoRedo;
