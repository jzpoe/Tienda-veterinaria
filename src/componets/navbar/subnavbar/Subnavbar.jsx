import { useState } from 'react';
import './subnavbar.css'

export const Subnavbar = () => {
   const [open, setOpen] = useState(false);


    const toggleMenu = () => {
        setOpen(!open);
    }

  return (
    <nav className="subnavbar">
      <div className='menu-condicional' onClick={toggleMenu} >☰</div>

      <ul className={`menu ${open ? 'open' : ''} `} >

         <li className="menu-item">
          Mascotas
          <ul className="submenu">
            <li>Perros</li>
            <li>Gatos</li>
            <li>Aves</li>
          </ul>
        </li>
        <li className="menu-item">
          Marcas
          <ul className="submenu">
            <li>Royal Canin</li>
            <li>Purina</li>
            <li>Pedigree</li>
          </ul>
        </li>
        <li className="menu-item">
          Ofertas
          <ul className="submenu">
            <li>Descuentos</li>
            <li>2x1</li>
          </ul>
        </li>
        <li className="menu-item">Servicios</li>
        <li className="menu-item">Envío programado</li>
      </ul>
    </nav>
  );
};