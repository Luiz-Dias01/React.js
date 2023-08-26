import './index.scss';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="pagina-home">
      <div id='container'>
        <div>
          <h1>Lista de Tarefas</h1>
        </div>

        <div id='btn'>
          <div>
            <Link to = '/Consulta'><button>Consultar</button></Link>
          </div>
          <div>
            <Link to = '/Inserir'><button>Inserir</button></Link>
          </div>
          <div>
            <Link to = '/Alterar'><button>Alterar</button></Link>
          </div>
          <div>
            <Link to = '/Deletar'><button>Deletar</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


