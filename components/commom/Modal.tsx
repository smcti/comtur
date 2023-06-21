import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";



const ErrorModal = (props: any) => {
  if (props.erro) {
    return (
      <dialog className="w-[300px] h-fit font-bold bg-gray-50 rounded-lg shadow-xl itens-center text-center text-gray-700" id={props.dialogId}>
        <div className='text-center w-full h-fit'><AiFillCloseCircle className='w-[50%] h-[50%] text-center text-red-500 mx-auto' /></div>
        <p className='text-2xl font-bold text-gray-900'>Oh Não!</p>
        <p className="p-2" id={props.dialogTextId}></p>
        <button className='w-[50%] h-fit p-1 rounded-lg bg-gray-300 shadow-sm' id={props.closeButton} onClick={() => {
          const submitErrorModal: any = document.querySelector("#" + (props.dialogId));
          submitErrorModal.close();
        }}>OK
        </button>
      </dialog>
    )
  }
  return (
    <dialog className="w-[300px]h-fit font-bold bg-gray-50 rounded-lg shadow-xl itens-center text-center text-gray-700" id={props.dialogId}>
      <div className='text-center w-full h-fit mx-auto'><AiFillCheckCircle className='w-[50%] h-[50%] text-center text-green-500 mx-auto' /></div>
      <p className='text-2xl font-bold text-gray-900'>Sucesso!</p>
      <p className="p-2" id={props.dialogTextId}></p>
      <button className='w-[50%] h-fit p-1 rounded-lg bg-gray-300 shadow-sm' id={props.closeButton} onClick={() => {
        const submitSucessModal: any = document.querySelector("#" + (props.dialogId));

        submitSucessModal.close();        
      }}>OK
      </button>
    </dialog>
  )
}

export default ErrorModal