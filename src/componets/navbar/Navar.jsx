import './navbar.css'

export const Navar = () => {
    return (
        <nav className='container-navbar'>
            {/* Logo a la izquierda */}
            <div className='navbar-left'>
                <img className='item-home' src="./img/logo.jpg" alt="logo pet" />
            </div>

            {/* Barra de búsqueda al centro */}
            <div className='container-search'>
                <input type="text" placeholder="Buscar..." /> 🔍
            </div>

            {/* Carrito a la derecha */}
            <div className='navbar-right'>
                <div className='item-right'>🛒</div>
            </div>
        </nav>
    );
}