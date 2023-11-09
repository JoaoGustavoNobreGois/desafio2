let elo = rank(20,7)



function rank(vit, derrot){
    let saldo = vit - derrot
    return saldo
}

if(elo<10){
    console.log("O herói tem  " + elo + "  de saldo e está no nível ferro")
}
else if(elo>=11 && elo<=20){
    console.log("O herói tem " + elo + "de saldo e está no nível bronze")
}
else if(elo>=21 && elo<=50){
    console.log("O herói tem " + elo + "de saldo e está no nível prata")
}
else if(elo>=51 && elo<=80){
    console.log("O herói tem " + elo + "de saldo e está no nível ouro")
}
else if(elo>=81 && elo<=90){
    console.log("O herói tem " + elo + "de saldo e está no nível diamante")
}
else if(elo>=91 && elo<=100){
    console.log("O herói tem " + elo + "de saldo e está no nível lendário")
}
else if(elo>=101){
    console.log("O herói tem " + elo + "de saldo e está no nível imortal")
}