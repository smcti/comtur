const Checkbox = (props: any) => {
  return (
    <div>
      {Object.values(props.data).map((item: any, index: any) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <input type="checkbox" id={item.value} name={item.value} value={item.value} />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Checkbox