import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string
  description: string
  isCompleted: boolean
}

interface TaskProviderData {
  handleCreateToDo: (value: string) => void;
  newTask: Task[];
  deleteTask: (value: string) => void;
  onHandleTaskCompleted: (editValue: string) => void;
}

interface TaskProviderProps {
    children: ReactNode;
    tasks: Task[];
}

export const TaskContext = createContext({} as TaskProviderData);

export function TaskProvider({ children, tasks }: TaskProviderProps) {
  const [newTask, setNewTask] = useState<Task[]>(tasks);

  function handleCreateToDo(newTaskText: string) {
    const newTaskForm: Task = {
      id: uuidv4(),
      description: newTaskText,
      isCompleted: false
    }
    setNewTask([...newTask, newTaskForm ]);
  }

  function deleteTask(taskIdToDelete: string) {
    const newTaskWithoutDeleteOne = newTask.filter(task => task.id !== taskIdToDelete);
    setNewTask(newTaskWithoutDeleteOne);
  }

  function onHandleTaskCompleted(taskIdToEdit: string) {
    const newTaskWithoutEditOne = newTask.filter(task => {
      if(task.id == taskIdToEdit) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setNewTask(newTaskWithoutEditOne)
  }

    return(
      <TaskContext.Provider value={{
        handleCreateToDo,
        deleteTask,
        onHandleTaskCompleted,
        newTask
      }}>
          {children}
      </TaskContext.Provider>
  );
}