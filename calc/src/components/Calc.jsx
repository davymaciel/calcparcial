import React, { useState } from 'react';

const IMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const CalcIMC = () => {
        const alturaM = altura / 100; 
        const calcIMC = (peso / (alturaM ** 2)).toFixed(2); 
        setResultado(calcIMC); 
    };

    return (
        <div className='container'>
            <h1>Calculadora de IMC</h1>
            <h2>Calcule seu IMC</h2>

            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso (Kg)"
            />
            <br></br>

            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (Cm)"

            />
            <br></br> 
            <br></br> 
            <button
                onClick={CalcIMC}
            >
                Calcular IMC
            </button>

            
            <h2>Seu IMC é: {resultado}</h2>
        </div>
    );
};

export default IMC;