import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Home from "../pages/Home";

import Rodape from "../components/Rodape";
import Produtos from "../pages/Produtos";
import Servicos from "../pages/Servicos";

const App = () => {
  return (
    <>
      {/* ATENÇÃO: PARA COLOCAR MULTIPLAS TAGS NO CODIGO VOCE PRECISA COLOCAR DENTRO DE UMA FUNÇÃO SE NÃO VOCE IRÁ ENCONTRAR MUITOS ERROS! 
    como estou fazendo aqui nesse caso, o return vai ser uma função que irá retornar o codigo escrito aqui dentro dos parenteses*/}

      <Cabecalho />
      <Conteudo />
      <Home />
      <Produtos />
      <Servicos />
      <Rodape />
    </>
  );
};

export default App;
