import styles from './Header.module.css'

import igniteLogo from '../images/Ignite-logo.svg.svg';

console.log(igniteLogo);

export function Header(){
    return(
        <header className={styles.header}>
             <img src= {igniteLogo} alt="Logotipo do Ignite" />

        </header>
       
    )
}