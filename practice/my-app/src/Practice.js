console.log("Before");
setTimeout(()=>console.log("Inside SetTimeout"),1000)
function abc(){
    return new Promise((resolve)=>{
        console.log("ok");
        resolve("Inside Promise")
        console.log("then");})
}
abc().then((data)=>console.log(data))
console.log("After");
