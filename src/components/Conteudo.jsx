import Artigo from "../layout/Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "artigo 1",
      subtitulo: "este é o subtitulo do artigo 1",
      texto: "este é o conteudo blah blah blah do artigo 1",
      curso: "JS avançado",
    },
    {
      id: 2,
      titulo: "artigo 2",
      subtitulo: "este é o subtitulo do artigo 2",
      texto: "este é o conteudo sla do artigo 2",
      curso: "React",
    },
    {
      id: 3,
      titulo: "artigo 3",
      subtitulo: "este é o subtitulo do artigo 3",
      texto: "este é o conteudo XYZ do artigo 3",
      curso: "Node.JS",
    },
  ];
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

        {artigos.map((artigo) => (
          // entre os parenteses abaixo ele esta fazendo um return, a versão atual é uma versão abreviada desta sintaxe
          <Artigo
            key={artigo.id}
            titulo={artigo.titulo}
            subtitulo={artigo.subtitulo}
            curso={artigo.curso}
          >
            {artigo.texto}
          </Artigo>
        ))}
      </section>
    </main>
  );
};

export default Conteudo;
