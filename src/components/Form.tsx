import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Form.module.css';

interface FormProps {
    handleAddNewTask: (task: string) => void;
}

export function Form({ handleAddNewTask }: FormProps) {
    const [text, setText] = useState('');


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        handleAddNewTask(text);
        setText('');
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setText(event.target.value);
    }

    function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Preencha a tarefa antes de adicionar!');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text" 
                name="todo"
                placeholder='Adicione uma nova tarefa' 
                value={text} 
                onChange={handleChange} 
                onInvalid={handleNewTodoInvalid}
                required  
            />
            <button type='submit'><span>Criar</span>{<PlusCircle size={16} weight="bold" />}</button>
        </form>
    )
}