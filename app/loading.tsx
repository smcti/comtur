import { BiLoaderAlt } from "react-icons/bi";

const loading = () => {
  return (
    <section className='max-w-2xl flex flex-row gap-4 my-32 items-center w-full p-4 mx-auto'>
      loading <BiLoaderAlt className='animate-spin' />
    </section>
  );
};

export default loading;
