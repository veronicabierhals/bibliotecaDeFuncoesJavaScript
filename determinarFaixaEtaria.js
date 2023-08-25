function determinarFaixaEtaria (idade){
    if (idade <= 21){
        return "jovem";
    } else if (idade <= 65){
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

const retornoFaixaEtaria = determinarFaixaEtaria(67);
console.log(retornoFaixaEtaria);