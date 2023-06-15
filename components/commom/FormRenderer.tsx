import { useState } from 'react';

import formFormat from '@public/formFormat.json';
import Checkbox from '@components/formComponents/Checkbox';
import Radio from '@components/formComponents/Radio';
import Text from '@components/formComponents/Text';

const keys = Object.keys(formFormat);

const queue: Number[] = [0];

let goTo = 0;

const getCurrentPage = () => {
    const element: any = document.getElementById(String(queue.at(-1)));
    const childNodes = element.children[3].children;

    let isAnyChecked: any = false;

    for (let i = 0; i < childNodes.length; i++) {
        const childestNode = childNodes[i].children;
        for (let j = 0; j < childestNode.length; j++) {
            const child = childestNode[j];
            // Check if the child node is a radio input and is checked
            if ((child.type === "radio" || child.type === "checkbox") && child.checked) {
                console.log((child));

                child.type === "radio" ? isAnyChecked = child.step : isAnyChecked = true;
                break; // Exit the loop if any radio input is checked
            }
        }

        if (isAnyChecked) {
            break; // Exit the outer loop if any radio input is checked
        }
    }

    return isAnyChecked;
}

const handlePagesFw = () => {
    const page = queue.at(-1);

    const pageTo: any = getCurrentPage();

    console.log(pageTo)

    if (pageTo) {
        queue.push(Number(pageTo || 0 ));
        document.getElementById(page).classList.toggle('hidden');
        document.getElementById(queue.at(-1)).classList.toggle('hidden');
    }
};

const handlePagesBw = () => {    
    const page = queue.at(-1);

    if (queue.at(-1)) {
        queue.pop();
        document.getElementById(page).classList.toggle('hidden');
        document.getElementById(queue.at(-1)).classList.toggle('hidden');
    }
}

const FormRenderer = (props: any) => {
    const [page, setPage] = useState(1);
    return (
        <form className='section-default flex flex-col gap-4'>
            {Object.values(formFormat).map((item: any, index: any) => {

                return (
                    <fieldset key={index} id={String(index)} className={`border p-4 ${index != 0 ? 'hidden' : ''}`} >
                        <h1>{keys[index]}</h1>
                        <legend>{item.title}</legend>
                        <div>{item.subtitle}</div>
                        {
                            item.type == 'radio' ?
                                <Radio data={item.data} name={item.name} required={item.required} /> :
                                item.type == 'checkbox' ?
                                    <Checkbox data={item.data} name={item.name} /> :
                                    <Text />
                        }
                    </fieldset>
                )
            })}
            <div className='flex flex-row-reverse gap-4'>
                <button type='button' className='button hover:bg-gray-200' onClick={handlePagesFw} >next</button>
                <button type='button' className='button hover:bg-gray-200' onClick={handlePagesBw} >back</button>
            </div>
        </form>
    )
}

export default FormRenderer