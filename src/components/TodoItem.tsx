import { Trash, Circle, CheckCircle } from 'phosphor-react';

import styles from './TodoItem.module.css';

interface TodoItemProps {
    id: string;
    isCompleted: boolean;
    task: string;
    onDelete: (id: string) => void;
    onCompleted: (id: string) => void;
}

export function TodoItem({ id, isCompleted, task, onDelete, onCompleted}: TodoItemProps) {
    
    return (
        <div className={`${styles.item} ${isCompleted ? styles.taskCompleted : ''}`}>
            <button 
                className={styles.btnCompleted}
                onClick={() => onCompleted(id)}
            >
                {isCompleted ? <CheckCircle weight="fill" size={16} /> : <Circle size={16} weight="bold" />}
            </button>
            <p>{task}</p>
            <button 
                className={styles.btnDelete}
                onClick={() => onDelete(id)}
            >
            {<Trash size={16} />}                
            </button>
        </div>
    )
}