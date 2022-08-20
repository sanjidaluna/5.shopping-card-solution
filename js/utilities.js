function getTextElementVlueById(elementId){


    const phoneTotalElement = document.getElementById(elementId)
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;
  }


  function setTextElementVlueByID(elementId, value){
    const subTotalElement = document.getElementById(elementId)
    
    subTotalElement.innerText = value
  }
  
  function calculateSubTotal(){
  
   const currentPhoneTotal = getTextElementVlueById('phone-total')
   
   const currentCaseTotal = getTextElementVlueById('case-total')
   const currentSubTotal =  currentPhoneTotal + currentCaseTotal;

   setTextElementVlueByID('sub-total',currentSubTotal)
    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1 ).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTextElementVlueByID('tax-amount',taxAmount)

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementVlueByID('final-total',finalAmount)
  }