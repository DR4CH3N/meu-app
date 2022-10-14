import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/servicos">Servicos</NavLink>
    </div>
  );
};

export default Menu;
