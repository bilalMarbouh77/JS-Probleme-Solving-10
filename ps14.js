function getMiddle(s) {
    let num = s.length / 2
    let str = ""
    if(Number.isInteger(num)){
        str+=s[num-1]+s[num]
    }else{
        str +=s[Math.floor(num)]
    }
    return str;
}
console.log(getMiddle("testing"))

// You are going to be given a non-empty string
// .Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"