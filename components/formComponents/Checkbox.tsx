const Checkbox = (props: any) => {
  return (
    <table>
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <tr key={index} className="flex flex-row gap-4">
            {Object.keys(item).map((subItem: any, subIndex: any) => {

              return (
                <>
                {
                  <td>{subItem}</td>
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