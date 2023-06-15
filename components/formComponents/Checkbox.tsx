const Checkbox = (props: any) => {
  return (
    <table className="border w-full overflow-hidden">
      <thead>
        <tr>
          {Object.values(props.data[0]).map((item: any, index: any) => {
            return (
              <>
                {index == 0 ? <th key={index}></th> : ''}<th key={index + 1}>{item.title}</th>
              </>
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
            <tr>
              {Object.values(item).map((subItem: any, subIndex: any) => {
                return (
                  <>                    
                    {
                      subIndex == 0 ? <td>{subItem.title}</td> : <td><input className="w-full" type="checkbox" id={subItem.value} name={subItem.value} value={subItem.value}></input></td>

                    }
                  </>
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