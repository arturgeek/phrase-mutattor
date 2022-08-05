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
    //console.log(words);
    
    return words;
}

const getShrinkedWords = (words) => {
    return words.map( word => {
        return shrinkWord(word);
    })
};

const shrinkWord = (word) => {
    let shrinked = word.split("");
    let first = shrinked.shift();
    let last = shrinked.pop();

    let length = "";
    if( word.length > 2 ) {
        length = [...new Set(shrinked)].length;
    }

    shrinked = first + length + last;    
    return shrinked;
}

const buildResult = ( words, separators ) => {
    let sentence = words.map( (word, index) => word + separators[index] ).join("");
    return sentence;
}

function wordParser( string ) {

    let words = getWords(string);
    let shrinkedWords = getShrinkedWords(words);

    //console.log(words);
    //console.log(shrinkedWords);

    words.forEach( (word, index) => {
        //console.log(string);
        //string = string.replace( new RegExp(word, 'g'), shrinkedWords[index] ) 
        string = string.replace( word, shrinkedWords[index] ) 
    });
    
    return string;
}

console.log("-".repeat(50))

var output = wordParser("Creativity is thinking-up new things. Innovation is doing new things!");
let result = "C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

output = wordParser("||Creativity is thinking-up new things since 99. Innovation is doing new things!!!");
result = "||C6y is t4g-up n1w t4s s3e 99. I6n is d3g n1w t4s!!!";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

output = wordParser("!i want to ch3ck ThiS pa55worD right Now--//");
result = "!i w2t to ch3ck T2S pa55w2D r3t N1w--//";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

output = wordParser("1a 2ab 3abc ...[]... 15abcdefgh... quatre20dix '''");
result = "1a 2ab 3a1c ...[]... 15a6h... q4e20d1x '''";

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

// Your last JavaScript (Node) code is saved below: