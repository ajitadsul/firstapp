arr = [NaN, 0, 15, false, -22, '',undefined, 47, null,1]
l=[]
t=0
for(var i=0;i<arr.length;i++){
      if(arr[i]){
        l[t]=arr[i]
        t++
      }
     
//     if(arr[i]){
//     console.log(arr[i])
//       }
// else{
//     arr.splice(i,1)
//     //console.log()
// }
}
// var s=new Set(arr)
// x=[...s]
// console.log(x);
console.log(l);