import { useState } from "react";
export function CalculateIMC() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (!isNaN(pesoFloat) && !isNaN(alturaFloat) && alturaFloat !== 0) {
      const imc = pesoFloat / (alturaFloat * alturaFloat);
      setResultado(imc);
    } else {
      setResultado(null);
    }
  };
  return (
    <div className="flex items-center flex-col w-96 h-96 border-2 shadow-xl mt-36 rounded-xl">
      <div className="mt-8">
        <span>Calcule seu IMC aqui</span>
      </div>
      <div  className="mt-8 flex flex-col space-y-3">
        <span>Peso: </span>
        <input
          type="number"
          required
          placeholder="Coloque seu peso aqui"
          className="w-72 placeholder:italic  placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          onChange={(e) => setPeso(e.target.value)}
        />
        <span>Altura: </span>
        <input
          type="number"
          required
          placeholder="Coloque sua altura aqui"
          className="w-72 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          onChange={(e) => setAltura(e.target.value)}
        />
      <button
        className="rounded-lg w-72 h-8 mt-8 text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"
        onClick={calcularIMC}
      >
        Calcular
      </button>
      </div>

      {resultado !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>Seu IMC é: {resultado.toFixed(2)}</p>
        </div>
      )}
      <img src="https://www.drrogermoura.com.br/images/artigos/tabela-imc.png" alt="" className="mt-36" />
    </div>
  );
}

export default CalculateIMC;
