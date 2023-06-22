import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";



const Modal = (props: any) => {
    if (props.erro) {
        return (
            <dialog id={props.dialogId} className='max-w-[300px] h-fit w-full mx-auto p-0 text-center shadow-lg bg-gray-50 rounded-md text-gray-900   pb-8
            sm:max-w-[600px]
            md:max-w-[800px]'>
                <div className='flex flex-col gap-6'>
                    <div className='w-full rounded-t-md bg-red-400 h-fit items-center justify-center flex py-4
                ' ><CiCircleRemove className='text-center mx-auto w-[120px] h-[120px] text-white 
                md:w-[200px] md:h-[200px]' /></div>
                    <div className='flex flex-col h-fit w-full gap-4 items-center justify-center' >
                        <div>
                            <p className='text-3xl font-bold'>Oh Não!</p>
                            <p className="text-lg text-gray-700" id={props.dialogTextId}>Mensagem de Erro</p>
                        </div>
                        <button className='py-2 px-8 transition-all font-semibold text-zircon bg-red-400 rounded-md hover:bg-red-300' id={props.closeButton} onClick={() => {
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

        <dialog id={props.dialogId} className='max-w-[300px] h-fit w-full mx-auto p-0 text-center shadow-lg bg-gray-50 rounded-md text-gray-900   pb-8
        sm:max-w-[600px]
        md:max-w-[800px]'>
            <div className='flex flex-col gap-6'>
                <div className='w-full rounded-t-md bg-green-400 h-fit items-center justify-center flex py-4
            ' ><CiCircleCheck className='text-center mx-auto w-[120px] h-[120px] text-white 
            md:w-[200px] md:h-[200px]' /></div>
                <div className='flex flex-col h-fit w-full gap-4 items-center justify-center' >
                    <div>
                        <p className='text-3xl font-bold'>Sucesso!</p>
                        <p className="text-lg text-gray-700" id={props.dialogTextId}>Mensagem de Sucesso</p>
                    </div>
                    <button className='py-2 px-8 transition-all font-semibold text-zircon bg-green-400 rounded-md hover:bg-green-300' id={props.closeButton} onClick={() => {
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