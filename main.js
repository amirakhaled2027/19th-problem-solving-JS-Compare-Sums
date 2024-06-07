//Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false
function bothNum(num1, num2) {
    var sum = num1 + num2;
  
    if(sum > 360) {
      return true;
    } else {
      return false;
    }
  }
  console.log(bothNum(200, 80));