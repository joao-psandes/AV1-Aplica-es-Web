let api = require('./api')

class Corrida {
    constructor(pilotos, carros) {
        this.pilotos = pilotos;
        this.carros = carros;
    }

    largada = (relatorio) => {
        for(let i = 0; i < this.carros.length; i++) {
            this.carros[i].acelerando0a100(this.pilotos[i], relatorio);
        }
    }
    
    podio = (colocacao) => {
        for(let i = 1; i < colocacao.length+1; i++) {
            console.log("O piloto: " + colocacao[i-1] + " foi o " + i + "º colocado");
        }
    }
}

module.exports = Corrida