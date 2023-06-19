import { Children, useState } from 'react';

import formFormat from '@public/formFormat.json';
import Checkbox from '@components/formComponents/Checkbox';
import Radio from '@components/formComponents/Radio';
import Text from '@components/formComponents/Text';
import {handlePagesFw, handlePagesBw} from '@utils/helpers/pagination'
import ProgressBar from '@components/ui/ProgressBar';

const keys = Object.keys(formFormat);
const pages = keys.length;
const submit = async (event: any) => {
    event?.preventDefault()

    const form: any = document.getElementById('form');

    const formData = new FormData(form);
    
    let formDataObject:Record<string, any>  = {};
    for(let pair of formData.entries()) {
        formDataObject[pair[0]] = pair[1];
    }
    formDataObject.email = "luizeduardockramer@gmail.com"
    const url = 'http://localhost:3000/api/sheet'; 

    try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(formDataObject),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Request failed');
        }
    
        // Handle the response here, e.g., parse JSON or check status
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
}
    

// Renders the form with the data provided by the form json
// Only necessary props are passed to the inputs
const FormRenderer = (props: any) => {

    const [page, setPage] = useState(0);

    const btFw = () => {
        if (!handlePagesFw()) {
            return;
        }
        
        let myPage = page; 
        const formId: HTMLElement | null = document.getElementById('form');
    
        const childNodes: any = formId?.children;
        for (let i = 0; i < childNodes.length; i++) {
            if(!(childNodes[i].classList.contains('hidden')) && (childNodes[i].nodeName.toLowerCase() === 'fieldset')) {
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
            if(!(childNodes[i].classList.contains('hidden')) && (childNodes[i].nodeName.toLowerCase() === 'fieldset')) {
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
        <div>
            <ProgressBar pageTotal={pages} page={Number(page) + 1}/>
            <form id='form' className='section-default flex flex-col gap-4 py-32'>
                {Object.values(formFormat).map((item: any, index: any) => {

                    return (
                        <fieldset key={index} id={String(Object.keys(formFormat)[index])} className={`bg-white relative border rounded-md p-4 flex flex-col gap-8 ${index != 0 ? 'hidden' : ''}`} >
                            <div className='flex flex-row justify-between gap-4'>
                                <div className='font-bold'>{item.title}</div>
                                <h1 className=' min-w-[32px] h-8 bg-cello-800 text-zircon-50 flex items-center justify-center rounded-full'>{Number(keys[index]) + 1}</h1>
                            </div>
                            <div>{item.subtitle}</div>
                            {
                                item.type == 'radio' ?
                                    <Radio data={item.data} name={item.name} required={item.required} /> :
                                    item.type == 'checkbox' ?
                                        <Checkbox data={item.data} name={item.name} goTo={item.goto}/> :
                                        <Text goTo={item.goto} name={item.name} placeholder={item.placeholder}/>
                            }
                        </fieldset>
                    )
                })}
                <div className='flex flex-row-reverse gap-4'>
                    <button id='submit' type='submit' className='font-semibold text-lg bg-white rounded-md button hover:bg-gray-200 hidden' onClick={submit}>Submit</button>
                    <button id='next' type='button' className='font-semibold text-lg bg-white rounded-md button hover:bg-gray-200' onClick={btFw} >next</button>
                    <button id='back' type='button' className='font-semibold text-lg bg-white rounded-md button hover:bg-gray-200 hidden' onClick={btBw} >back</button>
                </div>
            </form>
        </div>
    )
}

export default FormRenderer