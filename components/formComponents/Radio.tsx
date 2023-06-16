const Radio = (props: any) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <input className="scale-125" type="radio" id={item.value} name={props.name} value={item.value} required={props.required} step={item.goto}/>
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio