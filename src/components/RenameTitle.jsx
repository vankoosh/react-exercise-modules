import React, { useState } from "react";

export default function RenameTitle() {
  const [title, setTitle] = useState({ title: "" });

  setTitle();

  return (
    <div>
      <p>Set your title here</p>
      <input
        onChange={({ target }) => {
          setTitle({
            title: target.value,
          });
        }}
        value={title}
        type="text"
      ></input>
    </div>
  );
}
