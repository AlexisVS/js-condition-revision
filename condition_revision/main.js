// # EX1
// - ## Écrivez 3 nombre et affiche la somme des 2 premiers et la multiplication des 2 derniers. Afficher les résultats de la façon suivante :
let x = 5, y = 6, z = 7;
// - ## Version 1 : 
//     - ## Somme des 2 premiers = ?
console.log(`Sommes des 2 premiers = ${x + y}`);
//     - ## Multiplication des 2 derniers = ?
console.log(`Produit des 2 derniers = ${y * z} !!!!!!!!!!!!!`);
// - ## Version 2 : 
//     - ## Somme de ? et ? vaut ?
console.log(`Somme de ${x} et ${y} vaut ${x + y}`);
//     - ## Multiplication de ? et ? vaut ? 
console.log(`Multiplication de ${y} et ${z} vaut ${y * z} !!!!!!!!!!!`);
// - ## Version 3 : 
//     - ## ? + ? = ?
console.log(`${x} + ${y} = ${x + y}`);
//     - ## ?*?= ?
console.log(`${y} * ${z} = ${y * z} !!!!!!!!!!!`);
// - # EX2
// - ## Entrez 5 nombre et déplacez les valeurs.
let temp, a = 5, // 1
    b = 4, // 5 
    c = 2, // 4
    d = 3, // 3
    e = 1; // 2
// - ## Les affichages demandés sont :
// - ## Avant la rotation, le 1er entier = ? et le 2èm entier = ? et le 3èm entier = ? ................ 
// - ## Après la rotation, le 1er entier = ? et le 2èm entier = ? et le 3èm entier = ? .................
// - ## Il y a 2 version et vous devez utiliser une seule variable TMP
// - ## Version 1 rotation vers la droite :
//     - ## Le 1er nombre va dans le 2ème, le 2ème dans le 3ème et le 3ème dans le 4ème et le 4ème dans le 5ème
//     - ## Et le 5 ème dans le 1er
// 1er
// temp = a;
// a = e;
// e = temp;
// temp = b;
// b = e;
// e = temp;
// temp = e;
// e = c;
// c = temp

// // 2ieme
// temp = 1
// temp = b;
// b = a
// a = e
// e = c
// c = d
// d = c
// c = temp
// console.log(a,b,c,d,e);
// - ## Version 2 rotation vers la gauche:
//     - ## Le 1er nombre va dans le 5ème, le 5ème dans le 4ème et le 4ème dans le 3 ème et le 3ème dans le 2ème et le 2ème dans le 1 er
// // 1er
// temp = b;
// b = e
// e = temp;
// 2 ieme

temp = b;
b = e;
e = temp;


console.log(a, b, c, d, e)
// // - # EX3
// // - ## vous devez utiliser if – else if - else
// // - ## Entrez 2 nombre nb1 et nb2 (ex 3 et 6) puis faire soustraction de la façon suivante : 
// //     - ## Si nb1 > nb2 faire nb1 - nb2
// //     - ## SiNon faire nb2 – nb1
// let nb1 = 3, nb2 = 6;
// nb1 > nb2 ? console.log(nb1 - nb2) : console.log(nb2 - nb1);
// - # EX4
// - ## Entrez 3 nombre nb1 , nb2 , nb3 et affichez le nombre plus grand 
// - ## Exemple:
//     - ## nb1 = 4 / nb2 = 45 / nb3 = 8
//     - ## affichez : “le nombre plus grand et 45”
let nb1 = 4, nb2 = 45, nb3 = 8;
console.log(` Le nombre le plus grand est : ${[nb1, nb2, nb3].sort((a, b) => b - a)[0]}`)