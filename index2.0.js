/*
Write a program that parses a sentence and replaces each word with the following: 
1) The first letter of the word
2) The number of distinct characters between first and last character
3) The last letter of the word. 
For example, Smooth would become S3h. 
Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location in the answer. 
A few of the things we will be looking at is accuracy, efficiency, solution completeness. 
*/


const WORDS_REGEX = /\W/g;
const SEPARATORS_REGEX = /([a-zA-Z])+/g;

const getWords = ( string ) => {
    let words = [...string.matchAll(SEPARATORS_REGEX)].map( matched => {return matched[0] });
    words = words.filter( word => word.length > 2 && word != " " && word != "" );
    return words;
}

const getShrinkedWords = (words) => {
    return words.map( word => {
        return shrinkWord(word);
    });
};

const shrinkWord = (word) => {
    let shrinked = word.split("");
    let first = shrinked.shift();
    let last = shrinked.pop();
    let length = [...new Set(shrinked)].length;

    return first + length + last;
}

function wordParser( string ) {

    let words = getWords(string);
    let shrinkedWords = getShrinkedWords(words);

    console.log(words);
    console.log(shrinkedWords);

    words.forEach( (word, index) => {
        string = string.replace( word, shrinkedWords[index] ) 
    });
    
    return string;
}

console.log("-".repeat(50))

var phrase = "Creativity is thinking-up new things. Innovation is doing new things!";
var output = wordParser(phrase);
let result = "C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!";
////expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

phrase = "||Creativity is thinking-up new things since 99. Innovation is doing new things!!!";
output = wordParser(phrase);
result = "||C6y is t4g-up n1w t4s s3e 99. I6n is d3g n1w t4s!!!";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

phrase = "!i want to ch3ck ThiS pa55worD right Now--//";
output = wordParser(phrase);
result = "!i w2t to ch3ck T2S pa55w2D r3t N1w--//";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

phrase = "1a 2ab 3abc ...[]... 15abcdefgh... quatre20dix '''";
output = wordParser(phrase);
result = "1a 2ab 3a1c ...[]... 15a6h... q4e20d1x '''";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

phrase = "andres arturo morales";
output = wordParser(phrase);
result = "a4s a3o m5s";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!


// Your last JavaScript (Node) code is saved below:

