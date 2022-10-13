import Artigo from "../layout/Artigo";

const Conteudo = () => {
  const cursos = ["arquitetura", "programação", "engenharia"];
  return (
    <main>
      <section>
        <h2>Conteudo do site</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          beatae eos dolore quasi officia vel recusandae facere, quaerat quidem
          molestiae facilis veritatis laborum ducimus, aperiam saepe sed,
          asperiores minima cumque.
        </p>

        <Artigo
          titulo="artigo 1"
          subtitulo="subtitulo do artigo 1"
          curso={cursos[0]}
        >
          Este é o texto do primeiro artigo
        </Artigo>

        <Artigo
          titulo="artigo 2"
          subtitulo="subtitulo do artigo 2"
          curso={cursos[1]}
        >
          Este é o segundo
        </Artigo>

        <Artigo
          titulo="artigo 3"
          subtitulo="subtitulo do artigo 3"
          curso={cursos[2]}
        >
          Este é o terceiro
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;
