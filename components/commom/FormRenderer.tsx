import { Children, useState } from 'react';

import { LuAlertCircle } from 'react-icons/lu';
import { FaSpinner } from 'react-icons/fa';

import formFormat from '@public/formFormat.json';
import Checkbox from '@components/formComponents/Checkbox';
import Radio from '@components/formComponents/Radio';
import Text from '@components/formComponents/Text';
import { handlePagesFw, handlePagesBw } from '@utils/helpers/pagination'
import ProgressBar from '@components/ui/ProgressBar';
import Page from '@components/formComponents/Page';
import Checkbox2 from '@components/formComponents/Checkbox2';
import Email from '@components/formComponents/Email';
import Modal from '@components/commom/Modal';






const keys = Object.keys(formFormat);
const pages = keys.length;
const submit = async (event: any) => {
    event?.preventDefault()

    const data: any = document.getElementById('submit');
    const sending: any = document.getElementById('sendRef');
    const loading: any = document.getElementById('loadRef');
    sending.classList.add('hidden');
    loading.classList.remove('hidden');

    const form: any = document.getElementById('form');

    const formData = new FormData(form);

    let formDataObject: Record<string, any> = {};
    for (let pair of formData.entries()) {
        formDataObject[pair[0]] = pair[1];
    }
    const url: any = process.env.API_URL;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formDataObject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();

        if (response.ok) {
            const submitSucess: any = document.querySelector("#submit_sucess");
            const submitSucessModal: any = document.querySelector("#sucess_modal");
            const back: any = document.querySelector("#back");
            const Submit: any = document.querySelector("#submit");
            submitSucess.innerHTML = responseData.message;
            await submitSucessModal.showModal();
            const config = { attributes: true };

            const callback = (mutationList: any, observer: any) => {
                for (const mutation of mutationList) {
                    if (mutation.type === "attributes") {
                        if (mutation.attributeName === "open") {
                            console.log("Redirect");
                            back.classList.add('hidden');
                            Submit.classList.add('hidden');
                            return window.location.replace('https://google.com');
                        }
                    }
                }
            };

            const observer = new MutationObserver(callback);
            observer.observe(submitSucessModal, config);
        }
        else {
            const submitError: any = document.querySelector("#submit_error");
            const submitErrorModal: any = document.querySelector("#error_modal");
            submitError.innerHTML = responseData.message;
            submitErrorModal.showModal();
            sending.classList.remove('hidden');
            loading.classList.add('hidden');
        }


    } catch (error) {
        console.error(error);
    }

}


// Renders the form with the data provided by the form json
// Only necessary props are passed to the inputs
const FormRenderer = (props: any) => {


    const [page, setPage] = useState(0);

    const btFw = () => {
        const element = document.getElementById(String(page));
        const errMessage = document.getElementById("err-" + (String(page)));
        if (!handlePagesFw()) {
            element?.classList.add('border-red-300');
            errMessage?.classList.remove('hidden');

            return;
        } else {
            element?.classList.remove('border-red-300');
            errMessage?.classList.add('hidden');
        }

        let myPage = page;
        const formId: HTMLElement | null = document.getElementById('form');

        const childNodes: any = formId?.children;
        for (let i = 0; i < childNodes.length; i++) {
            if (!(childNodes[i].classList.contains('hidden')) && (childNodes[i].nodeName.toLowerCase() === 'fieldset')) {
                myPage = childNodes[i].id;
                setPage(childNodes[i].id);
            }
        }

        document.getElementById('next')?.classList.remove('hidden');
        document.getElementById('back')?.classList.remove('hidden');
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.disabled = true;

        if (myPage == pages - 1) {

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove('hidden');
            }

            document.getElementById('next')?.classList.add('hidden');
        }

    }

    const btBw = () => {
        if (!handlePagesBw()) {
            return;
        }

        const formId = document.getElementById('form');

        const childNodes: any = formId?.children;
        for (let i = 0; i < childNodes.length; i++) {
            if (!(childNodes[i].classList.contains('hidden')) && (childNodes[i].nodeName.toLowerCase() === 'fieldset')) {
                setPage(childNodes[i].id);
            }
        }

        const submitButton = document.getElementById('submit') as HTMLButtonElement | null;

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add('hidden');
        }
        document.getElementById('next')?.classList.remove('hidden');
        document.getElementById('back')?.classList.remove('hidden');
        if (page == 1) {
            document.getElementById('back')?.classList.add('hidden');
        }
    }

    console.log()
    return (
        <div id="main_page">
            <ProgressBar pageTotal={pages} page={Number(page) + 1} />
            <form id='form' className='section-default flex flex-col gap-4 py-32'>
                <h1 className='text-2xl font-bold'>Desafios no deslocamento para grandes centros</h1>
                {Object.values(formFormat).map((item: any, index: any) => {

                    return (
                        <fieldset key={index} id={String(Object.keys(formFormat)[index])} className={`bg-white relative border rounded-md p-6 py-12 flex flex-col gap-8 ${index != 0 ? 'hidden' : ''}`} >
                            <div className='flex flex-row justify-between gap-4'>
                                <div className='font-bold'>{item.title}</div>
                                {(index != 0 && index != pages - 1) ? <h1 className='leading-5 min-w-[32px] h-8 bg-indigo-500 text-zircon-50 flex items-center justify-center rounded-full'>{Number(keys[index])}</h1> : ''}
                            </div>
                            <div className={`leading-8 text-justify hyphens-auto ${index == 0 ? 'flex flex-col gap-4' : ''}`} dangerouslySetInnerHTML={{ __html: item.subtitle }}></div>
                            {
                                item.type == 'radio' ?
                                    <Radio data={item.data} name={item.name} required={item.required} /> :
                                    item.type == 'checkbox' ?
                                        <Checkbox data={item.data} name={item.name} goTo={item.goto} /> :
                                        item.type == 'text' ?
                                            <Text goTo={item.goto} name={item.name} placeholder={item.placeholder} /> :
                                            item.type == 'checkbox2' ?
                                                <Checkbox2 goTo={item.goto} data={item.data} name={item.name} /> :
                                                item.type == 'email' ?
                                                    <Email goTo={item.goto} name={item.name} placeholder={item.placeholder} /> :
                                                    <Page goTo={item.goto} name={item.name} />

                            }
                            <div className='flex flex-row items-center gap-4 text-red-500 hidden' id={`err-${index}`}>
                                <div><LuAlertCircle /></div>Por favor, preencha o campo acima antes de avançar</div>
                        </fieldset>
                    )
                })}
                <div className='flex flex-row-reverse gap-4'>
                    <button id='submit' type='button' className='button-send hidden relative' onClick={submit}><span id='sendRef'>Enviar</span><FaSpinner id='loadRef' className='hidden animate-spin'/></button>
                    <button id='next' type='button' className='button' onClick={btFw} >Avançar</button>
                    <button id='back' type='button' className='button hidden' onClick={btBw} >Voltar</button>
                </div>
            </form>
            <Modal dialogId="error_modal" dialogTextId="submit_error" closeButton="submit_error_close" erro />
            <Modal dialogId="sucess_modal" dialogTextId="submit_sucess" closeButton="submit_sucess_close" />

        </div>
    )
}

export default FormRenderer