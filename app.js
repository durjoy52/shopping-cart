// updateCasePrice and Number
function updateProductNumber(product,price,isIncrease){
    const productInput = document.getElementById(product + '-count')
    let productValue = productInput.value;
     if(isIncrease){
        productValue = parseInt(productValue) + 1
     }
     else{
         if(productValue > 0)
        productValue = parseInt(productValue) - 1
     }
          productInput.value = productValue 
         //  update total 
     const productPrice = document.getElementById(product + '-price')
     productPrice.innerText = productValue * price
   //   update subTotal 
   calculateTotal()
}
 function getInputValue(product){
    const productInput = document.getElementById(product + '-count').value
    const productNumber = parseInt(productInput)
    return productNumber
 }

function calculateTotal(){
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;

   const subTotal  = phoneTotal + caseTotal;

   document.getElementById('sub-total').innerText = subTotal;

   const tax = subTotal / 10
   document.getElementById('tax-amount').innerText = tax
   
   document.getElementById('total-price').innerText = subTotal + tax
}
// phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click',function(){
 updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
 updateProductNumber('phone',1219,false)
})

// handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click',function(){
updateProductNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
})