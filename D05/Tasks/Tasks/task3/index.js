function capitalizeWords(str){
    var words = str.split(" ")
    for(i=0 ;i< words.length ; i++){
        console.log(words[i][0].toUpperCase() + "" + words[i].slice(1));
    }
}

capitalizeWords("the quick brown fox")
function alphabetOrder(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var sortedText = "";

    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (alphabet[i] === str[j]) {
                sortedText += str[j];
            }
        }
    }
    
    console.log(sortedText)
}
alphabetOrder("javascript")
function longestWord(str){
    wordsList = str.split(" ")
    var longestWord = ""
    var maxLength = 0
    for(i=0; i<wordsList.length; i++){
        if(wordsList[i].length > maxLength){
            maxLength = wordsList[i].length
            longestWord = wordsList[i]
        }
    }
    console.log(longestWord) 
}
longestWord('Web Development Tutorial')
function swapOfChar(str){
    var letters = str.split("")
    var result = "";
    for(i=0 ; i<letters.length ; i++){
        if(letters[i]===letters[i].toUpperCase()){
            result += letters[i].toLowerCase()
        }else{
            result += letters[i].toUpperCase()
        }
    }
    return result
}

console.log(swapOfChar('Egypt'))
function uniqueCharacters(str){
    var characters = str.split("")
    var uniqueText = ""
    for(i=0 ; i<characters.length ; i++){
        if(uniqueText.includes(characters[i]) === false){
            uniqueText += characters[i]
        }
    }
    console.log(uniqueText)
}
uniqueCharacters("thequickbrownfoxjumpsoverthelazydog")