<<<<<<< HEAD
import styles from './NewProject.module.css'

import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                //outra forma de mandar uma menssagem sem reqisitar uma classe
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!!' } })

            })
            .catch((err) => console.log(err))
    }
    return(
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
        )
=======
function NewProject(){
    return(
        <h1>Novo Projeto</h1>
    )
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
}

export default NewProject