import { format } from 'path';
import React, { useState } from 'react';
const Cpf = require('@utils/helpers/verifyCPF');

type CPFProps = {
    id: string;
    name: string;
    value: string;
    goTo: string;
    placeholder: string;
};


const CPF = (props: CPFProps) => {
    const [formattedCPF, setFormattedCPF] = useState('');
    const [validCPF, setValidCPF] = useState(false);
    const [invalidCPFError, setInvalidCPFError] = useState('');
    const [cpfExistsError, setCpfExistsError] = useState('');
    const [verifyingCPF, setVerifyingCPF] = useState(false);

    const handleCPFChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const cpf = e.target.value.replace(/[^\d]+/g, '');
        let formatted = cpf;
        if (formatted.length > 3) {
            formatted = formatted.replace(/(\d{3})/, '$1.');
        }
        if (formatted.length > 7) {
            formatted = formatted.replace(/(\d{3}\.)(\d{3})/, '$1$2.');
        }
        if (formatted.length > 11) {
            formatted = formatted.replace(/(\d{3}\.\d{3}\.)(\d{3})/, '$1$2-');
        }
        setFormattedCPF(formatted);
        if (cpf.length === 11) {
            setVerifyingCPF(true);
            const isValid = await Cpf.verifyCPF(cpf);
            setValidCPF(isValid);

            if (isValid) {
                const cpfExists = await Cpf.cpfExists(cpf);
                if (cpfExists) {
                    // CPF exists on the server

                    setCpfExistsError('CPF já Cadastrado');
                    setInvalidCPFError('');
                } else {
                    // CPF is valid and does not exist on the server
                    setCpfExistsError('');
                    setInvalidCPFError('');
                }
            } else {
                // CPF is invalid

                setCpfExistsError('');
                setInvalidCPFError('CPF inválido');
            }
            setVerifyingCPF(false);
        } else if (formattedCPF.length > 14) {
            setCpfExistsError('');
            setInvalidCPFError('Número de caracteres excedido');
        } else {
            setValidCPF(false);
            setVerifyingCPF(false);
            setCpfExistsError('');
            setInvalidCPFError('');
        }
    };

    return (
        <>
            <input
                className={`border w-full px-4 py-1 rounded-md cpf ${cpfExistsError && 'cpf_exist'} ${invalidCPFError ? 'cpf_invalid' : ''} ${verifyingCPF ? 'verifying_cpf' : ''} `}
                id={props.id}
                name={props.name}
                step={props.goTo}
                placeholder={props.placeholder}
                type="text"
                value={formattedCPF}
                onChange={handleCPFChange}
            />
            {invalidCPFError && <div className='text-red-500'>{invalidCPFError}</div>}
            {cpfExistsError && <div className='text-red-500'>{cpfExistsError}</div>}
            {verifyingCPF && <div>Verificando CPF...</div>}
        </>
    );
};

export default CPF;