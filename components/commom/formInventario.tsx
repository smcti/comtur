import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";

const FormInventario = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    event?.preventDefault();
    setLoading(true);
    const form: HTMLFormElement | null = document.getElementById(
      "form"
    ) as HTMLFormElement;
    if (form !== null) {
      const formData = new FormData(form);

      const payload = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        area: formData.get("area"),
      };

      document.getElementById(`nome-err`)?.classList.add("hidden");
      document.getElementById(`email-err`)?.classList.add("hidden");
      document.getElementById(`email-in-err`)?.classList.add("hidden");
      document.getElementById(`segmento-err`)?.classList.add("hidden");
      if (
        !payload.nome ||
        !String(payload.email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
        !payload.area
      ) {
        if (payload.email == "") {
          document.getElementById("email-err")?.classList.remove("hidden");
        } else if (
          !String(payload.email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        ) {
          document.getElementById("email-in-err")?.classList.remove("hidden");
        }

        if (payload.nome == "") {
          document.getElementById("nome-err")?.classList.remove("hidden");
        }
        setLoading(false);
        return;
      }

      // Now you can work with formData
      const url: string =
        process.env.NODE_ENV === "production"
          ? "https://comtur.patobranco.tec.br/api/pdfSheets"
          : "http://localhost:3000/api/pdfSheets";
      try {
        const request = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(payload),
        });

        if (request.ok) {
          const data = await request.json(); // Parse the JSON response
          setState(true);
          // You can access the data returned by the server here if needed.
          // For example, if the server returns additional information.
          setLoading(false);
        } else {
          // Handle non-successful response (e.g., validation errors, server errors)
          console.log("Request failed with status:", request.status);
          const errorData: { message: string; empty: string[] } =
            await request.json(); // Parse the JSON error response if any
          for (let i = 0; i < errorData.empty.length; i++) {
            console.log(`${errorData.empty[i]}-err`);

            document
              .getElementById(`${errorData.empty[i]}-err`)
              ?.classList.remove("hidden");
          }
          setLoading(false);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        setLoading(false);
        console.error("An error occurred:", error);
        alert(
          "Um erro inesperado ocorreu em nosso servidor. Por favor, entre em contato com o email ajuda@patobranco.tec.br e reporte o ocorrido. Obrigado desde já."
        );
      }
    } else {
      setLoading(false);
      // Handle the case where the element with ID "form" was not found
    }
  };

  return (
    <>
      {!state ? (
        <form id="form" className="space-y-4">
          <fieldset className="flex flex-col gap-4">
            <fieldset className="flex flex-col gap-1">
              <label htmlFor="nome">Nome: </label>
              <input
                className="border bg-gray-50 py-1 px-4 rounded-md"
                placeholder="fulano de tal"
                type="text"
                id="nome"
                name="nome"
                required
              />
              <span id="nome-err" className="hidden text-red-500">
                Nome não pode estar vazio
              </span>
            </fieldset>
            <fieldset className="flex flex-col gap-1">
              <label htmlFor="email">Email: </label>
              <input
                className="border bg-gray-50 py-1 px-4 rounded-md"
                placeholder="fulano@email.com"
                type="email"
                id="email"
                name="email"
                required
              />
              <span id="email-err" className="hidden text-red-500">
                Email não pode estar vazio
              </span>
              <span id="email-in-err" className="hidden text-red-500">
                Formato de email inválido
              </span>
            </fieldset>
            <fieldset className="flex flex-col gap-1">
              <label htmlFor="area">Segmento: </label>
              <select
                className="border bg-gray-50 py-1 px-4 rounded-md"
                id="area"
                name="area"
                required
              >
                <option value="Acampamento Turístico">
                  Acampamento Turístico
                </option>
                <option value="Agência de Turismo">Agência de Turismo</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Artesanato">Artesanato</option>
                <option value="Associação Comercial, Empresarial, Industrial, Setorial (Núcleos)">
                  Associação Comercial, Empresarial, Industrial, Setorial
                  (Núcleos)
                </option>
                <option value="Associação Cultural, Desportiva, Social, Recreativa, Clubes">
                  Associação Cultural, Desportiva, Social, Recreativa, Clubes
                </option>
                <option value="Associação de Classe (OAB, CFA, CFM, CAU, CREA...)">
                  Associação de Classe (OAB, CFA, CFM, CAU, CREA...)
                </option>
                <option value="Associação Filantrópica">
                  Associação Filantrópica
                </option>
                <option value="Associação/Cooperativa de Produtores (rural, artesanato, turismo, etc.)">
                  Associação/Cooperativa de Produtores (rural, artesanato,
                  turismo, etc.)
                </option>
                <option value="Casa de Espetáculos">Casa de Espetáculos</option>
                <option value="Centro de Convenções">
                  Centro de Convenções
                </option>
                <option value="Empreendimento de Entretenimento e Lazer/Parque Aquático">
                  Empreendimento de Entretenimento e Lazer/Parque Aquático
                </option>
                <option value="Empreendimento Náutico">
                  Empreendimento Náutico
                </option>
                <option value="Empresa do Ramo de Comércio">
                  Empresa do Ramo de Comércio
                </option>
                <option value="Empresa do Ramo de Prestação de Serviços">
                  Empresa do Ramo de Prestação de Serviços
                </option>
                <option value="Empresa do Ramo Industrial">
                  Empresa do Ramo Industrial
                </option>
                <option value="Fundação">Fundação</option>
                <option value="Guia de Turismo">Guia de Turismo</option>
                <option value="Hospedagem">Hospedagem</option>
                <option value="Infraestrutura de Apoio a Eventos">
                  Infraestrutura de Apoio a Eventos
                </option>
                <option value="Instituição de Ensino">
                  Instituição de Ensino
                </option>
                <option value="Locadora de Veículos">
                  Locadora de Veículos
                </option>
                <option value="Local de Eventos">Local de Eventos</option>
                <option value="Organizadora de Eventos">
                  Organizadora de Eventos
                </option>
                <option value="Parque Temático">Parque Temático</option>
                <option value="Poder Executivo Estadual">
                  Poder Executivo Estadual
                </option>
                <option value="Poder Executivo Federal">
                  Poder Executivo Federal
                </option>
                <option value="Poder Executivo Municipal">
                  Poder Executivo Municipal
                </option>
                <option value="Poder Judiciário">Poder Judiciário</option>
                <option value="Poder Legislativo Estadual">
                  Poder Legislativo Estadual
                </option>
                <option value="Poder Legislativo Federal">
                  Poder Legislativo Federal
                </option>
                <option value="Poder Legislativo Municipal">
                  Poder Legislativo Municipal
                </option>
                <option value="Sistema S (SEBRAE, SENAI, SENAC, SESC, SEST/SENAT, SENAR, outros)">
                  Sistema S (SEBRAE, SENAI, SENAC, SESC, SEST/SENAT, SENAR,
                  outros)
                </option>
                <option value="Taxista/Motorista de Aplicativo">
                  Taxista/Motorista de Aplicativo
                </option>
                <option value="Transportadora Turística">
                  Transportadora Turística
                </option>
                <option value="Outro">Outro</option>
              </select>
              <span id="area-err" className="hidden text-red-500">
                Segmento não pode estar vazio
              </span>
            </fieldset>
          </fieldset>
          <button
            className="border bg-gray-50 hover:bg-gray-100 flex items-center flex-row gap-4 py-1 px-4 rounded-md"
            type="submit"
            onClick={fetchData}
          >
            Obter PDF
            {loading ? <BiLoaderAlt className="animate-spin" /> : null}
          </button>
        </form>
      ) : (
        <div className="w-full">
          <a
            className="flex flex-row gap-4 items-center hover:underline underline-offset-2"
            href="assets/docs/Inventário_PatoBranco_Web_08/2024.pdf"
            download
          >
            <BiDownload className="text-indigo-500" />
            Faça download do Inventário Pato Branco
          </a>
        </div>
      )}
    </>
  );
};

export default FormInventario;
