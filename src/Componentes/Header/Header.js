import './Header.css'

function Header(){
    return(
        <header className='menu'>
                <a className='link' href='#'><img className="img_menu" src="/img/beehive.png" alt="imagem_menu"/>Sobre Nós</a>
                <a className='link' href='#'><img className="img_menu" src='/img/honey.png' alt='imagem_menu'/>Produtos</a>
                <a className='link' href='#'><img className="img_menu" src='/img/beekeeping (1).png' alt='imagem_menu'/>Contatos</a>
        </header>
            
    );
}

export default Header;