// First attempt

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){


  for (let i = 0; i < array.length; i++) {
    if (enteredCode === correctCode) {
      // proceed
    } else {
      // coupon not valid
    }

  for (let i = 0; i < array.length; i++) {
    if (currentDate < expirationDate) {
      // coupon valid
    } else {
      // coupon not valid
    }
  }
  }
}


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

  if (enteredCode === correctCode) {
    let splitCurrDate = currentDate.split("");
    let splitExpDate = expirationDate.split("");

    if (splitCurrDate[2] < splitExpDate[2]) {
      return true;
    } else if (splitCurrDate[0] > splitExpDate[0]){
      return true
    }
  }
  return false
}


// Found online, but doesnt work perfectly
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if(enteredCode === correctCode){
    dateArr = currentDate.split(' ');
    exDateArr = expirationDate.split(' ');

    if(dateArr[2] < exDateArr[2]){
      return true;
    } else if(dateArr[2] === exDateArr[2]){
      if(months.indexOf(dateArr[0]) < months.indexOf(exDateArr[0])){
        return true;
      } else if(months.indexOf(dateArr[0]) === months.indexOf(exDateArr[0])){
        if(dateArr[1] <= exDateArr[1]){
          return true;
        }
      }
    }
  }
  return false;
}

// One line answer
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)

}
