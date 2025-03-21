import Logo from './assets/Logo.svg';
import Feed from './assets/Feed.svg';
import Account from './assets/Account.svg';
import Info from './assets/Info.svg';
import Logout from './assets/Logout.svg';
import './styles.css';
export default function SideBar(){
    return(
        <aside>
            <img src={Logo} alt="Logo codeconnect" />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-publicacao'>Publicar</a>
                    </li>
                    
                    <li>
                        <a href="#" className='item__link item__link--ativo' >
                            <img src={Feed} alt="" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Account} alt="" />
                            <span>Conta</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Info} alt="" />
                            <span>Info</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Logout} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </aside>

    )
}