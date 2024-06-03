'use strict'
const str1="i am from Pune"
res=''
d=str1.split('').reduce((a,i)=>{
    return i+a;
},"")

console.log(d);