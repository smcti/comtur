const Text = (props: any) => {
  return (
    <input className="border px-4 py-1 rounded-md" type="text" id={props.value} name={props.name} step={props.goTo} placeholder={props.placeholder}></input>
  )
}

export default Text