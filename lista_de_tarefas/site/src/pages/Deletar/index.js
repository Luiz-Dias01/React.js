import './index.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Deletar() {
    const [id, setId] = useState ('')

    async function Deletar() {
        let url = `http://localhost:3001/tarefa/${id}`;
        await axios.delete(url)

        toast.success('Registro Deletado !')
    }

    return (
        <div className='pagina-deletar'>
            <div id='container'>
                <main>
                    <h1>
                        Deletar Registro
                    </h1>

                    <form>
                        <label>Id</label>
                        <input type='number' min={0} placeholder='ID:' value={id} onChange={e => setId(e.target.value)}/>
                    </form>
                </main>
                <div id='btn-alterar'>
                            <button onClick={Deletar}>Deletar</button>
                        </div>
                        <div id='btn-voltar'>
                            <Link to='/'><button>Voltar</button></Link>
                        </div>
                        <div id='btn-voltar'>
                            <ToastContainer />
                        </div>
            </div>
        </div>
    );
};