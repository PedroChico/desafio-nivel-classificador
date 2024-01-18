let nomeHeroi = "Peekachoo"
let quantExpXP = 1500
let nivel = ""

if(quantExpXP < 1000) {
    nivel = "Ferro";
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
} else if(quantExpXP >= 1000 && quantExpXP <= 2000) {
        nivel = "Bronze";
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
    } else if(quantExpXP > 2000 && quantExpXP <= 5000) {
            nivel = "Prata";
            console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
        } else if(quantExpXP > 5000 && quantExpXP <= 7000) {
                nivel = "Ouro";
                console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
            } else if(quantExpXP > 7000 && quantExpXP <= 8000) {
                nivel = "Platina";
                console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
                } else if(quantExpXP > 8000 && quantExpXP <= 9000) {
                        nivel = "Ascendente";
                        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
                        } else if(quantExpXP > 9000 && quantExpXP <= 10000) { 
                                nivel = "Imortal";
                                console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
                } else { nivel = "Radiante";
                         console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
                }


       






