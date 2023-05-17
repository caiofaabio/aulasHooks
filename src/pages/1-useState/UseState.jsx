/* eslint-disable no-unused-vars */
import { useState } from "react";

import styles from "./UseState.module.css";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter((prevState) => prevState + 1);
  }

  function remove() {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  }

  return (
    <>
      <h1>useState</h1>
      <p>
        Permite adicionar estado a componentes funcionais. Você pode declarar
        uma variável de estado e uma função para atualizá-la, e o React cuida de
        rastrear as alterações e re-renderizar o componente quando o estado
        muda.
      </p>
      <br />
      <div className={styles.content}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <button onClick={remove}>- </button>
          <button onClick={add}>+ </button>
        </div>
        <h4 className="d-flex justify-content-center gap-3">
          Número: <p>{counter}</p>
        </h4>
      </div>
    </>
  );
};

export default UseState;
