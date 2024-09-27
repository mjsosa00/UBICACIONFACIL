import React, {useState}  from "react";
import './NavBar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change

   
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else  {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }



    return(
        <div className="divnavbar">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
                
            <div className={menu_class}>
            <ul className="listapadre">
                    <li className="listahija"><Link to="/"onClick={isMenuClicked}>- Inicio</Link></li>
                    <li className="listahija"><Link to="/about"onClick={isMenuClicked}>- categoria</Link></li>
                    <li className="listahija"><Link to="/services"onClick={isMenuClicked}>- Categoria</Link></li>
                    <li className="listahija"><Link to="/Contacto"onClick={isMenuClicked}>- Contacto</Link></li>
                </ul>



            </div>
            
        </div>
    )
}

export default Navbar