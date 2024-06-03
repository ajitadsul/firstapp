var arr1=[2,5,5,6,7,10,5,6];
var mf=0
var ele
for (var i=0;i<arr1.length;i++){
    var m=0
    for (var j=i;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
                m=m+1;
            }
    }
    if(mf<m){
        mf=m
        ele=arr1[i]
    }
   
}
console.log(ele);
console.log(mf);