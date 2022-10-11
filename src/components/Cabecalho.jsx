import Menu from "../layout/Menu";
import styled from "styled-components";

const periodo = "diurno";

/* tagged template para uso com styled components */
const StyledCabecalho = styled.header`
  /* caso o periodo for diurno, ele vai ficar azul claro, caso contrario ficara com cor azul escuro */
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: red;
  }

  p {
    font-weight: bold;
    color: blue;
    font-size: 2rem;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface react</h1>

      <Menu />
      <p>TESTE!!</p>
    </StyledCabecalho>
  );
};
export default Cabecalho;
