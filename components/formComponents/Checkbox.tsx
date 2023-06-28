import React from 'react';

const Checkbox = (props: any) => {
  return (
    <div className='clamp-matrix sm:w-full h-full overflow-auto sm:overflow-hidden'>
      <table className='sm:min-w-[360px] w-full border-separate border-spacing-2'>
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
              <tr key={index}>
                {Object.values(item).map((subItem: any, subIndex: any) => {
                  return (
                    <td className={`${subIndex == 0 ? '' : 'text-center align-middle'}`} key={subIndex}>
                      {
                        subIndex == 0 ?
                          subItem.title :
                            <input className="hover:cursor-pointer scale-[120%] accent-indigo-500 z-10" type="checkbox" id={subItem.value} name={subItem.value} step={props.goTo} value={subItem.value}></input>
                      }
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Checkbox