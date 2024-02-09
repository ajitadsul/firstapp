list_of_marks = [12,18,25,24,2,5,18,20,20,21]
summ=0
for (let x of list_of_marks){
    summ=summ+x
}
avgg=summ/list_of_marks.length
console.log(avgg)

lst=[]
for (let y of list_of_marks){
    if(avgg < y){
        lst.push(y)
    }
}
console.log(lst)
per=(lst.length*100)/list_of_marks.length
console.log(per)