function query(txt) {return document.querySelector(txt);}

let iniciar = query("#botao-inicio");
iniciar.addEventListener("click", ()=> {
    let intro = query("#intro");
    intro.style.position = "absolute";
    intro.style.top = "-9999px";
    console.log("sucesso");
});
// Teste