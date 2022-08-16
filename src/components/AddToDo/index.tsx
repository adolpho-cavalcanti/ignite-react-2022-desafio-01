import { SearchBar } from '../../styles/components/AddToDo';
import PlusPng from '../../assets/plus.png';
import { TaskContext } from '../../context/TaskContext';
import { useContext } from 'react';

export function AddToDo() {

    const { handleCreateToDo } = useContext(TaskContext);

    const handleOnFormCreateToDo = (e: any) => {
        e.preventDefault();
        const newTaskText = e.target.task.value;

        handleCreateToDo(newTaskText);

        e.target.reset();
    }

    return (
        <SearchBar>
            <form onSubmit={handleOnFormCreateToDo}>
                <input 
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="Adicionar nova tarefa"
                    required
                />
                <button>
                    Criar 
                    <img src={PlusPng} />
                </button>
            </form>
        </SearchBar>
    )
}