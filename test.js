const nombreChoisie =Math.floor(1000+Math.random()*9000);
let tab1 = nombreChoisie.toString().split('').map(chiffre => parseInt(chiffre));

let monBouton = document.getElementById("valider");

if (monBouton) {
    monBouton.addEventListener("click", () => {
        let message = "";
        let valeurUtilisateur = document.getElementById("nombre").value;

        // Vérification que l'utilisateur a bien entré un nombre
        if (isNaN(valeurUtilisateur) || valeurUtilisateur.length !== 4) {
            message = "Veuillez entrer un nombre de quatre chiffres !";
        } else {
            let tab2 = valeurUtilisateur.toString().split('').map(chiffre => parseInt(chiffre));

            let nombreDeChiffreTrouve = 0;
            let nombreDeChiffreBienPositionne = 0;
            let dejaCompteur = [false, false, false, false]; // Pour éviter de compter deux fois le même chiffre

            // Comparaison des chiffres trouvés (peu importe la position)
            for (let k = 0; k < 4; k++) {
                if (tab2.includes(tab1[k]) && !dejaCompteur[k]) {
                    nombreDeChiffreTrouve++;
                    dejaCompteur[k] = true;
                }
            }

            // Comparaison des chiffres bien positionnés
            for (let k = 0; k < 4; k++) {
                if (tab1[k] === tab2[k]) {
                    nombreDeChiffreBienPositionne++;
                }
            }

            // Génération du message de retour
            if (nombreDeChiffreBienPositionne === 4 && valeurUtilisateur == nombreChoisie) {
                message = "Félicitations, vous avez trouvé le bon chiffre : " + nombreChoisie;
            } else {
                message = "Vous avez trouvé " + nombreDeChiffreTrouve + " bon(s) chiffre(s) et " + nombreDeChiffreBienPositionne + " chiffre(s) bien positionné(s).";
            }
        }

        // Affichage du message
        document.getElementById("message").textContent = message;
    });
}
