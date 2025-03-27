import {Link} from 'react-router-dom'
import Container from './Container'
import {styleHTMLAttributes} from 'react'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return(
<<<<<<< HEAD
      <nav className={styles.navbar}>
=======
      <nav class={styles.navbar}>
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
        <Container>
          <Link to="/">
            <img src={logo} alt="Costs"/>
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
<<<<<<< HEAD
            </li>            
            <li className={styles.item}>
              <Link to="/projects">Projeto</Link>
            </li>
            <li className={styles.item}>
              <Link to="/company">Empresa</Link>
=======
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
            </li>
            <li className={styles.item}>
<<<<<<< HEAD
              <Link to="/services">Serviços</Link>
=======
              <Link to="/company">Empresa</Link>
            </li>
            <li className={styles.item}>
              <Link to="/newproject">Novo Projeto</Link>
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
            </li>
          </ul>
        </Container>
      </nav>
    )
}

export default Navbar