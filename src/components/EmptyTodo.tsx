import styles from './EmptyTodo.module.css';

import Clipboard from '../assets/clipboard.svg';

export function EmptyTodo() {
    return (
        <div className={styles.empty}>
            <img src={Clipboard} />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

    );
}