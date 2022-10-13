const Artigo = ({ titulo, subtitulo, curso, children }) => {
  return (
    // fazendo desestruturação acima e acessando ela abaixo
    <article>
      <h3> {titulo} </h3>
      <h4> {subtitulo} </h4>
      <h2> {curso} </h2>
      <p> {children} </p>
    </article>
  );
};

export default Artigo;
