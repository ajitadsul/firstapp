var date=new Date("1997-05-24")
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())

date.setFullYear('1998')
date.setMonth('02')
date.setDate('31')
console.log(date.getFullYear())
console.log(typeof(date))
console.log(typeof(date.toLocaleDateString()))
console.log(date.toLocaleString())