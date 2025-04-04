import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
<<<<<<< HEAD
            <select name={name} id={name}>
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