function isPalindrome(word ){
    let palabraReverso = "";
    let palabra = word.toLowerCase();

    for (let i = palabra.length - 1; i >= 0; i--){
        palabraReverso += palabra[i];
    }
    if (palabra == palabraReverso){
        return true;
    }else{
        return false;
    }

}

let word = "Madam";
console.log(isPalindrome(word));


