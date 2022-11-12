
// rotate valves one place to anthor place 
let arr = [1,2,3,4,5]
let n = 3 

function rotate(arrVal, num){
for (let i=0; i<num; i++){
    let  lastVal = arrVal.pop()
    arrVal.unshift(lastVal)
    console.log(arrVal) }

}
rotate(arr, n)

// Strings Checking 
let str1 = "codehere"
let str2 = "ocdeheer"

function CheckingStr(val1, val2){
  let arr1 = val1.split('').sort().join('')
  let arr2 = val2.split('').sort().join('') 

if (arr1 === arr2) return true;
else return false 
}
console.log(CheckingStr(str1, str2))

// count  words 

let array = ["aaa",'bbb', 'ccc', 'aaa', 'bbb' ]
let obj = {}

for (let i=0; i<array.length; i++){
let item = array[i]
if (obj[item]){
    obj[item] = obj[item]+1
}else{
    obj[item] = 1
}
}
console.log(obj)