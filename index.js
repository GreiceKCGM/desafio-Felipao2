const tabelaVitorias = [
    { minVitorias: 0, maxVitorias: 10, descricao: "Ferro" },
    { minVitorias: 11, maxVitorias: 20, descricao: "Bronze" },
    { minVitorias: 21, maxVitorias: 50, descricao: "Prata" },
    { minVitorias: 51, maxVitorias: 80, descricao: "Ouro" },
    { minVitorias: 81, maxVitorias: 90, descricao: "Diamante" },
    { minVitorias: 91, maxVitorias: 100, descricao: "Lendário" },
    { minVitorias: 101, maxVitorias: Infinity, descricao: "Imortal" }
];


let vitorias = 50 ;
let derrotas = 15;


function calculadoraVitorias(vitorias, derrotas){
    return vitorias - derrotas;

}

let resultadoVitorias = calculadoraVitorias(vitorias, derrotas)

resultadoVitorias = parseInt(resultadoVitorias);


let nivel;

for (let i = 0; i < tabelaVitorias.length; i++) {
    if (resultadoVitorias >= tabelaVitorias[i].minVitorias && resultadoVitorias <= tabelaVitorias[i].maxVitorias) {
        nivel = tabelaVitorias[i].descricao;
        break; 
    }
}


console.log("O Herói tem saldo de  " + resultadoVitorias + " está no nível de " + nivel);
