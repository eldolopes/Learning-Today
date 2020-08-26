function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
    //metodo publico
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            return velocidadeAtual += delta
        }else{
            return velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
 