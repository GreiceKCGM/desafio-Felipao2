
let vitorias = 5000;

let derrotas = 3000;


function tabelaVitorias( vitorias) {
    if (vitorias < 10 ) return ('Ferro')
    if (vitorias >= 11 && vitorias <= 20) return ('Bronze')
    if (vitorias >= 21 && vitorias <= 50) return ('Prata')
    if (vitorias >= 51 && vitorias <= 80) return ('ouro')
    if (vitorias >= 81 && vitorias <= 90) return ('Diamante')
    if (vitorias >= 91 && vitorias <= 100) return ('Lendario')
    if (vitorias >= 101) return (' Imortal ')
  }


function calculadoraVitorias(vitorias, derrotas){
    return vitorias - derrotas;

}

let resultadoVitorias = calculadoraVitorias(vitorias, derrotas)

resultadoVitorias = parseInt(resultadoVitorias);


console.log(`O Herói tem saldo de ${resultadoVitorias} e está no nível de ${tabelaVitorias(resultadoVitorias)}`)


/*const tabelaVitorias = [
    { minVitorias: 0, maxVitorias: 10, descricao: "Ferro" },
    { minVitorias: 11, maxVitorias: 20, descricao: "Bronze" },
    { minVitorias: 21, maxVitorias: 50, descricao: "Prata" },
    { minVitorias: 51, maxVitorias: 80, descricao: "Ouro" },
    { minVitorias: 81, maxVitorias: 90, descricao: "Diamante" },
    { minVitorias: 91, maxVitorias: 100, descricao: "Lendário" },
    { minVitorias: 101, maxVitorias: Infinity, descricao: "Imortal" }
];*/

//let nivel;

/*for (let i = 0; i < tabelaVitorias.length; i++) {
    if (resultadoVitorias >= tabelaVitorias[i].minVitorias && resultadoVitorias <= tabelaVitorias[i].maxVitorias) {
        nivel = tabelaVitorias[i].descricao;
        break; 
    }
}*/


//console.log("O Herói tem saldo de  " + resultadoVitorias + " está no nível de " + nivel);
