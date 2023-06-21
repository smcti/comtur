const Footer = () => {
  return (
    <footer className="mt-auto bg-indigo-500 py-32 text-zircon-50 font-poppins">
      <div className="section-default flex flex-col gap-8">
        <div className="flex flex-col md:flex-row brightness-0 invert justify-between w-full gap-16">
          <div className="flex flex-col w-fit gap-16">
            <h3 className="text-3xl w-full">Realização</h3>
            <div className="max-h-12 w-fit">
              <img className="max-h-12 w-auto" src="/assets/icons/comtur.png" alt="logo" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-16">
            <h3 className="text-3xl w-full">Em parceria com</h3>
            <div className="flex flex-row w-full justify-between gap-8">
              <div className="max-h-12 w-fit">
                <img className="max-h-12 w-auto" src="/assets/images/logomarca_agencia_regional.png" alt="logo" />
              </div>
              <div className="max-h-12 w-fit">
                <img className="max-h-12 w-auto" src="/assets/images/326444839_2333795833453568_810799049919276080_n.png" alt="logo" />
              </div>
              <div className="max-h-12 w-fit">
                <img className="max-h-12 w-auto" src="/assets/images/cacispar.png" alt="Logo cacispar" />
              </div>
            </div>
          </div>

          {/* <img className="max-h-12" src="#" alt="logo" /> */}
        </div>
      </div>
      <div className="section-default flex flex-col gap-4 text-center  pt-32">
        <div className="text-2xl text-gray-300"><span className="text-gray-50">PB</span> Forms</div>
        <hr />
        <div className="flex flex-col gap-4">
          <div>
            Desenvolvido e disponibilizado pela
          </div>
          <a className="underline" href="https://patobranco.tec.br/" target="_blank">
            <div className="w-full flex flex-col items-center">
              <img className="h-12" src="/assets/icons/logo-secretaria-white.svg" alt="Brasão Secretaria Municipal de Ciência, Tecnologia e Inovação" />
            </div>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer