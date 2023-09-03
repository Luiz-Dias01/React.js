import './index.scss';
import {Link} from 'react-router-dom'
import Modal from '../../Componets/modal/modal.js'
import { useState } from 'react';

export default function Cliente() {
  const [open,  setOpen] = useState (false);

  return (
    <div className="pagina-usuario">
      
      <div id='menu'>
        <div id='logo'>
        <div><img src='../assets/image/logo.png'/></div>
        <p>
          Elite <span>Wheelz</span>
        </p>
        </div>

        <div id='menu-nav'>
          <div className='menu-div'>
            <div><img src='../assets/image/home.svg'/></div>
            <div className='nav-nome'>
              <p>Home</p>
            </div>
          </div>

          <div className='menu-div' style={{background: '#8837C7'}}>
            <div><img src='../assets/image/cliente.png'/></div>
            <div className='nav-nome'>
              <p>Cliente</p>
            </div>
          </div>

          <Link to='/Veiculo'>
            <div className='menu-div'>
              <div><img src='../assets/image/veiculo.png'/> </div>
              <div className='nav-nome'>
              <p>Veículos</p>
              </div>
            </div>
          </Link>

          <div className='menu-div'>
            <div><img src='../assets/image/locacao.png'/> </div>
            <div className='nav-nome'>
              <p>Locação</p>
            </div>
          </div>
        </div>
      </div>

      <div id='container'>
        <header>
          <p>Olá, Que bom que você voltou!</p>
          <div>
            <button onClick={() => setOpen(true)}>
              <picture>
                <source media="(max-width: 580px)" srcset="../assets/image/menu.png" type="image/jpg"/>
                <img src="../assets/image/usuario.png" alt=""/>
              </picture>
            </button>
          </div>
          <Modal isOpen = {open}
          setOpen = {setOpen}/>
        </header>

        <div id='enunciado'>
            <p>ÁREA ADMINISTRATIVA</p>
            <h1>Controle de Clientes</h1>
        </div>

        <main>
          <div id='inserir'>
            <div id='enunciado-inserir'>
              <h2>Novo Cliente</h2>
            </div>

            <form>
              <div className='caixa-inserir'> 
                <label>
                  Nome
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Email
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  Telefone
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  CPF
                </label>
                <input type='text' />
              </div>

              <div className='caixa-inserir'> 
                <label>
                  CNH
                </label>
                <input type='text' />
              </div>
            </form>

            <div id='btn-salvar'>
              <button>Salvar</button>
            </div>
          </div>

          <div id='consulta'>
            <div>
              <div id='enunciado-consulta'>
                <h2>Lista de Clientes</h2>
              </div>
              <div className='caixa-consulta'>
                  <div>
                    <label>Nome</label>
                    <input />
                  </div>
                  <div id='img-consulta'>
                    <button><img src='../assets/image/incone-busca.png'/></button>
                  </div>
                </div>
            </div>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>CNH</th>
                    <th>Telefone</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>luiz henrique</td>
                    <td>xxx.xxx.xxx-xx</td>
                    <td>xxxxxxxxxxxxxx</td>
                    <td>+xx (xx) xxxxx-xxxx</td>
                    <td>luizhenrique@gmail.com</td>
                  </tr>

                  <tr>
                    <td>luiz henrique</td>
                    <td>xxx.xxx.xxx-xx</td>
                    <td>xxxxxxxxxxxxxx</td>
                    <td>+xx (xx) xxxxx-xxxx</td>
                    <td>luizhenrique@gmail.com</td>
                  </tr>

                  <tr>
                    <td>luiz henrique</td>
                    <td>xxx.xxx.xxx-xx</td>
                    <td>xxxxxxxxxxxxxx</td>
                    <td>+xx (xx) xxxxx-xxxx</td>
                    <td>luizhenrique@gmail.com</td>
                  </tr>

                  <tr>
                    <td>luiz henrique</td>
                    <td>xxx.xxx.xxx-xx</td>
                    <td>xxxxxxxxxxxxxx</td>
                    <td>+xx (xx) xxxxx-xxxx</td>
                    <td>luizhenrique@gmail.com</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </main>
      </div>
    </div>
  );
}


