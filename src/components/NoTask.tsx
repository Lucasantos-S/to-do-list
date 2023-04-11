import React from "react";
import clipboard from "../assets/Clipboard.png";
export default function NoTask() {
  return (
    <div className="flex justify-center items-center w-full h-[244px] border-t-[1px] border-gray-400 rounded-lg mt-6">
      <div className="flex flex-col items-center">
        <img className="w-14 h-14 mb-4" src={clipboard} alt="" />
        <div>
          <strong className="text-gray-300">
            Você ainda não tem tarefas cadastradas
          </strong>
          <p className="text-gray-300">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  );
}
