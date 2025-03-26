import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

<<<<<<< HEAD
const LinkButton = ({ to, text }) => {
=======
const LinkButton = ({ to, text })=> {
>>>>>>> createHome#20
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
<<<<<<< HEAD
}; 
=======
};
>>>>>>> createHome#20

export default LinkButton;
