import { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect rodou");
  }, [name]);

  return (
    <>
      <div>UseEffect</div>
      <span>{name}</span>
      <br />
      <input
        style={{ textAlign: "center", padding: "8px", marginTop: "15px" }}
        type="text"
        onChange={function (e) {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default UseEffect;
