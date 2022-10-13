import { useState } from "react";
import Menu from "../layout/Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("exemplo2!");
  };

  // exemplo 1 de gerenciamento de states
  // aqui definimpos no useState um valor inicial (colocado entre os parenteses do useState), alem de desestruturar o state em umma variavel (titulo) e em uma função (setTitulo) que será responsavel por atualizar este state/titulo
  const [titulo, setTitulo] = useState("exemplo de state");

  const atualizaTitulo = () => {
    setTitulo("opa, o state do titulo foi alterado!");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo 1")}>Exemplo 1</button>
      <button onClick={exemplo2}>Exemplo 2</button>
      <hr />
      {/* aqui aplicamos a variavel de state chamada titulo */}
      <h1 onClick={atualizaTitulo}> {titulo} </h1>
      <h1>{titulo}</h1>

      <Menu />
    </header>
  );
};
export default Cabecalho;
