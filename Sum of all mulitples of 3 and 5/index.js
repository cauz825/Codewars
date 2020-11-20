//My Solution
function findSum(n) {
    let array=[]
    for(i=0; i<=n; i++){
      if(i % 3 === 0 || i % 5 === 0){
        array.push(i)
      }
    }
    let sum = array.reduce((a,b) => {return a+b})
    return sum;
  }

  //Top Solution
  function findSum(n) {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
      if (i % 3 ===0 || i % 5 === 0) result += i
    }
    return result
  }