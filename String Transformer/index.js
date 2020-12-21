//My Solution
function stringTransformer(str) {
    let orderedStr = str.split(' ').reverse().join(' ')
    let resultArr = orderedStr.split('').map(letter => letter === letter.toUpperCase()
                               ? letter.toLowerCase()
                               : letter.toUpperCase())
    return resultArr.join('')
  }

//Top Solution
function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }