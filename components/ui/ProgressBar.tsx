const ProgressBar = (props: any) => {
  const progress: String = `w-[${String(Math.round(((props.page )  / props.pageTotal) * 100))}%]`;
  return (
    <div id="progress" className='w-full h-2 bg-gray-200 sticky top-0 z-10'>
      <div className={"bg-gray-400 h-full transition-all duration-500 " + progress}></div>
    </div>
  )
}

export default ProgressBar