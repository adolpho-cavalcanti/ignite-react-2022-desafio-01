import { Card } from '../../styles/components/Card';
import { TaskStyle } from '../../styles/components/TaskStyle';
import TrashIcon from '../../assets/trash.png'
import { ContentCard } from '../../styles/components/ContentCard';
import { ActionsUser } from '../../styles/components/ActionsUser';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

interface TaskProps {
    id: string
    description: string
    isCompleted: boolean
}

export function Task({ id: taskId, description, isCompleted }: TaskProps) {
    const { deleteTask, onHandleTaskCompleted } = useContext(TaskContext);

    function handleDeleteTask() {
        deleteTask(taskId)
    }

    function handleTaskCompleted() {
        onHandleTaskCompleted(taskId);
    }
    return (
        <TaskStyle>
            <Card>
                <span>Tarefa:</span>
                <ContentCard>
                    {isCompleted
                        ? <p style={{ textDecoration: 'line-through', 
                                        textDecorationColor: 'red' }}>{description}</p>
                        : <p>{description}</p>
                    }
                </ContentCard>
                <ActionsUser>
                    {isCompleted
                        ?
                        <input type="checkbox" defaultChecked onClick={handleTaskCompleted}/>
                        :
                        <input type="checkbox" onClick={handleTaskCompleted}/>
                    }
                    <button onClick={handleDeleteTask}>
                        <img src={TrashIcon} alt="Remove Task" />
                    </button>
                </ActionsUser>
            </Card>
        </TaskStyle>
    )
}