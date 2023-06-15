const Checkbox = (props: any) => {
  return (
    <table>
      {Object.values(props.data).map(( item: any, index: any ) => {
        return (
          <tr key={index} className="flex flex-row gap-4">
            {Object.values(item).map(( subItem: any, subIndex: any ) => {

              return (
                <>
                {
                <td>
                  { 
                    index == 0 || subIndex == 0 ? 
                    <td>{ subItem.title }</td> : 
                    <>
                      <td>{JSON.stringify( subItem )}</td>
                      <td>
                        <input type="checkbox">{ subItem.value }</input>
                      </td>
                    </> 
                  }
                </td>

                }
                </>
              )
            })}
          </tr>
        )
      })}
    </table>
  )
}

export default Checkbox

{/* <input type="checkbox" id={item.value} name={item.value} value={item.value} />
            <label htmlFor={item.value}>{item.label}</label> */}