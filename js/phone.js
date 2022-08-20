// function  updateTotalPrice(number){
//     const caseTotalPrice = number * 1219;
//  const caseTotalElement = document.getElementById('phone-total')
//  caseTotalElement.innerText = caseTotalPrice;
// }

// document.getElementById('btn-phone-plus').addEventListener('click',function(){

// const phoneNumber = getCaseNumberField('phone-number-field');
// console.log(phoneNumber)

// const increaseNumberOfPhone = phoneNumber + 1;
// setNewcaseNumber('phone-number-field', increaseNumberOfPhone)
// updateTotalPrice(increaseNumberOfPhone)


// })

// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const phoneNumber = getCaseNumberField('phone-number-field');
// console.log(phoneNumber)


// const decreaseNumberOfPhone = phoneNumber - 1 ;
// setNewcaseNumber('phone-number-field', decreaseNumberOfPhone)
// updateTotalPrice(decreaseNumberOfPhone)
// })

function updatePhoneNumber(IsIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousphoneNumber = parseInt(phoneNumberString)
    console.log(previousphoneNumber)

    let newPhoneNumber;

  if(IsIncrease){
    newPhoneNumber = previousphoneNumber + 1

  }
  else{
    newPhoneNumber = previousphoneNumber -1 

  }
  phoneNumberField.value = newPhoneNumber  
  return newPhoneNumber
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219
const phoneTotalElement = document.getElementById('phone-total');
phoneTotalElement.innerText = phoneTotalPrice

}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber= updatePhoneNumber(true)
   updatePhoneTotalPrice(newPhoneNumber)

   calculateSubTotal()


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber=  updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)

    calculateSubTotal()

})