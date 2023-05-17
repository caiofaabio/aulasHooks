import { useEffect, useState } from "react";

import styles from "./UseEffect.module.css";

const UseEffect = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect rodou");
  }, [name]);

  return (
    <>
      <h1>UseEffect</h1>
      <p>
        Permite executar efeitos colaterais em componentes funcionais. Você pode
        executar código após cada renderização do componente, lidar com eventos,
        buscar dados de APIs, assinar/dessinar eventos, entre outras ações.
      </p>

      <div className={styles.myDiv}>
        <span className={styles.mySpan}>{name}</span>
        <br />
        <input
          style={{ textAlign: "center", padding: "8px", marginTop: "15px" }}
          type="text"
          placeholder="Digite algo."
          onChange={function (e) {
            setName(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default UseEffect;
