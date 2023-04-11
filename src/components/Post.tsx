import React from "react";
import { PlusCircle } from "@phosphor-icons/react";

function Post() {
  return (
    <article className="w-full">
      <form className="-mt-7 w-full grid grid-cols-[1fr,90px] gap-2 h-14 bg-transparent">
        <input
          type="text"
          className=" text-gray-300 text-base bg-gray-500  border-gray-700 border-[1px] border-solid rounded-lg p-4 outline-none focus:border-gray-500"
        />
        <button className="flex justify-center items-center bg-blue-dark rounded-lg gap-2  focus:border-gray-500 focus:border-solid outline-gray-600">
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
              0
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <strong className="text-blue text-sm leading-4">Concluídas</strong>
            <span className="text-xs text-gray-100 bg-gray-400 px-2 rounded-full h-[19px] w-[25px] flex items-center justify-center ">
              0
            </span>
          </div>
        </header>

        <div className="flex justify-center items-center w-full h-[244px] border-t-[1px] border-gray-400 rounded-lg mt-6">
          <div>
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
      </section>
    </article>
  );
}

export default Post;
