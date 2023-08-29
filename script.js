// Objekt är collections av properties, properties är key-value pairs.

// objekt är en referens tex:
const palette = {
  pink: "#FF7898",
  blue: "FFGG7456",
  purple: "#yhgdws",
};

// du kommer ofta se folk använda const när vi vill att referenser ska vara samma
// men innehållet kan komma och gå
// men vanligaste är const med arrays och objects
// däremot om vi använder const med variabler så innehåller det utrymme att spara hela det värdet
// det är alltså inte en referens

//object literal, så skapar du ett objekt
const course = {
  name: "Frontend",
  point: 50,
  duration: 70,
  teacher: {
    name: "Helena",
    lastName: "Johansson",
  },
  getName: function () {
    console.log("Name: " + this.name);
    // i objektet kan vi använda this för att nå associerade properties. Lite knäppt...
    // men funkar inte om vi inte använder this
  },
};

// objekt är en dynamisk collection av props
// när vi skapat ett objekt kan vi lägga till, ta bort eller edita properties om vi vill.

// vill vi komma åt props kan vi göra det med . notation eller bracket notation
console.log(course.name);
console.log(course["name"]);

course.getName();

// OBJECTS ÄRVER AV ANDRA OBJECT
// i JS så ärver objekt från andra objekt. Objekt har en dold property som heter __proto__
// den pekar på deras prototyp. Alla objekt ärver från det globala Object.prototype.
console.log(course.__proto__ === Object.prototype);

// vårt course objekt har properties så som toString och toLocaleString även om
// vi ej definierat dessa metoder
// dom är ärvda av objektet Object.prototype

// OBJEKT HAR HASHMAPS
// ett objekt i JS är likt vad i andra språk kallas för map eller hash table.
// keys har en 0(1) access time.

//0(1) betyder att det tar en visst konstant tid att acessa keyn oavsett hur mycket data som finns.
//0(n) betyder att det en viss linjär tid beroende på listans storlek. Ju större lista desto
// längre tid tar det att accessa.
// det här är varför vi kan se objekt som maps där vi kan söka efter unika keys.

const courseMap = {
  1: { name: "Frontend", points: 50 },
  2: { name: "Databaser", points: 50 },
  3: { name: "Backend", points: 50 },
};

// FUNKTIONER

// det skiljer sig en hel del mellan JS och Java när det gäller funktiner. Sen Java8 har vi Lamba expressions
// som gör att vi kan skicka funktioner som metod argument om vi vill, om parametern är ett interface.
// I JS är alla funktioner objekt.

// det betyder att du kan skicka funktioner till andra funktioner eller skapa en funktion som tar en
// annan funktion
// som argument, Kalla HOC higher order component
// man kan se det här som ett lite mer funktionsorienterat sätt, som visserligen Java också kan ha
// men det är mer rent objektorientrat

// i Java är varje funktion knuten till en klass. Vi kan inte bara skapa en funktion helt själv -
// du måste ha en klass
// lite repetition, vad finns det för options för en metod?

/*
scope — 
(optional) definierar synligheten för metoden (public, private, protected). 
om inget är definierat så är den by default public

modifier — 
(optional) definierar typen av metod (static, final or abstract). 
Om inget är definierat så är metoden bunden till instansen av klassen by default

returnType — 
(mandatory) definierar typen som metoder returnerar. Kan vara vilken primitiv 
datatyp som helst eller ett objekt.
Om inget ska returneras kan du specifiera metoden som void

arguments — 
(optional) definiera en lista med argument inklusive deras typ som ska skickas till funktionen
*/

// ARROW FUNCTION, har inte tillgång till this
// ARROW FUNCTIONS
// introducerades i ES6, en del av modern JS
// gör det lättare och fortare att skriva funktioner
const calcAge = (birthYear) => {
  return 2023 - birthYear;
};

// FUNCTIONS DECLARATION AND EXPRESSION
// function declaration kan du kalla på innan den faktiskt är dekolarerad i koden. Det kan
// du inte göra med function expression.

// FUNCTION DECLARATION
// function declarations är HOISTED, kort sagt betyder det att vi kan på ett säkert sätt
// kalla på dom innan dom är deklarerade. Hoisting är något som introducerades i ES&,
// I JS innebär hoisting att default beteende är att flytta alla deklarationer till toppen av scopet
// innan koden körs. Kort sagt, det ger oss en fördel i och med att det inte spelar någon roll var
// funktioner och variabler är deklarerade, dom flyttas till toppen av deras scope oavsett om
// deras scope är globalt ellr lokalt. Det är det här som gör att vi kan kalla på en funktion
// innan den är deklarerad.

hoisted();

// FUNCTION DECLARATION
function hoisted() {
  console.log("Hoisted");
}

// FUNCTION EXPRESSION
const notHoisted = function () {
  console.log("Not hoisted");
};

function slicer(breakfast) {
  return breakfast * 2;
}

function makeSandwich(bread, cheese) {
  const breadSlices = slicer(bread);
  const cheeseSlices = slicer(cheese);

  const sandwich = `bla bla ${breadSlices} `;
}

console.log(makeSandwich(2, 4));
