import Menu from "../layout/Menu";

const estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  // CSS in JS: estilos CSS embutidos no meio javascript
  // CSS in line: (usa propriedade style e sintaxe de objeto)
  return (
    <header style={{ backgroundColor: "lightBlue", textAlign: "center" }}>
      <h1 style={estilos}>Interface react</h1>

      <Menu />
    </header>
  );
};
export default Cabecalho;
