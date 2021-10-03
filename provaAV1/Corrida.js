class Corrida{
    constructor(carros, pilotos){
        this.carros = carros;
        this.pilotos = pilotos;
    }
    
largada = (pilotos, carros, cb) => {
    for (let i = 0; i < pilotos.lenght; i++) {
        carros[i].acelerando0a100(pilotos[i], cb[i]);
        i++;}
        return (relatorio);
    }
    //piloto[i], carros[i], relatorio[i]

}
    
module.exports = Corrida