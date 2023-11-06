import './index.scss';

import Carrossel from '../../components/carousel/carousel.js';

export default function Home() {
  return (
    <div id="page-home">
      <header>
        <nav>
          <div id='logo'>
            <img src='../assets/icon/logo.png' alt='logo'/>
          </div>

          <form>
            <div id='lupa-pesquisa'>
              <img src='../assets/icon/lupa_pesquisa.png'/>
            </div>
            <input type='text' placeholder='O que você proucura hoje?'/>
          </form>

          <div id='navegacao-basica'>
            <div id='conta-usuario'>
              <a href="#"><img src='../assets/icon/icon_config_cliente.png' alt='icone usuario'/></a>
              <p>Entrar na minha conta</p>
            </div>

            <div id='carrinho'>
              <a href="#"><img src='../assets/icon/icon_carrinho.png' alt='icone carrinho'/></a>
              <p>Sacola</p>
            </div>
          </div>
        </nav>

        <div id='enunciado-mais-vendidos'>
          <h1>Mais Vendidos</h1>
        </div>
      </header>

      <main>
        <Carrossel/>
      </main>
    </div>
  );
}

