import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2
          className={`${estilos.subtitulo} ${estilos.sombra_texto} ${estilos.destaque}`}
        >
          Conteudo do site
        </h2>
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
