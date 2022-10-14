import { BrowserRouter, Route, Switch } from "react-router-dom";
// rotas do browser, rotas e switch (para trocar as paginas)

import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      {/* ATENÇÃO: PARA COLOCAR MULTIPLAS TAGS NO CODIGO VOCE PRECISA COLOCAR DENTRO DE UMA FUNÇÃO SE NÃO VOCE IRÁ ENCONTRAR MUITOS ERROS! 
    como estou fazendo aqui nesse caso, o return vai ser uma função que irá retornar o codigo escrito aqui dentro dos parenteses*/}
      {/* BrowserRouter é um container de rotas (precisa  envolver todos os componentes do app */}
      <BrowserRouter>
        <Cabecalho />
        {/* Switch: mecanismo para troca/alternancia de rotas */}
        <Switch>
          {/* Route: configuração de cada rota (qual caminho, qual componente) */}
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/produtos">
            <Produtos />
          </Route>

          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>

        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
