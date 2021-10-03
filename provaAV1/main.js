let Veiculo = require('./Veiculo')
let Piloto = require('./Piloto')
let Corrida = require('./Corrida')
let api = require('./api')

let arnaldo = new Piloto('Arnaldo',4,15)
//console.log(arnaldo.xp())

let pedro = new Piloto('Pedro',2,30)
//console.log(pedro.xp())
let felipe = new Piloto('Felipe', 3, 20)

let carrango = new Veiculo('carro','corsa',2000,'cinza',100)
let ferrari = new Veiculo('carro','ferrari',2021,'vermelha',400)
let lamborghini = new Veiculo('carro', 'lamborghini', 2021, 'azul', 300)


let pilotos = [arnaldo, pedro, felipe]
let carros = [carrango, ferrari, lamborghini]

let relatorio = (obj) => {
      api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {
        if (respostaDistancia.length == Veiculo.totalVeiculosCorrida){
              api['api/v1/recorde']().then((resposta) => {
                console.log(`O recorde é de ${resposta}`)
              }).catch(erro => console.log(erro))
        }
      }).catch(erro => console.log(erro))
  
    console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km' )
    corrida.podio(api['api/v1/posicao']);
    console.log("Diferença de tempo entre o atual colocado e o anterior: " + obj.feedback)
}

let corrida = new Corrida(pilotos, carros)
corrida.largada(relatorio)





 
