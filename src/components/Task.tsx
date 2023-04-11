import React from "react";
import clipboard from "../assets/Clipboard.png";
import { HiOutlineTrash } from "react-icons/hi";
interface ITaskProps {
  id: number;
  completed: boolean;
  task: string;
  handleDeleteTask: (id: number) => void;
  handleUpdateTaskCompleted: (id: number, checked: boolean) => void;
}

export default function Task({
  id,
  completed,
  task,
  handleUpdateTaskCompleted,
  handleDeleteTask,
}: ITaskProps) {
  return (
    <div
      key={id}
      className="h-[72px] mt-3 flex justify-between items-start gap-3 px-6 bg-gray-500 rounded-lg pt-4"
    >
      <div className="flex items-center mt-1 rounded-full">
        <input
          type="checkbox"
          checked={completed}
          onChange={({ target }) =>
            handleUpdateTaskCompleted(id, target.checked)
          }
          className=" w-4 h-4 rounded-full border-gray-300 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 focus:ring-opacity-50"
        />
      </div>
      <div className="h-10 w-[736px] ">
        <p
          className={` text-gray-100 text-sm leading-5 pr-5  ${
            completed && "line-through text-gray-300"
          }`}
        >
          {task}
        </p>
      </div>
      <button
        onClick={() => handleDeleteTask(id)}
        className="text-gray-300 w-3 h-[14px] cursor-pointer px-4 mt-1"
      >
        {<HiOutlineTrash />}
      </button>
    </div>
  );
}
