a=[1, 2, 3] 
b=[100, 2, 1, 10]
c=[]
for(let x of a){
    if(b.includes(x)){
       console.log("ok");
    }
    else{
        c.push(x)

    }
}
for(let y of b){
    if(a.includes(y)){
       console.log("ok");
    }
    else{
        c.push(y)

    }
}
console.log(c);