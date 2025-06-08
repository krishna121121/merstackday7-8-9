
let str1=prompt("please enter the text you want to reverse")

function reverse(str1){
    return str1.split("").reverse().join("")
}


document.write(reverse(str1) );
document.write("<br>")


let str2=prompt("please entre text to sort the element")
function sort(str){
    return str.split("").sort().join("")
}
document.write(sort(str2))

