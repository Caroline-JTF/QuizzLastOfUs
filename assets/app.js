const form = document.querySelector('.formQuizz');

let tableauResults =[];

//Tableau bonnes réponses
const reponses = ['c', 'b', 'c', 'a', 'b', 'b', 'a', 'a', 'b', 'c'];
const emojis = ['💩','😭','🔫 ','👎🏻','🤏🏻','👏🏻','🤌🏻', '🎉','🍾'];

const titreResultats = document.querySelector('.resultats h2');
const comResultats = document.querySelector('.commentaire');
const toutesLesQuestions = document.querySelectorAll('.questionBloc');

let verifTableau = [];

//Envoyer le formulaire
form.addEventListener('submit', (e) =>{
    //Pour ne pas rafraichir la page après avoir valider le quizz
    e.preventDefault();
    //console.log(document.querySelector('input[name="q1"]:checked').value);

    //Fonction pour envoyer tous les résultats
    //On commence ici à 1 car on commence à partir de la question Q1 < (strictement inférieur) à 12 car 11 questions.
    for(i = 1; i < 11; i++){
        //on push et on met ${i} qui permet de psuh de Q1 à Q2 à Q3 etc etc...
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    //console.log(tableauResults);

    verifFunc(tableauResults);

    //Permet de remettre un tableau vide car sinon les résultats se cumule dans le même tableau
    tableauResults =[];
    
})

//Fonction pour savoir si c'est vrai ou pas
function verifFunc(tabResultats){
    for (let a=0; a < 10; a++ ){

        if(tabResultats[a] === reponses [a]){
        verifTableau.push(true);

        } else {
            verifTableau.push(false);
        }
    }   

    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau= [];
}

// ftableau de gif

let tabGif = [
    'assets/gif/clicker.mp4',
    'assets/gif/joel-abby.mp4',
    'assets/gif/joel-salt.mp4', 
    'assets/gif/ellie-glasses.mp4', 
    'assets/gif/ellie-omg.mp4', 
    'assets/gif/ellie.mp4', 
    'assets/gif/joel-choqued.mp4', 
    'assets/gif/joel-coffee.mp4', 
    'assets/gif/joel-deprim.mp4', 
    'assets/gif/tlou-party.mp4', 
    'assets/gif/ellie-pop-corn.mp4'];

//Fonction pour afficher les résultats
function afficherResultats(tabCheck){

    //Permet de renvoyer les fautes
    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    //our faire apparaitre un gif
    const addGif = document.getElementById('gif');

    //console.log(nbDeFautes);

    switch(nbDeFautes){

        case 0 :
            titreResultats.innerText = "TADAM... 10/10 🍾";
            comResultats.innerText = "Mais c'est GE-NI-AL t'es trop badass!";
            // afficher le gif
            addGif.src = tabGif[7];
            break;
        case 1 :
            titreResultats.innerText = "TADAM... 9/10 🎉";
            comResultats.innerText = "T'étais à ça 🤏🏻 d'être EX-TRA-OR-DI-NAI-REUUUUUH!!!";
            addGif.src = tabGif[6];
            break;
        case 2 :
            titreResultats.innerText = "TADAM... 8/10 🎉";
            comResultats.innerText = "T'étais à ça 🤏🏻 d'être génial(e)";
            addGif.src = tabGif[10];
            break;
        case 3 :
            titreResultats.innerText = "TADAM... 7/10 👏🏻";
            comResultats.innerText = "Lô potit 7/10 qui fait zizir 🤌🏻";
            addGif.src = tabGif[2];
            break;
        case 4 :
            titreResultats.innerText = "TADAM... 6/10 👏🏻";
            comResultats.innerText = "T'es à ça 🤏🏻 de faire partie de l'élite";
            addGif.src = tabGif[3];
            break;
        case 5 :
            titreResultats.innerText = "TADAM... 5/10 👏🏻";
            comResultats.innerText = "T'es à ça 🤏🏻 de faire partie de l'élite";
            addGif.src = tabGif[9];
            break;
        case 6 :
            titreResultats.innerText = "TADAM... 4/10 👎🏻";
            comResultats.innerText = "Ah un point de la moyenne dommage !";
            addGif.src = tabGif[5];
            break;
        case 7 :
            titreResultats.innerText = "TADAM... 3/10 👎🏻";
            comResultats.innerText = "Tu devrais peut-être rejouer au jeu";
            addGif.src = tabGif[4];
            break;
        case 8 :
            titreResultats.innerText = "TADAM... 2/10 😭🔫 ";
            comResultats.innerText = "T'as rage quit au milieu du jeu ou quoi ?";
            addGif.src = tabGif[8];
            break;
        case 9 :
            titreResultats.innerText = "TADAM... 1/10 😭🔫 ";
            comResultats.innerText = "Tu as évité la bulle, mais... T'es quand même nul(le)";
            addGif.src = tabGif[1];
            break;
        case 10 :
            titreResultats.innerText = "TADAM...0/0 ! 💩";
            comResultats.innerText = "Est-ce que tu as déjà jouer au jeu au moins?";
            addGif.src = tabGif[0];
            break;
    }

    addGif.style.width ='500px';
    addGif.style.height ='auto';
}


//Permet de mettre les bg en vert ou rouge selon si c'est une bonne ou mauvaise réponse

function couleursFonction(tabValsBool){

    for(let j = 0; j < tabValsBool.length; j++){

        //Ci dessous un moyen de mettre les bg de nos questions en vert si c'est juste ou rouge si c'est faux

        if(tabValsBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8'; 
            //Permet de rajouter la class echec
            toutesLesQuestions[j].classList.add('echec');

            //Permet d'enlever la class echec au bout de 5ms
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

// //Enlever les couleurs vertes et rouges quand on clique dessus pour changer la réponse

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})



//AFFICHER LES REPONSES :

const viewReponse = document.querySelector('.btnView');
viewReponse.addEventListener('click', (e) =>{
    e.preventDefault();

    let tricherie = confirm("Es-tu sur de vouloir tricher?");

    if (tricherie) {

    let tricherie = confirm("Non parce que tricher c'est mal");

        if(tricherie){

        let tricherie = confirm("Bon ok j'arrête");

            if(tricherie){

            let tricherie =confirm("MDR je déconne ! Arrête de vouloir de tricher là !");

                if(tricherie){

                let tricherie =  confirm("Je vais faire une sieste");

                    if(tricherie){
                        
                        let tricherie = confirm("Quoi ? T'es encore en train d'essayer de tricher ?");

                        if(tricherie){

                            let tricherie = confirm("Sâche que tu n'auras aucun mérite à tricher jeune padawan");

                            if(tricherie) {
                                for (let i = 0 ; i < 10 ; i++){
                                        const reponse = reponses[i];
                                        const radio = document.querySelector('input[type=radio][name=q'+(i+1)+'][value='+reponse+']');
                                        radio.checked=true;
                                    }
                            }
                        }
                    }
                }
            }
        }
    }
});

//afficher année en cours sur le copyright

function displayYear (){
    let date = new Date();
    let copyright = document.getElementById('copyright');

    date = date.getFullYear();

    return copyright.innerText = 'Copyright © ' + date + ' | QuizzTheLastOfUs';
}

displayYear();