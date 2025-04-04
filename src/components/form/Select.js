import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
<<<<<<< HEAD
<<<<<<< HEAD
            <select name={name} id={name}>
=======
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                value={value || ''}
            >
>>>>>>> 4e73da944 (Inclusão de informações no banco de dados #24)
                <option>Selecione uma opção</option>
<<<<<<< HEAD
=======
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma opção</option>
=======
>>>>>>> 0bdbce84c (Conectando com API pelo React #23)
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                    ))
                }
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
>>>>>>> 0bdbce84c (Conectando com API pelo React #23)
            </select>
        </div>
    )
}

export default Select