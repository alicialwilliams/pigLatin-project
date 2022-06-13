
//getting Input/OutPut Elements for translation to pig latin
const textInput = document.querySelector("#textInput");

const textOutput = document.getElementById("textOutput");


//evenListener for translation to pig latin
textInput.addEventListener("input", pigPhrase)


//function for sentence
function pigPhrase(event) {

    textOutput.textContent = event.target.value

    let textInput = event.target.value.toLowerCase().split(' ');

    let piggedPhrase = [];
    // let punctuation = ".,!@#$";
    // let matches = 0;

    console.log(textInput.length)


    for (let i = 0; i <= textInput.length - 1; i++) {
        piggedPhrase.push(allPigLatin(textInput[i]));
        console.log(textInput[i])

    };



    textOutput.textContent = piggedPhrase.join(' ')
    console.log(piggedPhrase)
}

// function punct(str) {
//     var punctuation = ".,!@#$";
//     var matches = 0;
//     for (var i = 0; i < str.length - matches; i++) {
//         if (punctuation.indexOf(str[i]) != -1) {
//             str = str.substr(0, i) + str.substr(i + 1) + str[i--];
//             matches++;
//         }
//     }
//     return str;
// }








//getting Input/OutPut Elements for translation to pig latin
// const textInputReverse = document.querySelector("#textInputReverse");

// const textOutputReverse = document.getElementById("textOutputReverse");


// textInputReverse.addEventListener("input", reversePigPhrase)


