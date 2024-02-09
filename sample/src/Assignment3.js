v=153
str1=String(v)
str11=str1.split('')
console.log(str11)
var v1=0
for(var i=0;i<str11.length;i++){
    
    v1=v1+(Number(str11[i])**str11.length)
}

console.log(v1)