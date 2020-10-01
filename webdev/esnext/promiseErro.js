function chamandoOuNao (execute, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        } else {
            resolve(execute)
        }
    })
}

function execute() {
    return 'Deu tudo certo!'
}
const probabilidade = 0.5
chamandoOuNao(execute(), probabilidade)
    .then(console.log)
    .catch(err => console.log(err))