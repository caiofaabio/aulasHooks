import { Container } from "react-bootstrap";

import styles from "./Hooks.module.css";

const Hooks = () => {
  const arrays = [
    {
      id: 1,
      title: "useState",
      texto:
        "Permite adicionar estado a componentes funcionais. Você pode declarar uma variável de estado e uma função para atualizá-la, e o React cuida de rastrear as alterações e re-renderizar o componente quando o estado muda.",
    },
    {
      id: 2,
      title: "useEffect",
      texto:
        "Permite executar efeitos colaterais em componentes funcionais. Você pode executar código após cada renderização do componente, lidar com eventos, buscar dados de APIs, assinar/dessinar eventos, entre outras ações.",
    },
    {
      id: 3,
      title: "useContext",
      texto:
        "Permite acessar o contexto em componentes funcionais. Você pode consumir um contexto criado pelo createContext em qualquer parte da sua árvore de componentes, sem a necessidade de usar componentes de ordem superior (HOCs) ou render props.",
    },
    {
      id: 4,
      title: "useReducer",
      texto:
        "Oferece uma alternativa ao useState quando você precisa lidar com estados mais complexos ou com lógica de atualização que depende do estado anterior. É útil para lidar com estados que exigem lógica de atualização mais avançada, como estados com transições de máquina de estado.",
    },
    {
      id: 5,
      title: "useCallback",
      texto:
        "É usado para memorizar uma função e evitar a recriação desnecessária da mesma em cada renderização do componente. É útil quando você precisa passar uma função como prop para componentes filhos e deseja otimizar o desempenho.",
    },
    {
      id: 6,
      title: "useMemo",
      texto:
        "É usado para memorizar um valor calculado e evitar o cálculo desnecessário em cada renderização do componente. É útil quando você tem uma operação de cálculo intensivo que não precisa ser recalculada sempre que o componente for re-renderizado.",
    },

    {
      id: 7,
      title: "useRef",
      texto:
        "Permite acessar e manter uma referência mutável a um elemento do DOM ou a um valor persistente entre as renderizações do componente. É útil para manipular elementos do DOM diretamente ou para armazenar valores que não precisam acionar uma re-renderização.",
    },
  ];

  return (
    <Container className="mt-5">
      <h3>O que são Hooks?</h3>
      <hr />
      <p>
        Os Hooks são uma adição importante ao React desde a versão 16.8. Eles
        permitem que você use recursos de estado e ciclo de vida em componentes
        funcionais, sem a necessidade de escrever uma classe.
      </p>
      <p>Aqui está um resumo dos Hooks mais comumente usados no React:</p>
      <ul>
        {arrays.map((array) => (
          <li className={styles.bottom} key={array.id}>
            <span>
              <p className="mb-0 ">{array.title}:</p> {array.texto}
            </span>
          </li>
        ))}
      </ul>
      <p>
        Cada Hook tem um propósito específico e pode ser combinado para atender
        às necessidades do seu aplicativo. Eles oferecem uma abordagem mais
        declarativa e fácil de usar para lidar com estados e efeitos colaterais
        em componentes funcionais no React.
      </p>
    </Container>
  );
};

export default Hooks;
