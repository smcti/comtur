const Radio = (props: any) => {
  return (
    <div>
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <input type="radio" id={item.value} name={props.name} value={item.value} required={props.required} />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio