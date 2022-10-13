const Artigo = (props) => {
  return (
    <article>
      <h3> {props.titulo} </h3>
      <h4> {props.subtitulo} </h4>
      <h2> {props.curso} </h2>
      <p> {props.children} </p>
    </article>
  );
};

export default Artigo;
