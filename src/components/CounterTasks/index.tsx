import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { CounterTasksStyles } from '../../styles/components/CounterTasksStyles';

export function CounterTasks() {

    const { newTask } = useContext(TaskContext);

    const countTaskCompleted = newTask.filter(task => task.isCompleted);

    return (
        <CounterTasksStyles>
            <span>Tasks Criadas <strong>{newTask.length}</strong></span>
            <span>Concluídas <strong>{countTaskCompleted.length}/{newTask.length}</strong></span>
        </CounterTasksStyles>
    )
}