const Footer = () => {
  return (
    <footer className="mt-auto bg-cello py-32 text-zircon-50 font-poppins">
      <div className="section-default flex flex-col gap-8">
        <h3 className="text-3xl w-full text-center">Parceiros</h3>
        <div className="flex flex-row brightness-0 invert justify-between w-full gap-4">
          <div className="max-h-12 w-fit">
            <img className="max-h-12 w-auto" src="/assets/images/cacispar.png" alt="Logo cacispar" />
          </div>
          <div className="max-h-12 w-fit">
            <img className="max-h-12 w-auto" src="/assets/images/logomarca_agencia_regional.png" alt="logo" />
          </div>
          <div className="max-h-12 w-fit">
            <img className="max-h-12 w-auto" src="/assets/images/326444839_2333795833453568_810799049919276080_n.png" alt="logo" />
          </div>
          {/* <img className="max-h-12" src="#" alt="logo" /> */}
          <div className="flex flex-col">
            <h3 className="font-bold clamp-contur">COMTUR</h3>
            <p className="clamp-contur-s">Conselho Municipal de Turismo</p>
          </div>
        </div>
      </div>
      <div className="section-default flex flex-col gap-4 text-center  pt-16">
        <div className="text-2xl text-zircon-100"><span className="text-zircon-50">PB</span> Forms</div>
        <hr />
        <div>Desenvolvido pela <a className="underline" href="https://patobranco.tec.br/">Secretaria de Ciência, Tecnologia e Inovação de Pato Branco</a></div>
      </div>
    </footer>
  )
}

export default Footer