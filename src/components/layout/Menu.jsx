import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      {/* trocar a tag <a> pelo componente NavLink e o "href" pelo "to": isso ativara o carregamento assincrono dos componentes e rotas (ESSENCIAL!)*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/servicos">Servicos</NavLink>
    </div>
  );
};

export default Menu;
