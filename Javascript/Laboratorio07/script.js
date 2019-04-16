function Cantante() {

    this.nome = nome;
    this.genere = genere;
    this.tour = tour;

    this.scheda = () => this.nome + ", " + this.genere + ", " + this.tour;
}

const c1 = new Cantante("Caparezza", "pop-rock", ["Torino", "Roma"]);
const c2 = new Cantante("Dani Faiv", "rap arcobaleno", ["Torino", "Roma"]);
const schede = document.getElementById("schede");