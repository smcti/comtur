const Email = (props: any) => {
    return (
        <input className="border w-full px-4 py-1 rounded-md" type="email" id={props.name} name={props.name} step={props.goTo} placeholder={props.placeholder}></input>
    )
}

export default Email