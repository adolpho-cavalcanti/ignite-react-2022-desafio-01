import React, { useContext, useEffect } from "react";
import { AddToDo } from "./components/AddToDo";
import { HeaderSite } from "./components/HeaderSite";
import { ListTask } from "./styles/components/ListTask";
import { Content } from "./styles/components/Content";
import { CounterTasks } from "./components/CounterTasks";
import { Row } from "./styles/components/Row";
import { ContainerApp } from "./styles/ContainerApp";
import { Task } from "./components/Task";
import { TaskContext, TaskProvider } from "./context/TaskContext";
import { TaskContainer } from "./components/TaskContainer";

interface ITask {
  id: string
  description: string
  isCompleted: boolean
}

function App () {
  const tasks: ITask[] = [];

  return (
    <TaskProvider tasks={tasks}>
      <HeaderSite />
      <ContainerApp>
        <Content>
          <Row>
            <AddToDo />
          </Row>
          <Row>
            <CounterTasks />
          </Row>
          <Row>
            <TaskContainer />
          </Row>
        </Content>
      </ContainerApp>
    </TaskProvider>
  )
}

export default App
