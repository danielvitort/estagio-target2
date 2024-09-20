"use client"

import { Container } from "@/app/components/Container";
import { useState } from "react";


const Questao2 = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState<{ found: boolean; count: number }>({ found: false, count: 0 });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const checkForLetterA = () => {
        const lowerCaseText = inputText.toLowerCase(); // Transforma o texto em minúsculas
        const count = (lowerCaseText.match(/a/g) || []).length; // Conta quantas vezes 'a' aparece
        const found = count > 0;

        setResult({ found, count });
    };

    return (
        <section className="">
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 2</h1>
                <p>Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.</p>

                <p>IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;</p>


                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div>
                        <h1>Verificar Letra 'A'</h1>
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Digite um texto"
                            className="rounded p-2 text-xl text-slate-950 my-4"
                        />
                        <button
                            className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl hover:border-white hover:bg-sky-700 hover:text-white"
                            onClick={checkForLetterA}
                        >
                            Verificar
                        </button>

                        {result.found ? (
                            <p>A letra 'A' aparece {result.count} vezes no texto.</p>
                        ) : (
                            <p>A letra 'A' não foi encontrada no texto.</p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Questao2;