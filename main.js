const imagens=[
    "assets/foto1.jpeg",
    "assets/foto2.jpg",
    "assets/foto3.jpg",
    "assets/foto4.jpg",
    "assets/foto5.jpg"
]
let indice=0;

//dataset
const sentimentos={
    confuso:0,
    triste:0,
    feliz:0,
}
const imgElement=document.getElementById("img");
const resultado=document.getElementById("result");
 

imgElement.src=imagens[indice];
function registrar(sentimento){
    sentimentos[sentimento]++;
    indice++;
    if(indice<imagens.length){
        imgElement.src=imagens[indice]
    }
    else{
        finalizar()
    }
}
function finalizar(){
    let sentimento_final="confuso";
    let maior_valor= sentimentos.confuso;
    for(let s in sentimentos){
        if(sentimentos[s]>maior_valor){
            maior_valor=sentimentos[s];
            sentimento_final=s
        }
    }
    resultado.innerHTML="Em função das suas respostas, você parece estar se sentindo: "+sentimento_final.toUpperCase();
    falarResultado(sentimento_final)
}

function falarResultado(sentimento){
    const msg=new SpeechSynthesisUtterance("analisando suas respostas. Você parece estar se sentindo "+sentimento);
    speechSynthesis.speak(msg)
}