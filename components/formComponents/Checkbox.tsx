import React from 'react';

const Checkbox = (props: any) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.values(props.data[0]).map((item: any, index: any) => {

            return (
              <React.Fragment key={index}>
                {index == 0 ? <th></th> : ''}<th>{item.title}</th>
              </React.Fragment>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {Object.values(props.data).map((item: any, index: any) => {
          if (!index) {
            return;
          }


          return (
            <tr className='after:content-[""] after:block after:py-5' key={index}>
              {Object.values(item).map((subItem: any, subIndex: any) => {
                return (
                  <td key={subIndex}>                    
                    {
                      subIndex == 0 ? 
                        subItem.title : 
                          <input className="w-full h-full scale-125" type="checkbox" id={subItem.value} name={subItem.value} step={props.goTo} value={subItem.value}></input>
                    }
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Checkbox