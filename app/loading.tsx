import { BiLoaderAlt } from "react-icons/bi";

const loading = () => {
  return (
    <div className='max-w-2xl flex flex-row gap-4 my-32 items-center w-full p-4 mx-auto'>
      loading <BiLoaderAlt className='animate-spin' />
    </div>
  );
};

export default loading;
