import { useState } from "react";

export default function BinaryConverter() {
  const [value, setValue] = useState("");
  const [converted, setConverted] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConverted(0);
    let bits = value.split("");

    for (let i = bits.length - 1, j = 0; i >= 0; i--, j++) {
      if (bits[i] === "1") {
        setConverted((o) => {
          return o + Math.pow(2, j);
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}></input>
      </form>
      {converted}
    </>
  );
}
