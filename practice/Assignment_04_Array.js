var a='The Quick Brown Fox'
console.log(a);
aa=a.split('')
str1=''
var b=aa.forEach(abc)

function abc(e,i){
    if(e.match(/[A-Z]/)){
        aa[i]=e.toLowerCase()
    }
    else{
        aa[i]=e.toUpperCase()
    }
    //console.log(aa[i]);
    str1=str1+aa[i]
}
console.log(str1);