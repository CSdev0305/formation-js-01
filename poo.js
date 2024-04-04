class Personne {
  constructor(nom, prenom, sexe) {
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
  }
  informationGenerale() {
    console.log("Information sur la personne");
    console.log(`Nom: ${this.nom}\nPrénom: ${this.prenom}\nSexe: ${this.sexe}`);
  }
}
let personne = new Personne("Jean", "Paul", "M");
let personne2 = new Personne("Joyce", "Elio", "F");
// personne2.informationGenerale()
// personne.informationGenerale();

// const prenom = personne.prenom;
// const nom = personne.nom;
const { nom, prenom, sexe } = personne;
const pers = {
  age: 50,
  nom: nom,
  prenom: prenom,
  sexe: sexe,
};
const pers2 = {
  age: 50,
  ...personne,
};
const pers3 = {
  age: 50,
  nom,
  prenom,
  sexe
};
console.log(pers, pers2, pers3);
