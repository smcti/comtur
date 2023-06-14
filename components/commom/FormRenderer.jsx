import { useState } from 'react';

import formFormat from '@public/formFormat.json';
import Checkbox from '@components/formComponents/Checkbox';
import Radio from '@components/formComponents/Radio';
import Text from '@components/formComponents/Text';

const keys = Object.keys(formFormat);

const queue = [0];

const getCurrentPage = () => {
    const element = document.getElementById(queue.at(-1));
    const childNodes = element.children[3].children;

    let isAnyChecked = false;

    for (let i = 0; i < childNodes.length; i++) {
        const childestNode = childNodes[i].children;
        for (let j = 0; j < childestNode.length; j++) {
            const child = childestNode[j];

            // Check if the child node is a radio input and is checked
            if ((child.type === "radio" || child.type === "checkbox") && child.checked) {
                isAnyChecked = true;
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
    console.log('click');
    console.log(getCurrentPage())
    const page = queue.at(-1);
    
    if (getCurrentPage()) {
        queue.push(Number(formFormat[page].goto));
        document.getElementById(page).classList.toggle('hidden');
        document.getElementById(queue.at(-1)).classList.toggle('hidden');
    }
};

const handlePagesBw = () => {    
    console.log('click');
    console.log(getCurrentPage());
    const page = queue.at(-1);

    if (queue.at(-1)) {
        queue.pop();
        document.getElementById(page).classList.toggle('hidden');
        document.getElementById(queue.at(-1)).classList.toggle('hidden');
    }
}

const FormRenderer = (props) => {
    const [page, setPage] = useState(1);
    return (
        <form className='section-default flex flex-col gap-4'>
            {Object.values(formFormat).map((item, index) => {

                return (
                    <fieldset key={index} id={index} className={`border ${index != 0 ? 'hidden' : ''}`} >
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
                <button type='button' className='button' onClick={handlePagesFw} >next</button>
                <button type='button' className='button' onClick={handlePagesBw} >back</button>
            </div>
        </form>
    )
}

export default FormRenderer