const Checkbox2 = (props: any) => {
    return (
      <div className="flex flex-col gap-4">
        {Object.values(props.data).map((item: any, index: any) => {
          return (
            <div key={index} className="flex flex-row gap-4 items-center">
              <input className="hover:cursor-pointer scale-125 accent-indigo-500" type="checkbox" id={item.value} name={item.value} value={item.value} step={props.goTo}/>
              <label className="hover:cursor-pointer" htmlFor={item.value}>{item.label}</label>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default Checkbox2