import { useState } from "react";
import Artigo from "../layout/Artigo";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFEE71");

  const fundoAzul = () => setCorFundo("lightblue");

  const fundoVermelho = () => setCorFundo("lightpink");

  const atualizaContagem = () => setContador(contador + 1);
  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <button onMouseOver={fundoVermelho}>vermelho</button>
      <section>
        <button onClick={atualizaContagem}>Contador: {contador} </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          beatae eos dolore quasi officia vel recusandae facere, quaerat quidem
          molestiae facilis veritatis laborum ducimus, aperiam saepe sed,
          asperiores minima cumque.
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;
