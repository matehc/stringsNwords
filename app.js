let string = "'abc1xyz1abc"
let word = "b"

function wordEnds(str,word){
    
    let results = [],   // stores the index of instances of word in the string
    len = str.length,   //
    pos = 0;

    while(pos < len) {
        pos = str.indexOf(word, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    let newChars = [];

    for(let i=0; i < results.length; i++ ){

        let beforeChar = str[results[i] - 1];
        let afterChar = str[results[i] + word.length];

        if(beforeChar !== undefined) {
        newChars.push(beforeChar);
        }
        
        if(afterChar !== undefined) {
        newChars.push(afterChar);
        }
    
    }

    return newChars.join("");

}

wordEnds(string, word)




