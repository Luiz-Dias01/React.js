import './index.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

export default function Consulta() {
    const [listarTodos, setListarTodos] = useState ([]);

    async function Listar() {
        let url = 'http://localhost:3001/tarefa';
        let resp = await axios.get(url);

        setListarTodos(resp.data) 
    }

    return (
        <div className='pagina-consulta'>
            <div id='container'>
                <header>
                    <h1>Consultar Registros</h1>
                    <button onClick={Listar}>Buscar todos</button>
                </header>

                <main>
                    <div id='scrool'>
                        <table>
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th id='th-tarefa'>dsTarefa</th>
                                    <th>Ordem</th>
                                    <th>Finalizados</th>
                                    <th>dtCadastro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listarTodos.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td id='td-tarefa'>{item.tarefa}</td>
                                    <td>{item.ordem}</td>
                                    <td id='td-finalizado'>{item.finalizado}</td>
                                    <td>{item.cadastro.substring(0, 10)}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </main>

                <footer>
                    <Link to='/'><button>Voltar</button></Link>
                </footer>
            </div>
        </div>
    );
};