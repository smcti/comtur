const Radio = (props: any) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <input className="hover:cursor-pointer scale-125 accent-indigo-500" type="radio" id={item.value} name={props.name} value={item.value} required={props.required} step={item.goto}/>
            <label className="hover:cursor-pointer" htmlFor={item.value}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio