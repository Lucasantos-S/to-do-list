import React, { FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import Task from "./Task";
import NoTask from "./NoTask";

interface ITaskProps {
  id: number;
  task: string;
  completed: boolean;
}

function Post() {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [value, setValue] = useState<string>("");

  const buttonDisabled = value.length < 1 ? true : false;
  const totalTasksCompleted = tasks.filter(
    (taskCompleted) => taskCompleted.completed === true
  ).length;

  function handleUpdateTaskCompleted(id: number, checked: boolean) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: checked };
        }
        return task;
      })
    );
  }

  function handleDeleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (!value) return null;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: value,
        completed: false,
      },
    ]);
    setValue("");
  }

  return (
    <article className="w-full">
      <form
        onSubmit={handleCreateTask}
        className="-mt-7 w-full grid grid-cols-[1fr,90px] gap-2 h-14 bg-transparent"
      >
        <input
          type="text"
          onChange={({ target }) => setValue(target.value)}
          value={value}
          className=" text-gray-300 text-base bg-gray-500  border-gray-700 border-[1px] border-solid rounded-lg p-4 outline-none focus:border-gray-500"
        />
        <button
          disabled={buttonDisabled}
          className={`flex justify-center items-center bg-blue-dark rounded-lg gap-2  focus:border-gray-500 focus:border-solid outline-gray-600 ${
            buttonDisabled && "opacity-80 cursor-not-allowed"
          }`}
        >
          <span className="text-gray-100 text-sm font-bold">Criar</span>
          <PlusCircle size={22} className=" text-gray-100" />
        </button>
      </form>
      <section className="w-full flex flex-col">
        <header className="flex justify-between mt-16">
          <div className="flex gap-4 items-center">
            <strong className="text-blue text-sm leading-4">
              Tarefas criadas
            </strong>
            <span className="text-xs text-gray-100 bg-gray-400 px-2 rounded-full h-[19px] w-[25px] flex items-center justify-center ">
              {tasks.length}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <strong className="text-blue text-sm leading-4">Concluídas</strong>
            <span className="text-xs text-gray-100 bg-gray-400 px-2 rounded-full h-[19px] w-[25px] flex items-center justify-center ">
              {totalTasksCompleted}
            </span>
          </div>
        </header>
        <div className="my-3">
          {tasks.map(({ id, task, completed }) => {
            return (
              <Task
                key={id}
                id={id}
                task={task}
                completed={completed}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTaskCompleted={handleUpdateTaskCompleted}
              />
            );
          })}
        </div>
        {tasks.length === 0 && <NoTask />}
      </section>
    </article>
  );
}

export default Post;
