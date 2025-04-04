<<<<<<< HEAD
import styles from './NewProject.module.css'

import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
=======
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
>>>>>>> refs/remotes/origin/main

function NewProject(){
<<<<<<< HEAD
    const navigate = useNavigate();

    function createPost(project){
        //initialize cost and services
        project.cost = 0;
        project.services = [];
=======
    const navigate = useNavigate()

    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
<<<<<<< HEAD
                console.log(data);
                //redirect
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!!' } });
            })
            .catch((err) => console.log(err));
    }

=======
                console.log(data)
                //redirect
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!!' } })

            })
            .catch((err) => console.log(err))
    }
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)
    return(
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
<<<<<<< HEAD
<<<<<<< HEAD
            <ProjectForm btnText="Criar Projeto" />
=======
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)
        </div>
        )
=======
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
>>>>>>> refs/remotes/origin/main
}

export default NewProject;
