<<<<<<< HEAD
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home




=======
function Home(){
    return(
        <h1>Home</h1>
    )
}

export default Home
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
