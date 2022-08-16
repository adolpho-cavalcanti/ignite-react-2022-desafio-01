import { DescriptionTaskEmptyLineOne, DescriptionTaskEmptyLineTwo, ListTask, TaskEmpty } from '../../styles/components/ListTask';
import { Task } from '../Task';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import agendaImg from '../../assets/clipboard.png';

export function TaskContainer() {
  const { newTask } = useContext(TaskContext);

  return (
    <>
      {
        newTask.length > 0
        ?
        <ListTask>
          {newTask?.map(task => (
            <Task key={task.id} 
            description={task.description} 
            isCompleted={task.isCompleted} 
            id={task.id} />
            ))}
        </ListTask>
        :
        <ListTask>
          <TaskEmpty>
            <img src={agendaImg} alt="Agenda de Tarefas"/>
            <DescriptionTaskEmptyLineOne>
              Você ainda não tem tarefas cadastradas
            </DescriptionTaskEmptyLineOne>
            <DescriptionTaskEmptyLineTwo>
              Crie tarefas e organize seus itens a fazer
            </DescriptionTaskEmptyLineTwo>
          </TaskEmpty>
        </ListTask>
      }
    </>
  )
}