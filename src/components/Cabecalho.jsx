import Menu from "../layout/Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("exemplo2!");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo 1")}>Exemplo 1</button>
      <button onClick={exemplo2}>Exemplo 2</button>
      <hr />
      <h1>Interface react</h1>

      <Menu />
    </header>
  );
};
export default Cabecalho;
