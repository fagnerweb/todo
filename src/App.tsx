import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { TodoItem } from './components/TodoItem';
import { EmptyTodo } from './components/EmptyTodo';

import styles from './App.module.css';
import './global.css';
import { useState } from 'react';

interface TodoInfoProps {
  id: string;
  isCompleted: boolean;
  task: string;
}

function App() {
  const [todoInfo, setTodoInfo] = useState<TodoInfoProps[]>([]);
  const [count, setCount] = useState(0);

  function onDelete(itemDeleteId: string) {
    setTodoInfo(todoInfo.filter(item => { 
      if (item.id === itemDeleteId && item.isCompleted) {
        setCount(c => c - 1);
      }

      return item.id !== itemDeleteId
    }))
  }

  function onCompleted(itemCompletedId: string) {

    const todoUpdated = todoInfo.map(item => {
      if (item.id === itemCompletedId) {
        item.isCompleted = !item.isCompleted;

        if (item.isCompleted) setCount(c => c + 1);
        else setCount(c => c - 1);
      }
      return item; 
    })

    setTodoInfo(todoUpdated);
  }

  function handleAddNewTask(task: string) {
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      task
    }

    setTodoInfo([...todoInfo, newTask]);
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <Form handleAddNewTask={handleAddNewTask} />

        <div className={styles.boxTodo}>
          <header>
            <h2 className={styles.createdTasks}>
              Tarefas criadas <span>{todoInfo.length > 0 ? todoInfo.length : '0'}</span>
            </h2>
            <p className={styles.completed}>
              Concluídas <span>{todoInfo.length > 0 ? `${count} de ${todoInfo.length}` : '0'}</span>
            </p>
          </header>

          <div className={styles.listOfTodo}>
            {
              todoInfo.length > 0 ?

                todoInfo.map(item => {
                  return (
                    <TodoItem
                      key={item.id}
                      id={item.id}
                      isCompleted={item.isCompleted}
                      task={item.task}
                      onDelete={onDelete}
                      onCompleted={onCompleted}
                    />
                  )
                })

                :

                <EmptyTodo />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
