"use client";

import { BsFillShareFill } from "react-icons/bs";

const shareData: ShareData = {
  title: "COMTUR",
  text: "Sondagem do Conselho Municipal de Turismo de Pato Branco",
  url: "https://comtur.patobranco.tec.br",
};

const page = () => {
  const handleClick = () => {
    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      try {
        navigator.clipboard.writeText(
          "https://comtur.patobranco.tec.br"
        );
        const deuBoa = document.getElementById("deuBoa");
        deuBoa?.classList.remove("hidden");
        setTimeout(() => {
          deuBoa?.classList.add("-top-12");
        }, 0);
        const time = 3000; // 2 segundos
        setTimeout(() => {
          deuBoa?.classList.add("hidden", "top-0");
        }, time);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <section className='flex flex-col h-full'>
      <div className='section-default py-32'>
        <div className='flex flex-col gap-8 border p-4 rounded-lg bg-white py-16'>
          <h1 className='text-2xl font-bold'>
            Desafios no deslocamento para grandes centros
          </h1>
          <p>
            Suas respostas foram salvas nos nossos bancos de dados.
          </p>
          <p>
            Colabore na divulgação da sondagem e ajude a melhorar o
            Turismo da região, clique no compartilhar
          </p>
          <button
            onClick={handleClick}
            className='relative border px-4 py-1 w-fit rounded-lg'
          >
            <div className='flex flex-row items-center gap-4'>
              <BsFillShareFill />
              Compartilhe
            </div>
            <div
              id='deuBoa'
              className='hidden absolute duration-500 pointer-events-none top-0 left-0 shadow-lg border bg-white z-10 py-2 px-4 rounded-lg'
              aria-disabled={true}
            >
              Link copiado!
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
