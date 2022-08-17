import React from "react";
import { useState } from "react";

const InputText = () => {
  const [text, setText] = useState("");
  const squareText = text.length > 0 ? text : "Empty Value";
  const color = {
    backgroundColor: text,
  };

  return (
    <div className="task">
      <div className="square" style={color}>
        {squareText}
      </div>
      <div className="text">
        <input
          type="text"
          name=""
          placeholder="Add color name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputText;
