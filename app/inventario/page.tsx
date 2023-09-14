"use client";

import React from "react";
import FormInventario from "@components/commom/formInventario";

const page = () => {
  return (
    <section className='w-full max-w-2xl  mx-auto my-32'>
      <h1 className='px-4 text-xl lg:text-3xl font-bold'>
        Obtenha o inventário
      </h1>
      <p className='px-4 pb-4'>
        Preencha todos os dados para prosseguir
      </p>
      <div className='bg-white border rounded-lg p-4'>
        <FormInventario />
      </div>
    </section>
  );
};

export default page;
