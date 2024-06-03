arr=[0,2,5,4,6,8]
arr2=[arr[0]]
for(var i=1;i<arr.length;i++){
    if(arr[i-1]%2==0 && arr[i]%2==0){
        arr2.push("-",arr[i])
    }
    else{
        arr2.push(arr[i])
    }
}
console.log(arr2.join(""));