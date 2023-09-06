import './modal.scss'
import {Link} from 'react-router-dom'


export default function Modal({isOpen, setOpen}) {

    if (isOpen) {
        return <dialog open>
                    <div id='men'>
                        <div id='logo'>
                        <div><img src='../assets/image/logo.png'/></div>

                        <p>
                        Elite <span>Wheelz</span>
                        </p>
                        </div>

                        <div id='men-nav'>
                            <div className='men-div'>
                                <div>
                                    <img src='../assets/image/home.svg'/>
                                </div>
                                
                                <div className='nav-nome'>
                                <p>Home</p>
                                </div>
                            </div>

                            <Link to='/'>
                                <div className='men-div'>
                                    <div>
                                        <img src='../assets/image/cliente.png'/>
                                    </div>

                                    <div className='nav-nome'>
                                    <p>Cliente</p>
                                    </div>
                                </div> 
                            </Link>

                            <Link to='/Veiculo'>
                                <div className='men-div'>
                                    <div>
                                        <img src='../assets/image/veiculo.png'/> 
                                    </div>

                                    <div className='nav-nome'>
                                    <p>Veículos</p>
                                    </div>
                                </div>
                            </Link>
                            

                            <div className='men-div'>
                                <div>
                                    <img src='../assets/image/locacao.png'/> 
                                </div>

                                <div className='nav-nome'>
                                <p>Locação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method='dialog'>
                        <button onClick={() => setOpen(false)}>Fechar</button>
                    </form>
                </dialog>
            
        

    }

    return null
}