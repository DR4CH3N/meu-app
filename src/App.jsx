import Cabecalho from "./layout/Cabecalho";
import Conteudo from "./layout/Conteudo";

import Rodape from "./layout/Rodape";

const App = () => {
  return (
    <>
      {/* ATENÇÃO: PARA COLOCAR MULTIPLAS TAGS NO CODIGO VOCE PRECISA COLOCAR DENTRO DE UMA FUNÇÃO SE NÃO VOCE IRÁ ENCONTRAR MUITOS ERROS! 
    como estou fazendo aqui nesse caso, o return vai ser uma função que irá retornar o codigo escrito aqui dentro dos parenteses*/}

      <Cabecalho />

      <Conteudo />

      <Rodape />
    </>
  );
};

export default App;
