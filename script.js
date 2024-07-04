// 1. Écrire un programme qui demande à l'utilisateur de saisir deux nombres et les stocke dans deux variables, 
// puis affiche leur somme.
// let numberA =  prompt("entrer un nombre");
// let numberB =  prompt("entrer un nombre");
// let number = parseInt (numberA + numberB);

// alert(number);



//2. Écrire un programme qui demande à l'utilisateur de saisir son âge et affiche un message différent selon que l'utilisateur est mineur,
//  majeur ou senior

// let age = prompt("Entrer Votre Age")
// if (age>=18){
//     alert("Vous Etes Majeur")
// } else alert("Vous Etes Mineur");





//3. Écrire un programme qui demande à l'utilisateur de saisir un nombre 
// et affiche si ce nombre est pair ou impair.

//  let entier = parseInt( prompt("Verifie un nombre"));
//  if (entier %2==0){
//     alert("Ce nombre est pair")
//  }else alert("Ce nombre est impair");

//4. Écrire un programme qui demande à l'utilisateur de saisir un nombre et vérifie s'il est divisible par 3 ou non.

// let devis = parseInt(prompt("Vérifie s'il est divisible par 3 ou non"));
// if (devis % 3 ===0) {
//     alert("Ce nombre est devisibe");
// }else alert("Ce nombre n'est pas devisible");


//5. Écrire un programme qui demande à l'utilisateur de saisir une lettre et affiche si cette lettre est une voyelle ou une consonne.

// var voyelle =["a","e","i","o","u"];
// function testVoyelle(){
// 	var entreLettre = prompt("entrer une lettre") ;
// 	if(voyelle.indexOf(entreLettre)!==-1){
// 		alert("Cette lettre est une voyelle");
// 	}
// 	else{
// 		alert("Cette lettre est une consonne");
// 	}
// }

// testVoyelle();

// 6.Écrire un programme qui demande à l'utilisateur de saisir un nombre et vérifie 
// s'il est positif, négatif ou nul.

// let Nombre = prompt("Saisi un nombre");
// function changerAffichage() {


//     if (Nombre > 0) {

//         alert("positif")


//     } else if (Nombre < 0) {
//         alert("negatif")


//     } else if (Nombre == 0) {
//         alert("nul")

//     }
// }
// changerAffichage();

//7. Écrire un programme qui demande à l'utilisateur de saisir son prénom et 
// affiche un message de bienvenue personnalisé.

// let prenom = prompt("Entrer Votre Nom");
//alert (`Bienvenue ${prenom}`)



//9.Écrire un programme qui demande à l'utilisateur de saisir un nombre et calcule sa factorielle.

// let facto =function (){
//     let n = parseInt(prompt("Saisi un nombre"));
//     let f = 1
//     for (let i = 1; i <=n; i++){
//         f*=i
//         alert(`le factorielle de ${n} est : ${f}`);
//     }
// }

// facto();

// Écrire un programme qui demande à l'utilisateur de saisir deux nombres et les compare, puis affiche un message indiquant si le premier nombre est plus grand, plus petit ou égal au deuxième nombre.
// var nb1 = Number(prompt("Entrer un premier nombre"));
// var nb2 = Number(prompt("Entrer un deuxième"));
// var total = (nb1 - nb2)
// if (total < 0) {
//     alert("La première valeure ("+ nb1 + ") est plus petite que la seconde (" + nb2 + ").");
// }

// else if (total == 0) {
//     alert("Les deux valeurs (" + nb1 + ") sont identiques.");
// }

// else if (total > 0) {
//     alert("La première valeure ("+ nb1 + ") est plus grande que la seconde (" + nb2 + ").");
// }



// fontions 

// Écrire une fonction qui prend en entrée deux tableaux de nombres de même longueur et renvoie un nouveau tableau qui contient
//  la somme des éléments de chaque tableau.

// function tableau() {
//  const tab1 = [1, 2, 3, 4, 5];
// const tab2 = [6, 7, 8, 9, 10];
// // var result;
// var somme1=0
// var somme2 =0


// for (var i=0; i < tab1.length; i++){
//     somme1+=tab1[i]
//     somme2+=tab2[i] 
// }
// console.log(somme1);
// console.log(somme2);

// let tab3 = [];
// for (let i = 0; i < 1; i++) {
//     // tab3.push(i)
//     tab3[0]=somme1;
//     tab3[1]=somme2;
// }
// console.log(tab3.length);

// console.log(tab3);
// }
// tableau() 

// Écrire une fonction qui prend en entrée un tableau de chaînes de caractères et renvoie un 
// nouveau tableau qui contient la longueur de chaque chaîne.

// function tabLongueur(tabChaine) {
//     // Initialisation du tableau pour stocker les longueurs
//     let tabLongueurs = [];
  
//     // Parcours du tableau de chaînes
//     for (let i = 0; i < tabChaine.length; i++) {
//       // Calcul de la longueur de chaque chaîne et ajout au tableau tabLongueurs
//       tabLongueurs.push(tabChaine[i].length);
//     }
  
//     // Retourner le tableau contenant les longueurs des chaînes
//     return tabLongueurs;
//   }
  
//   // Exemple d'utilisation de la fonction
//   let unTableau = ["Moustapha", "khoudoss", "Ibrahima", "Saliou", "Khadim"];
//   let longueurs = tabLongueur(unTableau);
//   console.log(longueurs); // Affiche: [9, 8, 8, 6, 6]
// //   console.log( unTableau );


// Écrire une fonction qui prend en entrée un nombre et renvoie un tableau contenant tous les nombres premiers inférieurs à ce nombre.
//     function trouverNombresPremiers(maxNumber){
//     let nombresPremiers = [];
  
//     // Vérifie si un nombre est premier
//     function estPremier(num) {
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           return false;
//         }
//       }
//       return num > 1;
//     }
  
//     // Remplir le tableau avec les nombres premiers inférieurs à maxNumber
//     for (let i = 2; i < maxNumber; i++) {
//       if (estPremier(i)) {
//         nombresPremiers.push(i);
//       }
//     }
  
//     return nombresPremiers;
//   }
  
//   // Exemple d'utilisation de la fonction
//   let max = 20;
//   let premiers = trouverNombresPremiers(max);
//   console.log(`Nombres premiers inférieurs à ${max}:`, premiers);
  


// Écrire une fonction qui prend en entrée un tableau de nombres et renvoie un nouveau tableau contenant les carrés de chaque nombre.
//   function calculerCarres(tableau) {
//     let carres = [];
  
//     // Parcourir le tableau et calculer le carré de chaque nombre
//     for (let i = 0; i < tableau.length; i++) {
//       let carre = tableau[i] * tableau[i];
//       carres.push(carre);
//     }
  
//     return carres;
//   }
  
//   // Exemple d'utilisation de la fonction
//   let nombres = [1, 2, 3, 4, 5];
//   let carres = calculerCarres(nombres);
//   console.log("Les carrés des nombres:", carres);
  
// fin fonctions

// Écrire une boucle qui affiche tous les nombres pairs de 0 à 20 dans la console.
// for (let i = 0; i <= 20; i +=2) {
//     console.log(i);
//   }


// Écrire une boucle qui parcourt un tableau de nombres et affiche dans la console les nombres impairs.

let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let nombre of tableau) {
 if (nombre % 2 !== 0) {
    console.log(nombre);
}
}
