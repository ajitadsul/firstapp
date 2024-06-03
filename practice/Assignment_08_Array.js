array1 = [1,0,2,3,4,7];
array2 = [3,5,6,7,8,13];
arr3=[]
sum=0
for(var i=0;i<array2.length;i++){
    sum=array1[i]+array2[i]
    arr3[i]=sum
}
console.log(arr3);