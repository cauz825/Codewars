//My Solution
function findLongest(array){
    // code here
    let mostDigits = 0
    for(i=0; i<array.length; i++) {
      if(array[i].toString().length > mostDigits.toString().length)
        mostDigits = array[i]
    }
    return mostDigits
  }

  //Top Solution
  function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
  }