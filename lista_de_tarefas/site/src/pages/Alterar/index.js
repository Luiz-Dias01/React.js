import './index.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alterar() {
    const [tarefa, setTarefa] = useState ('')
    const [ordem, setOrdem] = useState ('')
    const [finalizado, setFinalizado] = useState (false)
    const [cadastro, setCadastro] = useState ('')
    const [ident, setIdent] = useState ('')
    const [id, setId] = useState ('')


    async function Alterar() {


        
        let url = `http://localhost:3001/tarefa/${id}`
        await axios.put(url, {
            tarefas: tarefa,
            ordem: ordem,
            finalizado: finalizado,
            cadastro: cadastro,
            ident: ident
        })

        
        toast.success("Registro Alterado!")
    }

    

    return (
        <div className='pagina-alterar'>
            <div id='container'>
                <h1>alterar Registros</h1>
                    <main>
                        <form>
                            <div className='caixa'>
                                <label>Tarefa </label>
                                <input type='text' placeholder='Descrição:' value={tarefa} onChange={e => setTarefa(e.target.value)}/>
                            </div>

                            <div className='caixa'>
                                <label>Ordem </label>
                                <input type='text' placeholder='Numero:' value={ordem} onChange={e => setOrdem(e.target.value)}/>
                            </div>

                            <div className='bool'>
                                <label>Finalizado: </label>
                                <span>sim </span>
                                <input type='checkbox' value={finalizado} onChange={e => setFinalizado(e.target.checked)}/>
                            </div>

                            <div className='caixa'>
                                <label>dtCadastro: </label>
                                <input type='date'  value={cadastro} onChange={e => setCadastro(e.target.value)}/>
                            </div>
                            
                            <div className='caixa'>
                                <label>idenId </label>
                                <input type='number' placeholder='ID:' value={ident} onChange={e => setIdent(e.target.value)}/>
                            </div>

                            <hr></hr>

                            <div className='caixa'>
                                <p>Qual registro você dejsa alterar :</p>
                                <input type='number' placeholder='ID:' value={id} onChange={e => setId(e.target.value)}/>
                            </div>
                        </form>
                        <div id='btn-alterar'>
                            <button onClick={Alterar}>Alterar</button>
                        </div>
                        <div id='btn-voltar'>
                            <Link to='/'><button>Voltar</button></Link>
                        </div>
                        <div id='btn-voltar'>
                            <ToastContainer />
                        </div>
                    </main>
            </div>
        </div>
    );
};