import styles from './ProjectForm.module.css'

<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState, useEffect} from 'react'

>>>>>>> 0bdbce84c (Conectando com API pelo React #23)
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit  = (e) => {
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }
/*
    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
*/
    return(
<<<<<<< HEAD
        <form className={styles.form}>
=======
import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
  

function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit  = (e) => {
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }
/*
    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
*/
    return(
        <form onSubmit={submit} className={styles.form}>
>>>>>>> refs/remotes/origin/main
=======
        <form onSubmit={submit} className={styles.form}>
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)

            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
>>>>>>> refs/remotes/origin/main
=======
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)
            />

            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)
            />

            <Select 
            name = "category_id" 
            text = "Selecione a categoria"
            options = {categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
=======
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />

            <Select 
            name = "category_id" 
            text = "Selecione a categoria"
            options = {categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    ) 
>>>>>>> refs/remotes/origin/main
}

export default ProjectForm