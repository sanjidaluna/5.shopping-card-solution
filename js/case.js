/* 
1.add event listner to the case plus button
2.get the value inside the case number field (input field)
3.convert the number to an integer
4.calculate the new case number
5.set the value to the case number field 
internal
 */

function getCaseNumberField(caseField){
    const caseFieldNumber  = document.getElementById(caseField)
    const previousCaseFieldNumberString = caseFieldNumber.value;
    const previousCaseFieldNumber = parseInt(previousCaseFieldNumberString)
    return previousCaseFieldNumber;
}

function setNewcaseNumber(caseField , caseNumber){
    const caseFieldNumber = document.getElementById(caseField)
    caseFieldNumber.value = caseNumber
   
}

function  updateTotalPrice(number){
    const caseTotalPrice = number * 59;
 const caseTotalElement = document.getElementById('case-total')
 caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){

//    const caseNumberField = document.getElementById('case-number-field')
//    const caseNumberString = caseNumberField.value 
//    const previousCaseNumber = parseInt(caseNumberString)
//    const newCaseNumber = previousCaseNumber + 1;
//    caseNumberField.value = newCaseNumber;

const caseNumber = getCaseNumberField('case-number-field')

const newPositiveCaseNumber = caseNumber + 1

setNewcaseNumber("case-number-field" , newPositiveCaseNumber)

// const caseTotalPrice = newPositiveCaseNumber * 59;
//  const caseTotalElement = document.getElementById('case-total')
//  caseTotalElement.innerText = caseTotalPrice;
updateTotalPrice(newPositiveCaseNumber)

calculateSubTotal();

})
 document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field')
//     const caseNumberString = caseNumberField.value 
//     const previousCaseNumber = parseInt(caseNumberString)
   
//       const newCaseNumber = previousCaseNumber - 1;
//       caseNumberField.value = newCaseNumber;

const caseNumber = getCaseNumberField('case-number-field')
const newNegetiveCaseNumber = caseNumber - 1
setNewcaseNumber("case-number-field" , newNegetiveCaseNumber)


// const caseTotalPrice = newNegetiveCaseNumber * 59;
//  const caseTotalElement = document.getElementById('case-total')
//  caseTotalElement.innerText = caseTotalPrice;
updateTotalPrice(newNegetiveCaseNumber)

calculateSubTotal();
  })

