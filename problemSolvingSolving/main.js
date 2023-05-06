// <!--

//   Absolut! Här är några problem som nybörjare kan öva på att lösa i JavaScript:

// TASK ETT!

// Skriv en funktion som tar en lista av tal som parameter och returnerar summan av alla talen i listan.

// 1.
// FUNKTION summaAvLista(LISTA tal):
//     SUMMA = 0
//     FÖR VARJE t INOM tal:
//         SUMMA = SUMMA + t
//     RETURNERA SUMMA

/* let numbers = [1, 2, 3, 4, 5]
    function listOfNumbers(list) {
    let result = 0
    list.map((item) => {
        result = result + item
    })
    return result
    }
    console.log(listOfNumbers(numbers))
    */

// Skriv en funktion som tar två tal som parametrar och returnerar det största av dem.
// skriv en funktion med två parameter
// returnera största talet

/*
    function displayHighestNumber(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo)
    }
    console.log(displayHighestNumber(6, 9))
    */

// Skriv en funktion som tar två strängar som parametrar och returnerar true om de är lika, annars false.

// skriv en funktion som tar två strängar som parameter
//returnera true om de är lika, annars false

function myString(firstString = '', secondString = '') {
  if (firstString === secondString) {
    return true
  } else {
    return false
  }
}
console.log(myString('chik', 'chik'))

// Skriv en funktion som tar en sträng som parameter och returnerar strängen baklänges.

// Skriv en funktion som tar en lista av strängar som parameter och returnerar den längsta strängen i listan.

// Skriv en funktion som tar en lista av tal som parameter och returnerar en ny lista med enbart udda tal.

// Skriv en funktion som tar en sträng som parameter och returnerar antalet ord i strängen.

// Skriv en funktion som tar en lista av strängar som parameter och returnerar en ny lista med samma strängar, fast i omvänd ordning.

// Skriv en funktion som tar en sträng som parameter och returnerar true om strängen innehåller bokstaven "a", annars false.

// Skriv en funktion som tar en lista av tal som parameter och returnerar true om summan av alla tal i listan är större än 100, annars false.

// Skriv en funktion som tar en lista av tal som parameter och returnerar det högsta talet i listan.

// Skriv en funktion som tar en sträng som parameter och returnerar true om strängen innehåller enbart siffror, annars false.

// Hoppas dessa problem hjälper dig att öva på att tänka som en programmerare och lösa problem i JavaScript!

function test() {
  for (let i = 1; i <= 10; i++) {
    let row = `Seven multiply ${i} is equal to ${7 * i}`
    console.log(row)
  }
}
console.log(test())

function printMultiplicationTables(num) {
  for (let i = 1; i <= 10; i++) {
    let row = num + ' * ' + i + ' = ' + num * i
    console.log(row)
  }
}
console.log(printMultiplicationTables(2))
// 1.
// FUNKTION summaAvLista(LISTA tal):
//     SUMMA = 0
//     FÖR VARJE t INOM tal:
//         SUMMA = SUMMA + t
//     RETURNERA SUMMA

// 2.
// FUNKTION störstaAvTvå(tal1, tal2):
//     OM tal1 > tal2 DÅ
//         RETURNERA tal1
//     ANNARS
//         RETURNERA tal2

// 3.
// FUNKTION jämförSträngar(sträng1, sträng2):
//     OM sträng1 == sträng2 DÅ
//         RETURNERA true
//     ANNARS
//         RETURNERA false

// 4.
// FUNKTION baklängesSträng(sträng):
//     NY_STRÄNG = ""
//     FÖR i = LÄNGD_AV(sträng)-1 NER TILL 0:
//         NY_STRÄNG = NY_STRÄNG + sträng[i]
//     RETURNERA NY_STRÄNG

// 5.
// FUNKTION längstaSträngen(LISTA strängar):
//     LÄNGSTA_STRÄNG = ""
//     FÖR VARJE sträng INOM strängar:
//         OM LÄNGD_AV(sträng) > LÄNGD_AV(LÄNGSTA_STRÄNG) DÅ
//             LÄNGSTA_STRÄNG = sträng
//     RETURNERA LÄNGSTA_STRÄNG

// 6.
// FUNKTION uddaTal(LISTA tal):
//     NY_LISTA = TOM_LISTA
//     FÖR VARJE t INOM tal:
//         OM t % 2 == 1 DÅ
//             LÄGG_TILL t I NY_LISTA
//     RETURNERA NY_LISTA

// 7.
// FUNKTION antalOrd(sträng):
//     ANTAL = 1
//     FÖR i = 0 TILL LÄNGD_AV(sträng)-1:
//         OM sträng[i] == " " DÅ
//             ANTAL = ANTAL + 1
//     RETURNERA ANTAL

// 8.
// FUNKTION omvändaSträngar(LISTA strängar):
//     NY_LISTA = TOM_LISTA
//     FÖR i = LÄNGD_AV(strängar)-1 NER TILL 0:
//         LÄGG_TILL strängar[i] I NY_LISTA

//  -->
