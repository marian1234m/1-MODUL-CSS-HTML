// document.write(`<h2>Hello world</h2>`);
// alert(`onion`);
console.log(`salut`);

var a = 2;
var b = 5;
a=10;
b=5;
var s= a + b;
console.log(s);

a = 23;
s= a % b  //se returneaza restul impartirii
console.log(s);

a++;

a--;
//a=a+b e acelasi cu a+= b
console.log(a);
a= `a`;
b=`c`;
console.log(a>b)

a= 5;
b= 10;

var c = `Salut! Ce mai faci`;
console.log(c[5]);
console.log(c.indexOf(`mai`))  //metoda foarte buna de cautare
console.log(c.length);
console.log(c.substring(1,4))

var text = `Marți, compania care a devenit primul Unicorn românesc, a vândut acțiuni
la prețul de 56 de dolari pe unitate, preț care este peste valoarea de 52-54 de dolari propusă pe
ntru oferta publică inițială. La cea mai recentă rundă de investiții, din 1 februarie, compania era 
evaluată la 35 de miliarde de dolari, iar cotația actuală aste de 62,28 dolari pe acțiune, cu peste 6 
dolari mai mult față de prețul cu care a vândut UiPath acțiuni.`
/*lung text
poz ,
substring cuv unicorn
*/
var uni = `Unicorn`;

var lungime = text.length;
var pozVirgula = text.indexOf(`,`)
var pozInceput = text.indexOf(uni);
var pozFinal = pozInceput + uni.length;
var uniSubstring= text.substring(pozInceput, pozFinal)
 console.log(lungime);
 console.log(pozVirgula);
 console.log(text.indexOf(`Unicorn`));
console.log(uniSubstring)

//  for(var i=0; i<text.length; i++){   
//  console.log(text[i])         //e bun sa te uiti la el
//  }
 

a = 8;
 b = 7;
 console.log(a >= 14);  // convertirea la acelasi tip de date

 if (a>b){
     console.log(`numarul mai mare este ` + a);
 }
 else{
    if (b>a) console.error(`numarul mai mare este ` + b);      //nice
     else{
     console.log(`numerele sunt egale`);}
 }

 var z;
z = 50;

if(z % 2 == 0){
    console.log(`numarul este par`);
}
else{
    console.log ((alert `numarul e impar`));
}

var z = 23;

switch(z){
    case 1:
        console.log(`luni`)
        break;
    case 2 :
        console.log(`marti`)
        break;
    case 3 :
        console.log(`miercuri`) 
        break;   
    case 4 :
            console.log(`joi`)   
            break;  
     case 5 :
            console.log(`vineri`) 
            break;   
    case 6 :
            console.log(`sambata`) 
            break;   
     case 7 :
            console.log(`duminica`)   
            break;
     default :
            console.log(`nu exista ziua cu numarul ` + z)       
}

function f(x){
    var y = x + 2;
    return y;
    //return x + 2;
}
// var v = f(2);
// console.log(v);  //bun
console.log(f(10))     //bun

function suma(x1, x2){
    
    return x1 + x2;
}

console.log(suma(6666, 4));

//o functie cu un parametru numeri. functia returneaza stringul par sau impar

function parImpar(x){
    if(x % 2 == 0){ return `numarul este par`;}
    else{
        return`numarul este impar`;
    }
}
// x=16;
console.log(parImpar(29));
//scrieti o functie ce calculeaza aria unei forme geometrice folosind switch

//a*b/2 aria triunghiului
// a*b dreptunghi
//trapez (b+B)*h/2 

function arie(forma, a, b, c){
    var rezultat;
    var pi = 3.14;

    switch(forma){
        case `triunghi`: 
        rezultat = a * b / 2;
        break;
        case `dreptunghi`:
            rezultat = a * b;
            break;
        case `trapez`:
            rezultat  = ( a + b ) *c / 2; 
        break;
        case `cerc`:
            rezultat = pi * a * a;
        break;
        default:
            rezultat = `nu stiu sa calculez aria pentru ` + forma;   
    }

    return rezultat;
}

console.log(`aria triunghiului este: ` + arie(`triunghi`, 5, 7));
 
//                  //STRUCTURI REPETITIVE
// for(var i=1; i<=100; i++){  // MAI POTRIVIT PENTRU ITERATII, PENTRU A NUMARA DE EX DIN 5 IN 5  
//     console.log(i);
// }
// var i=1;
// while(i<=100){
//     document.write(i);
//     console.log(i);
//     i++;
// }
// var i = 1;
// do{
//     console.log(i);
//     i++;
// }


/*
divizibil, (a,  b, c) - va afisa in consola 
toate numerele cuprinse intre a si b, divizibile cu c 13, 25, 5
creare un array, numerele divizibile in array, returnare
*/

function divizibil(nr1, nr2, nr3){
 for (var i = nr1; i<=nr2; i++ ){
    if(i % nr3== 0){
        console.log(i);
    }
 }
}
// divizibil(13, 25, 5);

//  function div(d, e, f){
//  var i = d;
//  while( i <= e ){
//      if(i % f == 0)
//      console.log(i)
//  }
//  }
//  div(5, 30, 10);

var cuvant = `telefon`;

for(i = 0; i <cuvant.length; i++) {
   if(cuvant[i] == `l`){
    console.log(`am gasit litera`)
    break;
   }  
}


//functie ce primeste ca parametru un string. functia returneaza true sau false in functie de cum e cuvantul, 
//palindrom sau nu(aerisirea)
function palindrom(cuvant){
    var p = true;
    var ultimEl = cuvant.length-1;
    for(var i = 0; i<= cuvant.length/2; i++){
        if(cuvant[i] !== cuvant[ultimEl - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrom(`aerisirea`))

var ar = [0, 5, `salut`, true, 25];

console.log(ar.length);

ar.push(10);

console.log(ar);

ar.pop();

console.log(ar);

ar = [
[1, 2, 3], 
[4, 5, [6, 23, 25]], 
[7, 8, 9]
]
console.log(ar[1][2][0]);     // uita te ce da!!!!!!!!
/*
creare un array, numerele divizibile in array, returnare

*/

// function divizibil(nr1, nr2, nr3){
//     var arr = [];
//  for (var i = nr1; i<=nr2; i++ ){
//     if(i % nr3== 0){
//         console.log(i);
//          arr.push(i);
//     }
//  }
//  return arr;
// }
// divizibil(13, 25, 5);
// console.log(arr)

function arDivizibil(a, b, c){
    var d = [];
    for (var i = a; i <= b; i++){
        if(i % c == 0){
            d.push(i);   
        }
    }
    return d;
}
console.log(arDivizibil(7, 31, 5));


ar = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
    ];
  for(var i = 0; i< ar.length; i++){
    for(var x=0; x < ar[i].length; x++){
    console.log(ar[i][x])
  }
}

// sirul fibonacci 0, 1, 1, 2, 3, 5, 8, 13

/*
functie fib(n) care fa returna primele n numere din sirul lui fibonacci
*/

// function fib(n){
//     var n = 10;
//     var fi = [0, 1];
//     for(var i = 2; i < n; i++) {
//         fi.push(fi[i - 1] + fi[i - 2]);
//     }
// return fi;
// }
// console.log(fib(20));

//profu
function fibonacci(n){
    var fib = [0, 1];
    for(var i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}
console.log(fibonacci(13));
var a = 4;
for(var i= 0; i < 10; i++){
    if(i == a){
        break;  //importanta si diferenta de continue
    }
//console.log(i)
}
// var a = [5, 35, 66];
// a[1]= 444;
// console.log(a)
// a.push(77);
// console.log(a);
// a.pop();
// console.log(a) 
