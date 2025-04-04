import styles from './SubmitButton.module.css'

<<<<<<< HEAD
function SubmitButton({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton
=======
function SubmitButton({ text }) {
    return (
        <div>
            <button type="submit" className={styles.btn}>{text}</button>
        </div>
    )
} 

export default SubmitButton
>>>>>>> refs/remotes/origin/main
