str1='WOK'
str11=str1.split('')
str2=''
for(i=str11.length-1;i>=0;i--){
    console.log(str11[i])
    str2=str2+str11[i]
}
console.log(str2)