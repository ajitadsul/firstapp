var arr1 = [ 3, 4, 2, 1 ];
var sum=0
for(var i=0;i<arr1.length;i++){
a=Math.pow(arr1[i],3)
sum=sum+a

}
console.log(sum);

console.log(arr1.reduce(abc));
function abc(a,b){
    return a+b**3
}