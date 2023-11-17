import './index.scss';

import Carrossel from '../../components/carousel/carousel.js';

export default function Home() {

  ///Função que faz interação com o identificador Natural
  function colorNatural() {
    var natural = document.getElementById("natural")
    natural.style.backgroundColor = "#0F2506";

    var equipe = document.getElementById("equipe")
    equipe.style.backgroundColor = "#fff";

    var objetivo = document.getElementById("objetivo")
    objetivo.style.backgroundColor = "#fff";

    var visao = document.getElementById("visao")
    visao.style.backgroundColor = "#fff";

    var txt = document.getElementById("txt-alternativo")
    txt.innerHTML = "Acreditamos na importância de cuidar do nosso corpo e do meio ambiente de forma consciente e sustentável. É por isso que apresentamos nossa proposta para uma empresa de cosméticos vegana, que busca oferecer produtos de beleza livres de ingredientes de origem animal, e que não são testados em animais. Nossa empresa tem como objetivo principal promover a beleza natural, saudável e ética, proporcionando produtos de alta qualidade que atendam às necessidades dos consumidores conscientes."
  } 

  ///Função que faz interação com o identificador Equipe
  function colorEquipe() {
    var equipe = document.getElementById("equipe")
    equipe.style.backgroundColor = "#0F2506";

    var objetivo = document.getElementById("objetivo")
    objetivo.style.backgroundColor = "#fff";

    var visao = document.getElementById("visao")
    visao.style.backgroundColor = "#fff";

    var natural = document.getElementById("natural")
    natural.style.backgroundColor = "#fff";

    var txt = document.getElementById("txt-alternativo")
    txt.innerHTML = "Na sinergia empreendedora da Naturalmente, Marilia Silva, co-fundadora e encarregada dos Serviços Terceirizados de Suporte (STS), é a força motriz por trás da eficiência operacional. Com habilidades organizacionais afiadas, ela assegura que os serviços terceirizados estejam alinhados com os padrões de qualidade e integridade da empresa. <br/><br/>Ricardo Anastacio, co-fundador e Diretor de TI (Tecnologia da Informação), é o arquiteto da infraestrutura tecnológica da Naturalmente. Sua liderança na implementação de soluções digitais inovadoras garante que a empresa esteja na vanguarda da tecnologia, promovendo eficiência e segurança em todos os aspectos. <br/><br/>Sophia Zilio, co-fundadora e Diretora Financeira, desenha os contornos financeiros da Naturalmente. Com uma abordagem estratégica, Sophia gerencia as finanças da empresa, garantindo a sustentabilidade não apenas em termos ecológicos, mas também financeiramente. Juntos, Marilia, Ricardo e Sophia formam um trio empreendedor dedicado, cada um desempenhando um papel vital no sucesso e no impacto positivo da Naturalmente."
  } 

  ///Função que faz interação com o identificador Visão
  function colorVisao() {
    var visao = document.getElementById("visao")
    visao.style.backgroundColor = "#0F2506";

    var natural = document.getElementById("natural")
    natural.style.backgroundColor = "#fff";

    var equipe = document.getElementById("equipe")
    equipe.style.backgroundColor = "#fff";

    var objetivo = document.getElementById("objetivo")
    objetivo.style.backgroundColor = "#fff";

    var txt = document.getElementById("txt-alternativo")
    txt.innerHTML = "Vislumbramos um futuro no qual a Naturalmente se consolida como líder global na oferta de produtos veganos e sustentáveis. Almejamos ser reconhecidos não apenas por nossa excelência em oferecer alternativas éticas e eco-friendly, mas também por impulsionar uma mudança cultural em direção a escolhas mais conscientes. Enxergamos um mundo em que a Naturalmente seja uma inspiração para outras empresas, incentivando a transição para práticas mais sustentáveis, e onde os consumidores possam fazer escolhas alinhadas com seus valores, promovendo assim um impacto positivo em escala global."
  } 

  ///Função que faz interação com o identificador Objetivo
  function colorObjetivo() {
    var objetivo = document.getElementById("objetivo")
    objetivo.style.backgroundColor = "#0F2506";

    var visao = document.getElementById("visao")
    visao.style.backgroundColor = "#fff";

    var natural = document.getElementById("natural")
    natural.style.backgroundColor = "#fff";

    var equipe = document.getElementById("equipe")
    equipe.style.backgroundColor = "#fff";

    var txt = document.getElementById("txt-alternativo")
    txt.innerHTML = "Promover a adoção de um estilo de vida sustentável e ético, proporcionando aos consumidores uma ampla variedade de produtos veganos de alta qualidade. Buscamos não apenas atender às necessidades dos clientes, mas também inspirar e educar sobre os benefícios de escolhas conscientes, impactando positivamente o meio ambiente, a saúde e o bem-estar animal. Nosso compromisso é criar um mundo onde a sustentabilidade seja uma parte integrante do cotidiano, e onde a beleza e o bem-estar andem de mãos dadas com a responsabilidade ambiental"
  } 

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
            <div id='icon-favoritos'>
              <a href='#' alt='icone-favorito'><img src='../assets/icon/icon_favoritos.png' /></a>
              
              <p>Favoritos</p>
            </div>

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

        
      </header>

      <main>
        <section id='apresentacao'>
          <div id='imagem-oleo'>
            <img src='../../../assets/image/imagem_oleos.png' />
          </div>

          <div id='txt-oleo'>
            <h1>Nossa linha com óleos essenciais</h1>
            <p>Pura Hidratação. Com ingredientes funcionais, derivados vegetais e de alta compatibilidade com a fisiologia da pele, o Sérum Facial Vegana Pura Hidratação contém óleos essenciais de Palmarosa, Gerânio, Ylang-Ylang, Lavanda, Petitgrain, Laranja Doce e óleo vegetal de Jojoba que atua como agente hidratante e renovador da pele, estimulando sua recuperação e forma fisiológica, protegendo-a de agressões externas. <a href='#'>Saiba mais ...</a></p>
          </div>
        </section>

        <hr/>
        
        <section id='vantagens-de-uso'>
          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-animais.png'/>
          </div>

          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-global.png'/>
          </div>

          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-planta.png'/>
          </div>

          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-fluor.png'/>
          </div>

          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-embalagem.png'/>
          </div>

          <div className='bloco-informativo'>
            <img src='../../../assets/image/imagem-ingredientes.png'/>
          </div>
        </section>

        <hr/>

        <section id='carrossel'>
          <h2>Mais Vendidos</h2>
          <Carrossel/>
        </section>

        <section id='descricao'>
          <div>
            <div className='circulo-selecao1'><div id='natural' onClick={colorNatural}>Natural<br/>mente</div></div>
            <div className='circulo-selecao'><div id='equipe' onClick={colorEquipe}>Equipe</div></div>
            <div className='circulo-selecao'><div id='visao' onClick={colorVisao}>Visão</div></div>
            <div className='circulo-selecao'><div id='objetivo' onClick={colorObjetivo}>Objetivo</div></div>
          </div>

          <div id='txt-descricao'>
            <p id='txt-alternativo'>
              Acreditamos na importância de cuidar do nosso corpo e do meio ambiente de forma consciente e sustentável. É por isso que apresentamos nossa proposta para uma empresa de cosméticos vegana, que busca oferecer produtos de beleza livres de ingredientes de origem animal, e que não são testados em animais. Nossa empresa tem como objetivo principal promover a beleza natural, saudável e ética, proporcionando produtos de alta qualidade que atendam às necessidades dos consumidores conscientes.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div id='logo-rodape'>
          <img src='../../../assets/icon/logo.png'/>
        </div>

        <div id='txt-rodape'>
          <p>A NaturalMente  |  Produtos ▾  |  Lojas  |  Contato | Política de Privacidade </p>
        </div>
      </footer>
    </div>
  );
}

