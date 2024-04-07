class combattant {

    constructor(attack, precision, pointsDeVie) {
        this.attack = attack;
        this.precision = precision;
        this.pointsDeVie = pointsDeVie;
    }

    
    getAttackAchille() {
    if (Achille.precision > Math.random()) {
        Hercule.pointsDeVie = Hercule.pointsDeVie - Achille.attack

        console.log("Achille lance une attaque talon !")
        } 

    else {
        console.log("Achille s'est foulé la cheville... Il rate son attaque.")
        }
    }

    getAttackHercule() {
    if (Hercule.precision > Math.random()) {
        Achille.pointsDeVie = Achille.pointsDeVie - Hercule.attack

        console.log("Hercule lance son attaque poing de feu !")
        }

    else {
        console.log ("Hercule a mal à son poing... Il rate son attaque.")
        }
    }
}

console.log ("Le combat commence !")

    let Achille = new combattant (10, 0.7, 120)
    let Hercule = new combattant (20, 0.5, 100)
    
    while (Achille.pointsDeVie > 0 && Hercule.pointsDeVie > 0) {
    Achille.getAttackAchille()
    console.log ("Hercule a ", Hercule.pointsDeVie, "de points de vie restant.")

    Hercule.getAttackHercule()
    console.log ("Achille a", Achille.pointsDeVie, "de points de vie restant.")

    if (Achille.pointsDeVie == 0) {
        console.log ("Hercule remporte le combat !")
    }

    if (Hercule.pointsDeVie == 0) {
        console.log ("Achille remporte le combat !")
    }
    }
