//My Solution
function cubeOdd(arr) {
    let cubedArr = arr.map(ele => (ele * ele * ele))
    let count = 0
    for(i=0; i<cubedArr.length; i++) {
      if(cubedArr[i] % 2 !== 0){
          count = count + cubedArr[i] 
      }
      if(cubedArr.includes(NaN))
        return undefined
    }
    return count
  }

//Top Solution
let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }