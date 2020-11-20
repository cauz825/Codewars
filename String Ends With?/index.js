//My Solution
function solution(str, ending){
    if(ending.length > 0)
      return str.slice(-(ending.length)) === ending
    else
      return true
  }

//Top Solution
function solution(str, ending){
    return str.endsWith(ending);
  }