const Radio = (props: any) => {
  return (
    <>
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <input type="radio" id={item.value} name={props.name} value={item.value}/>
            <legend>{item.label}</legend>
          </div>
        )
      })}
    </>
  )
}

export default Radio