function sortear(){
    let min = parseInt(document.querySelector(".input-min").value);
    let max = parseInt(document.querySelector(".input-max").value);


    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Por favor, insira valores válidos!");
        return;
    }
    
    
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById("resultado").textContent = numero;

    
}

