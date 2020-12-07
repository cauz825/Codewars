//My Solution
function removeUrlAnchor(url){
    let splitUrl = url.split('#')
    return splitUrl[0]
  }

//Top Solution
function removeUrlAnchor(url){
    return url.split('#')[0];
  }