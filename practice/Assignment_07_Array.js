var arr=['a',4,5,'A',10,25,'d','D']
for (var i=0;i<arr.length;i++){
    // console.log(arr[i]);
    // console.log(String(arr[i]));
    for(var j=i+1;j<arr.length;j++){
        if(String(arr[i]).toLowerCase()==String(arr[j]).toLowerCase()){
      arr.splice(i,1)
        }
    }
}
    
console.log(arr);