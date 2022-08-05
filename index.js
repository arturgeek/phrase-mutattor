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
const SEPARATORS_REGEX = /([a-zA-Z])\w+/g;

const getWords = ( string ) => {
    let words = string.split(WORDS_REGEX);
    words = words.filter( word => word != " " && word != "" );
    
    return words;
}

const getSeparators = ( string ) => {
    let separators = string.split( SEPARATORS_REGEX );
    separators = separators.filter( separator => separator.match(WORDS_REGEX) && separator != "" );
    
    return separators;
}

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
    let separators = getSeparators(string);

    let shrinkedWords = words.map( word => {
        return shrinkWord(word);
    })
    
    return buildResult( shrinkedWords, separators );;
}

var output = wordParser("Creativity is thinking-up new things. Innovation is doing new things!");
let result = "C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!";
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!

console.log(output);
console.log(result);
console.log( output === result )

console.log("-".repeat(50))

output = wordParser("||Creativity is thinking-up new things since 99. Innovation is doing new things!!!");
result = "C6y is t4g-up n1w t4s s3e 99. I6n is d3g n1w t4s!";

console.log(output);
console.log(result);
console.log( output === result )

// Your last JavaScript (Node) code is saved below:

