import { useState } from 'react';

import formFormat from '@public/formFormat.json';
import Checkbox from '@components/formComponents/Checkbox';
import Radio from '@components/formComponents/Radio';
import Text from '@components/formComponents/Text';

const FormRenderer = (props) => {
    const keys = Object.keys(formFormat);

    const [counter, setCounter] = useState(0);
    const [trailArr, setTrailArr] = useState([]);
    const [fieldsetVisibility, setFieldsetVisibility] = useState({});

    function pageUp() {
        event.preventDefault();
        if (counter < Number(keys.at(-1)) - 1) {
            setTrailArr(trailArr => [...trailArr, counter])
            setCounter(counter+1);
        }
        // alert(formFormat[counter].goto)
        alert(trailArr)
        document.getElementById(counter).classList.toggle('hidden')
        document.getElementById((counter + 1) < Number(keys.at(-1)) - 1 ? (counter + 1) : Number(keys.at(-1)) - 1).classList.toggle('hidden')
    }

    function pageDown() {
        event.preventDefault();
        if (counter > 0) {
            setTrailArr(trailArr.shift())
            setCounter(counter-1);
        }
        document.getElementById(counter).classList.toggle('hidden')
        document.getElementById((counter - 1) > 0 ? (counter - 1) : 0 ).classList.toggle('hidden')
    }
    
    return (
        <form className='section-default'>
            {Object.values(formFormat).map((item, index) => {
                return (
                    <fieldset key={index} id={index} className={`${index != 0 ? 'hidden' : ''}`}>
                        <legend>{item.title}</legend>
                        <div>{item.subtitle}</div>
                        {
                            item.type == 'radio' ? 
                                <Radio data={item.data} name={item.name} required={item.required} /> : 
                                item.type == 'checkbox' ?
                                <Checkbox /> :
                                <Text />
                        }
                    </fieldset>
                )
            })}
            <button className='button' onClick={pageDown}>down</button>
            <button className='button' onClick={pageUp}>up</button>
        </form>
    )
}

export default FormRenderer