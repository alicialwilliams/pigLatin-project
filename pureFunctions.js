

//Encode Vowels

let vowels = "AaEeIiOoUu";

function pigLatinVowel(str) {

    let wordArray = str.split('')

    for (var i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[0])) {
            str = wordArray.join('');
            if (i === 0) {
                if (!vowels.includes(str[0])) {
                    return null
                }
                str = str + '-yay';
                return str;
            } else
                str = str + '-ay';
            return str;
        }

    }
}
console.log(pigLatinVowel("explain"))
console.log(pigLatinVowel("out"))
console.log(pigLatinVowel("love"))


//Encode Consonants
function pigLatinConsonant(str) {

    if (vowels.includes(str[0])) {
        return null;
    }
    let firstVowel = 1;



    //conditional to stop "-ay" on every spacebar input in code.js
    if (str.length === 0 || str.length === " ") {
        return
    }
    for (let i = 0; i < str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            firstVowel = [i];

            break;
        }
    }

    str = str.slice(firstVowel).concat('-').concat(str.slice(0, firstVowel)).concat('ay');

    return str;
}

console.log(pigLatinConsonant("the"));
console.log(pigLatinConsonant("bread"));
console.log(pigLatinConsonant("me"));

//Encode anyword

function allPigLatin(str) {

    if (vowels.includes(str[0])) {
        return pigLatinVowel(str)
    } else {
        return pigLatinConsonant(str)
    }

}


console.log(allPigLatin("under"))
console.log(allPigLatin("stupid"))
console.log(allPigLatin("cry"))

//Full sentence english to pig latin
function pigSentence(str) {
    let sentence = str.toLowerCase().split(' ');
    var piggedPhrase = [];

    for (var i = 0; i <= sentence.length - 1; i++) {
        piggedPhrase.push(allPigLatin(sentence[i]));


    };
    return piggedPhrase.join(' ');
}

console.log(pigSentence("moist egg dopest island"))
console.log(pigSentence("Green coconuts are great"))


//Reverse Pig Latin Attempt.

function reversePigWordVowel(pigLatinVowel) {

    return pigLatinVowel.slice(pigLatinVowel.search('-') + 1, 1, -2) + pigLatinVowel.slice(0, pigLatinVowel.search('-'));
}

console.log(reversePigWordVowel("eat-yay"))
console.log(reversePigWordVowel("under-yay"))
console.log(reversePigWordVowel("omelet-yay"))
console.log(reversePigWordVowel("explain-yay"))


function reversePigLatinConsonant(pigLatinConsonant) {
    return pigLatinConsonant.slice(pigLatinConsonant.search('-') + 1, -2) + pigLatinConsonant.slice(0, pigLatinConsonant.search('-'));

}

console.log(reversePigLatinConsonant("ope-hay"))
console.log(reversePigLatinConsonant("eers-chay"))
console.log(reversePigLatinConsonant("anana-bay"))
console.log(reversePigLatinConsonant("ile-smay"))
console.log(reversePigLatinConsonant("inally-fay"))




function reverseAllPigLatin(allPigLatin) {

    if (vowels.includes(str[0])) {
        return reversePigWordVowel(pigLatinVowel)
    } else {
        return reversePigLatinConsonant(pigLatinConsonant)
    }

}



console.log(reverseAllPigLatin("ope-hay"))
console.log(reverseAllPigLatin("eers-chay"))


function revPiggedPhrase(phrase) {
    let sentence = phrase.split(' ');
    var revPiggedPhrase = [];

    // if (vowels.includes(str[0]) && vowels.includes(str[1])) {
    //     return
    // }
    console.log(sentence.length)
    for (var i = 0; i <= sentence.length - 1; i++) {

        revPiggedPhrase.push(reversePigLatinConsonant && reversePigWordVowel(sentence[i]))
        //revPiggedPhrase.push(reversePigWordVowel(sentence[i]));

    };
    console.log(revPiggedPhrase)
    return revPiggedPhrase.push();
}

console.log(revPiggedPhrase('it-yay oes-day ot-nay ork-way et-yay'))
console.log(revPiggedPhrase('i-yay do-ay ot-nay eat-yay anana-bay everyday-yay'))






module.exports = { pigLatinVowel, pigLatinConsonant, allPigLatin, pigSentence, reversePigWordVowel }