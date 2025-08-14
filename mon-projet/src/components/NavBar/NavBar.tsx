import { useState } from 'react';
import styles from "./NavBar.module.css";
import DylanAvatar from '../../assets/icons/DylanAvatar.png'
import barMenu from '../../assets/icons/barMenu.png'


function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
               <a href="#home"><img src={DylanAvatar} alt="Logo" /></a>
            </div>
            <a href="#menu" className={styles.burger} onClick={toggleMenu}><img src={barMenu} alt="Menu" /></a>
            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <li><a href='/about'>À propos</a></li>
                <li><a href='/projects'>Mes projets</a></li>
                <li><a href='/contact'>Contact</a></li>
                </ul>
        </nav>
    );
}

export default Navbar;