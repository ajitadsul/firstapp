const list = ["January","March","April","June"];
console.log(list);
 a=0
 b=2
 c=list.splice(a, 0, list[b])
 console.log(c);
 console.log(list);
    // splicing the array elements using splice() method
list.splice(b,1,...c);
console.log(list);