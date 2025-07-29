import { useState } from 'react';
import './lateralnavbar.css';

export const Lateranavbar = () => {
const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  } 

  return (
    <nav className='lateranavbar'>
      <div className='menu-lateral' onClick={toggleMenu} >☰</div>

      <ul className={`lateranavbar-ul ${open ? 'open': ''}`} >
        <li>Hills</li>
        <li>Max</li>
        <li>Por Plan VD</li>
        <li>Por Plan</li>

      </ul>


      <ul className={`lateranavbar-ul ${open ? 'open': ''}`} >
        <p>_____________________</p>
        <li>Natural</li>
        <li>Super Premium</li>
        <li>Premium</li>
        <li>Satandar</li>

      </ul>

      <ul className={`lateranavbar-ul ${open ? 'open': ''}`} >
        <p>_____________________</p>

        <li>Cachorro</li>
        <li>Adulto</li>
        <li>Senior</li>
        <p>_____________________</p>
      </ul>
    </nav>
  )
}
