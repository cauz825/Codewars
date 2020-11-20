//My Solution
function descendingOrder(n){
    let arr = n.toString().split("")
    return parseInt(arr.sort((a,b)=>{return b-a}).join(""))
  }

//Top Solution
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }