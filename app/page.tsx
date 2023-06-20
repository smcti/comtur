'use client'

const page = () => {
  return (
    <section>
      <div className="section-default">
        <div className="w-[300px] h-[300px] border rounded-lg p-4 hover:cursor-pointer"
          onClick={() => {
            window.location.replace('/form');
          }}>
          <h1>Formulário Contur</h1>
          <p>Desafios no deslocamento para grandes centros</p>
        </div>
      </div>
    </section>
  )
}

export default page