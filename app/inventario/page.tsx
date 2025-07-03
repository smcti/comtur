"use client";

import React, { useState } from "react";
import FormInventario from "@components/commom/formInventario";
import topFunction from "@utils/topFunction";

const Page = () => {
  const [read, setRead] = useState(false);

  return (
    <section className='w-full max-w-2xl  mx-auto my-32 space-y-4'>
      {read ? (
        <>
          <h1 className='px-4 text-xl lg:text-3xl font-bold'>
            Obtenha o inventário
          </h1>
          <p className='px-4 pb-4'>
            Preencha todos os dados para prosseguir
          </p>
        </>
      ) : (
        <>
          <h1 className='px-4 text-xl lg:text-3xl font-bold'>
            Inventário
          </h1>
        </>
      )}
      {!read ? (
        <div className='flex flex-col gap-4 bg-white p-4 rounded-lg border'>

          <p>
            O Inventário da Oferta Turística de Pato Branco é o
            documento que descreve o Município no cenário turístico.
            As informações estão organizadas em três categorias
            conforme metodologia do Ministério do Turismo:
          </p>
          <ol className='list-decimal pl-4'>
            <li>Infraestrutura de Apoio ao Turismo</li>
            <li>Serviços e Equipamentos Turísticos</li>
            <li>Atrativos Turísticos</li>
          </ol>
          <p>
            O documento serve como pronta referência dos ativos
            turísticos locais buscando identificar as vocações
            principais do Município e contribuir no processo de
            planejamento turístico tanto do Órgão Municipal de Turismo
            como de empresas e instituições do terceiro setor. Não
            tem, portanto, caráter publicitário, comercial ou de
            promoção do destino ao público-final.
          </p>
          <p>
            A presente Versão do Inventário da Oferta Turística de
            Pato Branco traz informações coletadas até Junho de 2025.
            Além do recorte temporal, vale lembrar que o levantamento
            de empresas considerou como critério a localização em
            áreas turísticas o que inclui a Região Central da cidade,
            as vias que dão acesso ao Município e o entorno dos
            principais atrativos turísticos, ou seja, locais
            principais de circulação de visitantes, além daqueles
            empreendimentos com fluxo turístico comprovado e com
            presença digital incluindo perfil no Google Maps. Quanto
            aos eventos turísticos são considerados aqueles
            programados e recorrentes, tendo sido já realizados em no
            mínimo 3 edições apresentando evidências de movimentação
            turística.
          </p>
          <p>
            Caso deseje{" "}
            <b className='font-bold'>compartilhar o documento</b> ,
            solicitamos gentilmente que encaminhe aos interessados o
            link a esta página, a fim de conseguirmos mensurar os
            acessos ao material.
          </p>
          <p>
            Você pode{" "}
            <b>contribuir com eventuais informações em falta</b> até
            tal data de recorte da atual Versão. Na página 1 de
            Apresentação do Inventário está um link com campos
            disponíveis para sua contribuição. As informações
            fornecidas serão analisadas para inclusão na próxima
            versão do Inventário.
          </p>
          <p>
            As{" "}
            <b>
              imagens, artes e mapas contidos no material são de
              propriedade de terceiros e não podem ser compartilhados
            </b>
            conforme Lei de Direitos Autorais. Os{" "}
            <b>textos do material podem ser citados</b>, desde que
            mencionados os créditos. Ao citar o material em todo ou em
            partes, utilize a seguinte referência:
          </p>
          <cite>
            BAGGIO. A. J.{" "}
            <b>Inventário da Oferta Turística de Pato Branco</b> .
            Pato Branco, PR: Prefeitura de Pato Branco/SEBRAE-PR,
            2023. Versão 2 Junho, 2025.
          </cite>
          <p>Boa leitura.</p>
        </div>
      ) : (
        <>
          <div className='bg-white border rounded-lg p-4'>
            <FormInventario />
          </div>
        </>
      )}
      <button
        className='border py-1 float-right px-4 rounded-lg mt-4 bg-indigo-500 text-white hover:bg-indigo-400'
        onClick={() => {
          topFunction();
          setRead((read) => !read);
        }}
      >
        {" "}
        {read ? "Voltar" : "Prosseguir"}
      </button>
    </section>
  );
};

export default Page;
