import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { MenuItems } from '../MenuItems';
import './navbar.scss';



class Navbar extends Component {
   
    render(){
         return(
             <nav className="NavbarItems">
                 <h1 className="navbar-logo"><img src={'/choizlogo.png'} /></h1>
                 <div className="menu-icon">
                    
                 </div>
                 <ul className="grid-nav">
                     {MenuItems.map((item, index) => {
                         return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                         )
                     })}
                 </ul>
                 <div className="contenedor">
                 <h1 className="frase">Cuidarte siempre te cuesta menos con Choiz</h1>
                 <img className="persona" src={'/persona.png'} />
                 </div>
             </nav>
         )
    }
}
export default Navbar