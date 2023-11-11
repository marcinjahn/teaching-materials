// 1. Pyta użytkownika o liczbe
// 2. Pyta użytkownika o 2 liczbę
// 3. Pyta użytkownika o operację do wykonania

// Wspieramy 2 operacje: dodawanie i odejmowanie - niech to będą funkcje

// Wyśweitlamy wynik użytkownikowi

// const liczba =  prompt("Podaj liczbę");


debugger;

const liczba1 = parseFloat(prompt("Podaj liczbę"));
const liczba2 = parseFloat(prompt("Podaj drugą liczbę"));
const operacjaLiczbowa = prompt("'Dodaj' czy 'odejmij'?");
let wynik
if (operacjaLiczbowa === "Dodaj") {
    wynik = sum(liczba1, liczba2);
} else if (operacjaLiczbowa === "odejmij") {
    wynik = roznica(liczba1, liczba2);
} else {
    alert("Dodaj' czy 'odejmij'?")
}
console.log(wynik)

function sum(liczbaA, liczbaB){
    return liczbaA + liczbaB;
}
function roznica(liczbaA, liczbaB){
    return liczbaA - liczbaB
}