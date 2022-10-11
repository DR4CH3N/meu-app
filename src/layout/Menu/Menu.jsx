import estilos from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={`${estilos.botoes} ${estilos.texto} `}>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Serviços</a>
    </nav>
  );
};

export default Menu;
