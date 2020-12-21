//My Solution
function findUniq(arr) {
    let sortArr = arr.sort((a,b) => {return a - b})
    if(sortArr[0] === sortArr[1]){
      return sortArr[sortArr.length - 1]
    }
    else{
      return sortArr[0]
    }
  }

//Top Solution
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }