import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";



const Modal = (props: any) => {
    if (props.erro) {
        return (
            <dialog id={props.dialogId} className='max-w-[300px] h-fit w-full mx-auto p-0 text-center bg-gray-100 rounded-md text-gray-800   pb-8
            sm:max-w-[600px]
            md:max-w-[800px]'>
                <div className='flex flex-col gap-6'>
                    <div className='w-full rounded-t-md bg-gradient-to-r from-red-600 via-red-700 to-red-600 h-fit items-center justify-center flex py-4
                ' ><CiCircleRemove className='text-center mx-auto w-[120px] h-[120px] text-white 
                md:w-[200px] md:h-[200px]' /></div>
                    <div className='flex flex-col h-fit w-full gap-4 items-center justify-center' >
                        <div>
                            <p className='text-3xl font-bold'>Oh Não!</p>
                            <p className="text-lg" id={props.dialogTextId}>Mensagem de Erro</p>
                        </div>
                        <button className='w-[50%] bg-red-600 rounded-md shadow-xl text-lg font-bold text-gray-100 p-1' id={props.closeButton} onClick={() => {
                            const submitErrorModal: any = document.querySelector("#" + (props.dialogId));
                            submitErrorModal.close();
                        }}>OK
                        </button>
                    </div>
                </div>
            </dialog>
        )
    }
    return (

        <dialog id={props.dialogId} className='max-w-[300px] h-fit w-full mx-auto p-0 text-center bg-gray-100 rounded-md text-gray-800   pb-8
        sm:max-w-[600px]
        md:max-w-[800px]'>
            <div className='flex flex-col gap-6'>
                <div className='w-full rounded-t-md bg-gradient-to-r from-green-600 via-green-700 to-green-600 h-fit items-center justify-center flex py-4
            ' ><CiCircleCheck className='text-center mx-auto w-[120px] h-[120px] text-white 
            md:w-[200px] md:h-[200px]' /></div>
                <div className='flex flex-col h-fit w-full gap-4 items-center justify-center' >
                    <div>
                        <p className='text-3xl font-bold'>Sucesso!</p>
                        <p className="text-lg" id={props.dialogTextId}>Mensagem de Sucesso</p>
                    </div>
                    <button className='w-[50%] bg-green-600 rounded-md shadow-xl text-lg font-bold text-gray-100 p-1' id={props.closeButton} onClick={() => {
                        const submitErrorModal: any = document.querySelector("#" + (props.dialogId));
                        submitErrorModal.close();
                    }}>OK
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default Modal